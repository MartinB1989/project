<template>
  <div class="w-100 mt-2">
    <h2 class="headline-6 mb-5">Contraseña</h2>
    <v-row class="row-container ma-0 px-0 bg-white br-8px bxs-4px">
      <v-col cols="12" >
          <!-- CONTRASEÑA ACTUAL -->

          <v-text-field
            v-model="contrasena"
            :type="password1"
            label="Contraseña"
            :color="color_negro1"
            :error-messages="errorHandler('contrasena', errorData.contrasena)"
            @input="$v.contrasena.$touch()"
            @blur="$v.contrasena.$touch()"
          >
            <template slot="append">
              <v-icon v-show="password1 === 'password'" size="24" @click="() => password1 = 'text'">mdi-eye</v-icon>
              <v-icon v-show="password1 === 'text'" size="24" @click="() => password1 = 'password'">mdi-eye-off</v-icon>
            </template>
          </v-text-field>
          <!-- NUEVA CONTRASEÑA -->

          <v-text-field
            v-model="newContrasena"
            :type="password3"
            label="Nueva contraseña"
            :color="color_negro1"
            :error-messages="errorHandler('newContrasena', errorData.newContrasena)"
            @input="$v.newContrasena.$touch()"
            @blur="$v.newContrasena.$touch()"
          >
            <template slot="append">
              <v-icon v-show="password3 === 'password'" size="24" @click="() => password3 = 'text'">mdi-eye</v-icon>
              <v-icon v-show="password3 === 'text'" size="24" @click="() => password3 = 'password'">mdi-eye-off</v-icon>
            </template>
          </v-text-field>
          <!-- REPETIR LA NUEVA CONTRASEÑA -->

          <v-text-field
            v-model="repeatContrasena"
            :type="password2"
            label="Repetir nueva contraseña"
            :color="color_negro1"
            :error-messages="errorHandler('repeatContrasena', errorData.repeatContrasena)"
            @input="$v.repeatContrasena.$touch()"
            @blur="$v.repeatContrasena.$touch()"
          >
            <template slot="append">
              <v-icon v-show="password2 === 'password'" size="24" @click="() => password2 = 'text'">mdi-eye</v-icon>
              <v-icon v-show="password2 === 'text'" size="24" @click="() => password2 = 'password'">mdi-eye-off</v-icon>
            </template>
          </v-text-field>
      </v-col>
    </v-row>
    <div class="my-5">
      <TSButton
        btnType="ts-btn-primary"
        className="large"
        text="Guardar cambios"
        @click="saveChange()"
      />
    </div>

    <ProfileModal
      :dialog="dialog"
      text1="¡Tu contraseña ha sido modificada con éxito!"
      text2="Tu contraseña no pudo ser modificada"
      subtext1="No olvides cambiarla regularmente"
      subtext2="Verifica que los datos ingresados sean correctos o intentalo nuevamente en unos minutos"
      @hideModal="() => dialog = false"
      @continue="() => dialog = false"
      :ok="ok"
    />
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'
import errorHandler from '~/mixins/errorHandler'
import TSButton from '~/components/Buttons/TSButton.vue'
import variables from '~/mixins/variables'
import { updatePassword } from '~/services/profile'
import ProfileModal from '~/components/Profile/ProfileModal.vue'

export default {
  mixins:[variables,errorHandler, validationMixin, errorHandler],
  components:{TSButton, ProfileModal},
  data() {
    return {
      password1: 'password',
      password2: 'password',
      password3: 'password',
      contrasena:'',
      newContrasena:'',
      repeatContrasena:'',
      dialog: false,
      ok:true,
      errorData:{
        contrasena:[
          {name:'required', message:'Contraseña es requerido'},
          {name:'maxLength', message:'Contraseña no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Contraseña debe tener al menos 8 números'},
        ],
        newContrasena:[
          {name:'required', message:'Nueva contraseña es requerido'},
          {name:'maxLength', message:'Nueva contraseña no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Nueva contraseña debe tener al menos 8 números'},
        ],
        repeatContrasena:[
          {name:'required', message:'Repetir nueva contraseña es requerido'},
          {name:'maxLength', message:'Repetir nueva contraseña no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Repetir nueva contraseña debe tener al menos 8 números'},
          {name:'sameAsNewContrasena', message:'Las contraseñas deben coincidir'},
        ],
      }
    }
  },
  validations:{
    contrasena: {required, minLength:minLength(8), maxLength:maxLength(50)},
    newContrasena: {required, minLength:minLength(8), maxLength:maxLength(50)},
    repeatContrasena: {required, minLength:minLength(8), maxLength:maxLength(50),
      sameAsNewContrasena: sameAs('newContrasena')
    }
  },
  methods:{
    async saveChange() {
      try {
        this.$store.dispatch('changeLoader', true)
        let id = this.$store.getters.getUserId
        let token = this.$store.getters.getToken
        let params = {
          contrasena: this.contrasena,
          newContrasena: this.newContrasena,
          repeatContrasena: this.repeatContrasena
        }
        const {status, data} = await updatePassword(params, id, token)
        if(status === 200) {
          console.log(data)
          this.ok = true
          this.dialog = true
        }
      } catch (error) {
        console.log(error)
        this.ok = false
        this.dialog = true
      } finally {
        this.$store.dispatch('changeLoader', false)
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
.input-class {
  width:80%;
}
</style>