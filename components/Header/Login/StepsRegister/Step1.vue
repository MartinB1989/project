<template>
  <div id="step-1">
      <h5 class="headline-5 text-center mb-6">Completá los datos y registrate</h5>
      <!-- NOMBRE -->
      <v-text-field
        type="text"
        v-model="nombre"
        :color="color_negro3"
        label="Nombre"
        :error-messages="errorHandler('nombre', errorData.nombre)"
        @input="$v.nombre.$touch()"
        @blur="$v.nombre.$touch()"
        required
      >
      </v-text-field>
      <!-- APELLIDO -->
      <v-text-field
        type="text"
        v-model="apellido"
        :error-messages="errorHandler('apellido', errorData.apellido)"
        label="Apellido"
        :color="color_negro3"
        @input="$v.apellido.$touch()"
        @blur="$v.apellido.$touch()"
        required
      >
      </v-text-field>
      <!-- NOMBRE DE USUARIO -->
      <v-text-field
        type="text"
        v-model="usuario"
        :error-messages="errorHandler('usuario', errorData.usuario)"
        label="Nombre de usuario"
        :color="color_negro3"
        @input="$v.usuario.$touch()"
        @blur="$v.usuario.$touch()"
        required
      >
      </v-text-field>
      <v-text-field
        v-model="contrasena"
        :error-messages="errorHandler('contrasena', errorData.contrasena)"
        :type="password"
        label="Contraseña"
        :color="color_negro3"
        @input="$v.contrasena.$touch()"
        @blur="$v.contrasena.$touch()"
        required
      >
        <template slot="append">
          <v-icon size="28" v-show="password == 'password'" :color="color_negro3" @click="() => password = 'text'">mdi-eye</v-icon>
          <v-icon size="28" v-show="password == 'text'" :color="color_negro3" @click="() => password = 'password'">mdi-eye-off</v-icon>      
        </template>
      </v-text-field>

      <TSButton
        btnType="ts-btn-primary"
        text="Siguiente"
        :boxClass="['d-flex justify-end mt-6']"
        @click="nextStep()"
      />
    </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'
import errorHandler from '~/mixins/errorHandler'
import TSButton from '~/components/Buttons/TSButton.vue'
import variables from '~/mixins/variables'
export default {
  name: 'Register',
  components: {
    TSButton
  },
  mixins: [variables, validationMixin, errorHandler],
  props: {
    clear: {
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      password: 'password',
      nombre: '',
      apellido: '',
      usuario: '',
      contrasena: '',
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
        usuario:[
          {name:'required', message:'Usuario es requerido'},
          {name:'maxLength', message:'Usuario no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Usuario debe tener al menos 3 letras'}
        ],
        contrasena:[
          {name:'required', message:'Contraseña es requerido'},
          {name:'maxLength', message:'Contraseña no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Contraseña debe tener al menos 8 letras'}
        ]
      }
    }
  },
  validations: {
    nombre: {required, maxLength: maxLength(50), minLength: minLength(3)},
    apellido: {required, maxLength: maxLength(50), minLength: minLength(3)},
    usuario: {required, maxLength: maxLength(50), minLength: minLength(3)},
    contrasena: {required, maxLength: maxLength(50), minLength: minLength(8)},
  },
  methods: {
    nextStep() {
      this.$v.$touch()
      let errors = this.$v.$anyError
      console.log(errors)
      if(!errors) {
        let data = {
          nombre: this.nombre,
          apellido: this.apellido,
          usuario: this.usuario,
          contrasena: this.contrasena
        }
        this.$emit('next', data)
      }
    }
  },
  watch:{
    clear: function(){
      this.$v.$reset()
      this.nombre = ''
      this.apellido = ''
      this.usuario = ''
      this.contrasena = ''
    }
  }
}
</script>