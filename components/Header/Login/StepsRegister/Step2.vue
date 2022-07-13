<template>
  <div id="step-2">
    <h5 class="headline-5 text-center mb-6">Completá los datos y registrate</h5>
    <!-- EMAIL -->
    <v-text-field
      type="email"
      v-model="email"
      label="E-mail"
      :color="color_negro3"
      :error-messages="errorHandler('email', errorData.email)"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    >
    </v-text-field>
    <!-- PAÍS -->
    <v-select
      v-model="id_pais"
      label="País de residencia"
      :color="color_negro3"
      :items="countryList"
      item-text="nombre"
      item-value="id"
      :error-messages="errorHandler('id_pais', errorData.id_pais)"
      @change="$v.id_pais.$touch()"
      @blur="$v.id_pais.$touch()"
    >
    </v-select>
    <!-- PROVINCIA -->
    <v-select
      v-model="id_provincia"
      label="Provincia / Estado"
      :color="color_negro3"
      :items="provinceList"
      item-text="nombre"
      item-value="id"
      :error-messages="errorHandler('id_provincia', errorData.id_provincia)"
      @change="$v.id_provincia.$touch()"
      @blur="$v.id_provincia.$touch()"
    >
    </v-select>
    <v-checkbox
      required
      v-model="accept"
      dense
      :color="color_acento1"
      :error-messages="errorHandler('accept', errorData.accept)"
      @change="$v.accept.$touch()"
      @blur="$v.accept.$touch()"
    >
      <template slot="label">
        <p class="f-subtitle-2 ">
          Confirmo que tengo al menos 18 años; he leído y entiendo el
          <span class="color-acento-1">contenido de licencia para el usuario final</span>
          y la
          <span class="color-acento-1">política de privacidad</span>.
        </p>
      </template>
    </v-checkbox>
    <div class="d-flex justify-space-between">
      <TSButton
        btnType="ts-btn-light"
        text="Atrás"
        :boxClass="['d-flex justify-end mt-2']"
        @click="$emit('back')"
      />
      <TSButton
        btnType="ts-btn-primary"
        text="Siguiente"
        :disabled="!accept"
        :boxClass="['d-flex justify-end mt-2']"
        @click="nextStep()"
      />
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
import errorHandler from '~/mixins/errorHandler'
import TSButton from '~/components/Buttons/TSButton.vue'
import variables from '~/mixins/variables'
import { getAllLocation } from '~/services/places'

export default {
  name: 'Step2',
  components: {
    TSButton
  },
  mixins: [variables, validationMixin, errorHandler],
  props: {
    clear: {
      type: Boolean,
      default:false
    }
  },
  data() {
    return {
      accept: false,
      email: '',
      id_pais: '',
      id_provincia: '',
      countryList: [
        // {country: 'Argentina', id_country: 1},
        // {country: 'Uruguay', id_country: 2},
        // {country: 'Brasil', id_country: 3},
      ],
      provinceList:[
        // {province: 'Buenos Aires', id_province: 1},
        // {province: 'Córdoba', id_province: 2},
        // {province: 'Chubut', id_province: 3},
      ],
      errorData:{
        email:[
          {name:'required', message:'Email es requerido'},
          {name:'maxLength', message:'Email debe tener menos de 60 caracteres'}
        ],
        id_pais: [
          {name:'required', message:'País es requerido'},
        ],
        id_provincia:[
          {name:'required', message:'Provincia / Estado es requerido'},
        ],
        accept:[
          {name:'checked', message:'Debes aceptar los términos y condiciones para continuar'},
        ]
      }
    }
  },
  validations: {
    email: {required, email, maxLength:maxLength(60)},
    id_pais:{required},
    id_provincia:{required},
    accept: {
      checked (val) {
        return val
      },
    },
  },
  created() {
    this.locations()
  },
  methods: {
    nextStep() {
      this.$v.$touch()
      let errors = this.$v.$anyError
      if(!errors) {
        let data = {
          email: this.email,
          id_pais: this.id_pais,
          id_provincia: this.id_provincia
        }
        this.$emit('next', data)
      }
    },
    async locations() {
      try {
        this.$store.dispatch('changeLoader', true)
        let token = this.$store.getters.getToken
        const {status, data} = await getAllLocation()
        if(status===200){
          console.log(data)
          this.countryList = data.response
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
    }
  },
  watch:{
    clear: function(){
      this.$v.$reset()
      this.email = ''
      this.id_pais = ''
      this.id_provincia = ''
      this.accept = ''
    },
    id_pais:{
      handler(newValue) {
        if(newValue != null && newValue != '') {
          let country = this.countryList.find(element => element.id == newValue)
          this.provinceList = country.provincias
        }
      }
    }
  }
}
</script>