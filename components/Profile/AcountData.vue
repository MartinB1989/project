<template>
  <div class="w-100 mt-10">
    <h2 class="headline-6 mb-5">Datos de tu cuenta</h2>
    <v-row class="row-container ma-0 px-0 bg-white br-8px bxs-4px">
      <v-col v-if="userType === 'admin'" cols="12" class="box-administrador bg-exito-1 px-5 py-3">
        <EscudoConSubUser color="#FFFFFF"/>
          <h6 class="headline-6 text-white ml-5 my-0">Administrador</h6>
      </v-col>
      <v-col cols="12" class="px-8">
        <v-text-field
          v-model="usuario"
          label="Nombre de usuario"
          placeholder=""
          persistent-placeholder
          :error-messages="errorHandler('usuario', errorData.usuario)"
          @input="$v.usuario.$touch()"
          @blur="$v.usuario.$touch()"
          required
        >

        </v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between">
        <div class="d-flex justify-content-start align-center">
          <Candado/>
          <h1 class="ml-3">• • • • • •</h1>
        </div>

        <TSButton :btnType="'ts-btn-trans'" text="Cambiar contraseña" @click="$emit('click')"/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'
import errorHandler from '~/mixins/errorHandler'
import EscudoConSubUser from '@/components/Icons/EscudoConSubUser.vue'
import Candado from '../Icons/Candado.vue'
import TSButton from '../Buttons/TSButton.vue'
export default {
  components: {
    EscudoConSubUser,
    Candado,
    TSButton
  },
  mixins:[errorHandler, validationMixin],
  props: {
    userType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      usuario: this.$store.getters.getUsuario,
      errorData:{
        usuario:[
          {name:'required', message:'Nombre de usuario es requerido'},
          {name:'maxLength', message:'Nombre de usuario no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Nombre de usuario debe tener al menos 3 números'},
        ],
      }
    }
  },
  validations: {
    usuario: {required, minLength: minLength(3), maxLength:maxLength(50)}
  },
  watch: {
    usuario: function() {
      this.$emit('onUsuario', this.usuario)
      console.log(this.usuario)
    },
  }
}
</script>
<style lang="scss" scoped>
::v-deep .formulate-input {
  margin: 2rem 0;
}
.row-container {
  padding-top: 0 ;
  padding-bottom: 2rem;
}
.box-administrador {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px 8px 0 0;
}
</style>
