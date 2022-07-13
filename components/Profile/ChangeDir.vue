<template>
  <div class="w-100 mt-0">
    <v-row class="row-container ma-0 pa-8 bg-white br-8px bxs-4px">
      <v-col cols="12" >
        <v-text-field
          v-model="calle"
          label="Calle"
          placeholder=""
          persistent-placeholder
          :error-messages="errorHandler('calle', errorData.calle)"
          @input="$v.calle.$touch()"
          @blur="$v.calle.$touch()"
          required
        />
      </v-col>
      <v-col cols="3" >
        <v-text-field
          v-model="numero"
          label="Número"
          placeholder=""
          persistent-placeholder
          :error-messages="errorHandler('numero', errorData.numero)"
          @input="$v.numero.$touch()"
          @blur="$v.numero.$touch()"
        />
      </v-col>
      <v-col cols="9" >
        <v-text-field
          v-model="piso_depto"
          label="Piso - Departamento"
          placeholder=""
          persistent-placeholder
          :error-messages="errorHandler('piso_depto', errorData.piso_depto)"
          @input="$v.piso_depto.$touch()"
          @blur="$v.piso_depto.$touch()"
        />
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="id_pais"
          label="País"
          placeholder=""
          persistent-placeholder
          :items="lista_paises"
          item-text="nombre"
          item-value="id"
          :error-messages="errorHandler('id_pais', errorData.id_pais)"
          @onchange="$v.id_pais.$touch()"
          @blur="$v.id_pais.$touch()"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="id_provincia"
          label="Provincia/Estado"
          placeholder=""
          :items="lista_provincias"
          item-text="nombre"
          item-value="id"
          persistent-placeholder
          :error-messages="errorHandler('id_provincia', errorData.id_provincia)"
          @onchange="$v.id_provincia.$touch()"
          @blur="$v.id_provincia.$touch()"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="id_localidad"
          label="Localidad"
          placeholder=""
          :items="lista_localidades"
          item-text="localidad"
          item-value="id"
          persistent-placeholder
          :error-messages="errorHandler('id_localidad', errorData.id_localidad)"
          @onchange="$v.id_localidad.$touch()"
          @blur="$v.id_localidad.$touch()"
          :disabled="id_provincia == ''"
        ></v-select>
      </v-col>
    </v-row>
    <div>
      <TSButton
        btnType="ts-btn-primary"
        class="d-flex justify-center mt-12"
        className="w-80"
        text="Guardar cambios"
        @click="sendData()"
      />
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import errorHandler from '~/mixins/errorHandler'
import { getAllLocation } from '~/services/places'
import {updateDirection} from '~/services/profile'
import TSButton from '~/components/Buttons/TSButton.vue'
export default {
  components: {
    TSButton
  },
  mixins:[errorHandler, validationMixin],
  data() {
    return {
      calle:'',
      numero:'',
      piso_depto:'',
      id_pais:'',
      id_provincia:'',
      id_localidad:[],
      lista_paises:[{nombre:'Seleccione un pais', id:''}],
      lista_provincias:[{nombre:'Debe seleccionar un país', id:''}],
      lista_localidades:[{localidad:'Debe seleccionar una provincia', id:''}],
      errorData:{
        calle:[
          {name:'required', message:'Email es requerido'},
          {name:'maxLength', message:'Email debe tener menos de 60 caracteres'}
        ],
        numero:[
          {name:'required', message:'Email es requerido'},
          {name:'maxLength', message:'Email debe tener menos de 60 caracteres'}
        ],
        piso_depto:[
          {name:'maxLength', message:'Email debe tener menos de 60 caracteres'}
        ],
        id_pais: [
          {name:'required', message:'País es requerido'},
        ],
        id_provincia:[
          {name:'required', message:'Provincia / Estado es requerido'},
        ],
        id_localidad:[
          {name:'required', message:'Provincia / Estado es requerido'},
        ],
      }
    }
  },
  validations: {
    calle: {required, maxLength:maxLength(60)},
    numero: {required, maxLength:maxLength(60)},
    piso_depto: {maxLength:maxLength(60)},
    id_pais:{required},
    id_provincia:{required},
    id_localidad:{required}
  },
  async created() {
    await this.locations()
  },
  methods:{
    async locations() {
      try {
        this.$store.dispatch('changeLoader', true)
        const {status, data} = await getAllLocation()
        if(status===200){
          console.log(data)
          this.lista_paises = data.response
          this.id_pais = this.$store.getters.getPaisId
          this.id_provincia = this.$store.getters.getProvinciaId
          this.id_localidad = this.$store.getters.getLocalidadId
          this.calle = this.$store.getters.getCalle
          this.numero = this.$store.getters.getNumero
          this.piso_depto = this.$store.getters.getPisoDepto

        }
      } catch ({data}) {
        console.log(data)
        let alert = {
          visible:true,
          message: 'Error al intentar cargar las locaciones.',
          color: '#FF4560'
        }
        this.$store.dispatch('addAlert', alert)
      } finally {
        this.$store.dispatch('changeLoader', false)
      }
    },
    async guardar() {
      try {
        this.$store.dispatch('changeLoader', true)
        let token = this.$store.getters.getToken
        let userId = this.$store.getters.getUserId
        let params = {
          'calle': this.calle,
          'numero': this.numero,
          'piso_depto': this.piso_depto,
          'id_pais': this.id_pais,
          'id_provincia': this.id_provincia,
          'id_localidad': this.id_localidad,
        }
        const {status, data} = await updateDirection(params, userId, token)
        if(status === 200) {
          this.lookForNameLocation(this.id_pais, this.id_provincia, this.id_localidad)
          this.$store.dispatch('addAlert', {visible: true, message: 'Datos actualizados con éxito', color: '#63CA85'})
          this.$store.dispatch('changeAddress', data.usuario)
        }
      } catch (error) {
        console.log(error)
        this.$store.dispatch('addAlert', {visible: true, message: 'ERROR: No se pudo actualizar los datos', color: '#FD5E5E'})
      } finally {
        this.$store.dispatch('changeLoader', false)
      }
    },
    async sendData() {
      this.$v.$touch()
      let errors = this.$v.$anyError
      console.log(errors)
      if(!errors) {
        await this.guardar()
      }
    },
    lookForNameLocation(idPais, idProvincia, idLocalidad) {
      let pais, prov, loc
      this.lista_paises.find(e =>{
        if(e.id == idPais) {
          pais = e.nombre

          e.provincias.find( el => {
            if(el.id == idProvincia) {
              prov = el.nombre
            }
            el.localidades.find(element => {
              if(element.id == idLocalidad) {
                loc = element.localidad
              }
            })
          })
        }
      })
      this.$store.dispatch('changeLocation', {pais: pais, provincia: prov, localidad: loc})
    }
  },
  watch: {
    id_pais:{
      handler(newValue) {
        if(newValue != null || newValue != '') {
          let country = this.lista_paises.find(element => element.id == newValue)
          if(country !== undefined) {
            this.lista_provincias = country.provincias
          }
        }
      },
    },
    id_provincia:{
      handler(newValue) {
        if(newValue != null || newValue != '') {
          let provincias = this.lista_provincias.find(element => element.id == newValue)
          if(provincias !== undefined) {
            this.lista_localidades = provincias.localidades
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .formulate-input {
  margin: 2rem 0;
}
.row-container {
  padding-top: 2rem ;
  padding-bottom: 2rem;
}
</style>