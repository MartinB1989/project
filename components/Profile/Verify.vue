<template>
  <div class="w-100 mt-10">
    <h2 class="headline-6 mb-5">Verificación</h2>
    <v-row class="row-container ma-0 pa-4 bg-white br-8px bxs-4px">
      <v-col cols="1" class="d-flex align-center">
        <v-icon v-if="stateValidationNumber == null" size="24" :color="color_error1" class="">mdi-information</v-icon>
        <v-icon v-if="stateValidationNumber == 0" size="24" :color="color_acento1" class="">mdi-information</v-icon>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <p v-if="stateValidationNumber == null" :class="'f-body-2 mb-0 color-error'">Debes verificar tu cuenta</p>
        <p v-else-if="stateValidationNumber == 0" :class="'f-body-2 mb-0 color-acento-1'">Su cuenta se encuentra pendiente de validación</p>
        <p v-else-if="stateValidationNumber == 1" :class="'f-body-2 mb-0 color-exito-1'">Su cuenta ha sido verificada correctamente</p>
        <p v-else-if="stateValidationNumber == 2" :class="'f-body-2 mb-0 color-negro-1 text-bold'">La validación de su cuenta ha sido rechazada</p>

      </v-col>
      <v-col cols="5" class="d-flex justify-end align-start">
        <TSButton :btnType="'ts-btn-trans'" text="Verificar identidad" @click="$emit('click')"/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import variables from '~/mixins/variables'
import TSButton from '../Buttons/TSButton.vue'
export default {
  mixins: [variables],
  components: {
    TSButton
  },
  data() {
    return {
      validationMessage: 'Tu cuenta no se encuentra verificada',
      stateValidationNumber:null
    }
  },
  created() {
    this.validationCurrentState()
  },
  methods: {
    validationCurrentState() {
        this.stateValidationNumber = this.$store.getters.getValidacion

        // if(this.stateValidationNumber == 0) {
        //     this.validationMessage = 'Su cuenta se encuentra pendiente de validación'
        // } else if(this.stateValidationNumber == 1) {
        //     this.validationMessage = 'Su cuenta ha sido verificada'
        // } else if(this.stateValidationNumber == 2) {
        //     this.validationMessage = 'Verificación rechasada, intentelo nuevamente.'
        // }
    }
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
