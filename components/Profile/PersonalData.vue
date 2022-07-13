<template>
  <div class="w-100 mt-5">
    <h2 class="headline-6 mb-5">Datos personales</h2>
    <v-row class="row-container ma-0 px-0 bg-white br-8px bxs-4px">
      <v-col cols="3" class="py-2 d-flex justify-center align-start">
        <div class="d-flex justify-center jmb-avatar">
          <v-avatar v-show="!loading" size="96" id="elavatar">
            <img :src="getCorrectImg($store.getters.getProfileImg)" alt="avatar" id="avt" class="jmb-img-avatar"/>
          </v-avatar>
          <v-avatar v-show="loading" size="96" id="elavatar">
            <v-progress-circular
            indeterminate
            :color="color_negro2"
            ></v-progress-circular>
          </v-avatar>
          <span class="jmb-camera align-self-end">
            <input type="file" id="change-avatar" ref="file_img" @change="isThereAFileImg()" hidden>
            <label for="change-avatar" class="pointer">
              <v-icon :color="color_negro2" size="20">mdi-camera-plus</v-icon>
            </label>
          </span>
        </div>
      </v-col>
      <v-col cols="9" class="pl-0">
        <v-text-field
          v-model="nombre"
          label="Nombre"
          placeholder=""
          persistent-placeholder
          :color="color_negro2"
          :error-messages="errorHandler('nombre', errorData.nombre)"
          @input="$v.nombre.$touch()"
          @blur="$v.nombre.$touch()"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="apellido"
          label="Apellido"
          placeholder=""
          persistent-placeholder
          :color="color_negro2"
          :error-messages="errorHandler('apellido', errorData.apellido)"
          @input="$v.apellido.$touch()"
          @blur="$v.apellido.$touch()"
          required
        >
        </v-text-field>

        <v-row class="w-100 pa-0 ma-0">
          <v-col cols="12" class="ma-0 pa-0">
            <p :class="['ma-0', 'f-caption']">Numero de documento de indentidad</p>
          </v-col>
          <v-col cols="2" class="ma-0 pa-0">
            <v-select
              v-model="tipoDoc"
              :items="[
                {text:'DNI', value:1},
                {text:'Cuit/Cuil', value:2}
              ]"
              item-text="text"
              item-value="value"
              :value="1"
            ></v-select>
          </v-col>
          <v-col cols="10" class="ma-0 pa-0">
            <v-text-field
              v-model="dni"
              type="number"
              label=""
              placeholder=""
              persistent-placeholder
              :color="color_negro2"
              :error-messages="errorHandler('dni', errorData.dni)"
              @input="$v.dni.$touch()"
              @blur="$v.dni.$touch()"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, numeric, minValue } from 'vuelidate/lib/validators'
import errorHandler from '~/mixins/errorHandler'
import variables from '~/mixins/variables'
import getCorrectImg from '~/mixins/getCorrectImg'
import {updateAvatar} from '~/services/profile'
export default {
  mixins:[variables, validationMixin, errorHandler, getCorrectImg],
  props:{
    name: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    numberDni: {
      type: [Number, String],
      default: ''
    }
  },
  data() {
    return {
      nombre:this.$store.getters.getUserName,
      apellido: this.$store.getters.getUserLastName,
      dni:this.$store.getters.getUserDni,
      tipoDoc: this.$store.getters.getTipoDoc === null ? 1 : this.$store.getters.getTipoDoc,
      avatar:'',
      loading: false,
      errorData:{
        nombre:[
          {name:'required', message:'Nombre es requerido'},
          {name:'maxLength', message:'Nombre no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Nombre debe tener al menos 3 letras'}
        ],
        apellido:[
          {name:'required', message:'Apellido es requerido'},
          {name:'maxLength', message:'Apellido no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Apellido debe tener al menos 3 letras'}
        ],
        dni:[
          {name:'required', message:'DNI es requerido'},
          {name:'maxLength', message:'DNI debe ser un número de 8 dígitos'},
          {name:'minLength', message:'DNI debe ser un número de 8 dígitos'},
          {name:'numeric', message:'DNI debe contener solo números'},
          {name:'minValue', message:'DNI debe ser mayor que cero'}
        ]
      }
    }
  },
  validations: {
    nombre: {required, maxLength: maxLength(50), minLength: minLength(3)},
    apellido: {required, maxLength: maxLength(50), minLength: minLength(3)},
    dni: {required, numeric, maxLength: maxLength(8), minLength: minLength(8), minValue: minValue(0)},
  },
  methods:{
    async isThereAFileImg() {
      if(this.$refs.file_img.value != '') {
        const img_container =  document.getElementById('elavatar')
        console.log(img_container)
        if(img_container.contains(document.getElementById('avt'))) {
          img_container.removeChild(document.getElementById('avt'))
        }
        const file = this.$refs.file_img.files[0]
        const canvas = document.createElement('canvas')
        const img = document.createElement('img')

        const imagen = new Image()
        let that = this
        imagen.onload = async () => {
          const lamda = (imagen.height/imagen.width)
          let imgW = 300
          let imgH = lamda*300
          canvas.width = imgW
          canvas.height = imgH
          canvas.getContext('2d').drawImage(imagen,0,0,imgW,imgH)
          let imgCompressed = canvas.toDataURL("image/jpeg", 0.75)
          img.src = imgCompressed
          img.id = 'avt'
          img.style = 'object-fit: cover;object-position: center;'
          const profileImgSucces = await that.changeImg(imgCompressed)
          if(profileImgSucces) {
            img_container.appendChild(img)
            let tag_img_avt = document.getElementById('avt')
            tag_img_avt.classList.add('jmb-img-avatar')
          }
        }
        imagen.src = URL.createObjectURL(file)
      }
    },
    async changeImg(avatar) {
      try {
        this.loading = true
        let token = this.$store.getters.getToken
        let userId = this.$store.getters.getUserId

        const {status, data} = await updateAvatar(userId, token, avatar)
        if(status === 200) {
          console.log(data)
          this.$store.dispatch('changeProfileImg', data.usuario.avatar_img_perfil)
          this.$store.dispatch('addAlert', {visible: true, message: 'Foto de perfil actualizada', color: '#63CA85'})
          return true
        }
      } catch (error) {
        console.log(error)
        const img_container =  document.getElementById('elavatar')
        const img = document.createElement('img')
        img.src = this.getCorrectImg(this.$store.getters.getProfileImg)
        img.id = 'avt'
        img.classList.add('jmb-img-avatar')
        img_container.appendChild(img)
        this.$store.dispatch('addAlert', {visible: true, message: 'Error. Su foto de perfil no pudo actualizarce', color: '#FD5E5E'})
        return false
      } finally {
        this.loading = false
      }
    }
  },
  watch: {
    nombre: function() {
      this.$emit('onNombre', this.nombre)
    },
    apellido: function() {
      this.$emit('onApellido', this.apellido)
    },
    dni: function() {
      this.$emit('onDni', this.dni)
    },
    tipoDoc: function() {
      this.$emit('onTipoDoc', this.tipoDoc)
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
  padding-bottom: 5rem;
}
.on-focus {
  color:rgba(0, 0, 0, 0.6);
}
.jmb-avatar {
  transform: translateX(16px);
}
.jmb-camera {
  transform: translate3d(-30px, 2px, 0);
  background-color: #ffffff;
  border-radius: 50px;
  padding: 4px;
}
.jmb-img-avatar {
  object-fit: cover;
  object-position: center;
}
</style>
