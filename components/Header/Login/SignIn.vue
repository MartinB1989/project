<template>
  <div>
    <h5 class="headline-5 text-center">Inicia sesión</h5>
    <v-text-field
      v-model="usuario"
      label="Nombre de usuario"
      :color="color_negro3"
      class="my-4"
      :error-messages="errorHandler('usuario', errorData.usuario)"
      @input="$v.usuario.$touch()"
      @blur="$v.usuario.$touch()"
      required
    >
    </v-text-field>

    <v-text-field
      v-model="contrasena"
      :type="password"
      label="Contraseña"
      :color="color_negro3"
      class="my-4"
      :error-messages="errorHandler('contrasena', errorData.contrasena)"
      @input="$v.contrasena.$touch()"
      @blur="$v.contrasena.$touch()"
    >
      <template slot="append">
        <v-icon size="28" v-show="password == 'password'" :color="color_negro3" @click="() => password = 'text'">mdi-eye</v-icon>
        <v-icon size="28" v-show="password == 'text'" :color="color_negro3" @click="() => password = 'password'">mdi-eye-off</v-icon>
      </template>
    </v-text-field>
    <p class="color-error f-body-2">{{ errorMessage }}</p>
    <p class="f-subtitle-2 color-acento-1 text-center my-6 pointer" @click="$emit('forgotPass')">¿Olvidaste tu contraseña?</p>
    <TSButton
      btnType="ts-btn-primary"
      text="Continuar"
      :boxClass="['d-flex justify-center mt-12']"
      :className="'w-75'"
      @click="sign()"
    />
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'
import errorHandler from '~/mixins/errorHandler'
import variables from '~/mixins/variables'
import TSButton from '~/components/Buttons/TSButton.vue'
import {signIn} from '~/services/signIn'
import { getUserDataProfile } from '~/services/profile'
export default {
  name: 'SignIn',
  mixins: [variables, errorHandler, validationMixin],
  components: {
    TSButton
  },
  data () {
    return {
      usuario: '',
      contrasena: '',
      password: 'password',
      errorMessage:'',
      errorData: {
        usuario:[
          {name:'required', message:'Nombre es requerido'},
          {name:'maxLength', message:'Nombre no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Nombre debe tener al menos 3 letras'}
        ],
        contrasena:[
          {name:'required', message:'Contraseña es requerido'},
          {name:'maxLength', message:'Contraseña no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Contraseña debe tener al menos 8 letras'}
        ]
      }
    }
  },
  validations:{
    usuario: {required, maxLength: maxLength(50), minLength: minLength(3)},
    contrasena: {required, maxLength: maxLength(50), minLength: minLength(8)}
  },
  methods: {
    async sign() {
      try {
        this.$store.dispatch('changeLoader', true)
        const params = {
          usuario: this.usuario,
          contrasena: this.contrasena
        }
        const {status, data} = await signIn(params)
        if(status === 200) {
          console.log(data)
          await this.getUserData(data)
          this.$router.push('/account/resume')
        }
      } catch (err) {
        console.log(err)
        this.errorMessage = err.data.message
        setTimeout(() => {
          this.errorMessage = ''
        }, 4000)
      } finally {
        this.$store.dispatch('changeLoader', false)
      }
    },
    async getUserData(userData) {
      try {
        let userId = userData.response.user.id
        let token = userData.response.token
        const {status, data} = await getUserDataProfile(userId, token)
        if(status === 200) {
          console.log()
          console.log(data)
          localStorage.setItem('authToken', userData.response.token)
          this.$store.dispatch('addToken', userData.response.token)
          this.$store.dispatch('addUserId', userData.response.user.id)
          this.$emit('signIn')
          this.$store.dispatch('addUserData', data)
        }
      } catch (error) {
        console.log(error)

      }
    }
  }
}
</script>