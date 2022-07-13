<template>
  <div class="px-12 py-2">
    <div v-show="show == 1">

      <h5 class="headline-5 text-center mb-8">¿Olvidaste tu contraseña?</h5>
      <p class="f-subtitle-1 text-center">Ingresá la dirección de email registrada en tu cuenta</p>

      <v-text-field
        label="E-mail"
        color="#9B9EAB"
        class="my-16"
      ></v-text-field>

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
            :boxClass="['d-flex justify-end mt-2']"
            @click="() => show = 2"
          />
      </div>
    </div>

    <div v-show="show == 2">

      <h5 class="headline-5 text-center mb-8">¿Olvidaste tu contraseña?</h5>
      <p class="f-subtitle-1 text-center">Ingresá los 6 dígitos que se enviaron a tu dirección de email</p>
    
      <v-otp-input
        length="6"
        type="number"
        class="mt-16 mb-8"
      ></v-otp-input>

      <p class="f-subtitle-2 text-center color-acento-1 mb-8">Renviar código</p>

      <div class="d-flex justify-space-between">
        <TSButton 
          btnType="ts-btn-light"
          text="Atrás"
          :boxClass="['d-flex justify-end mt-2']"
          @click="() => show = 1"
        />
        <TSButton 
          btnType="ts-btn-primary"
          text="Siguiente"
          :boxClass="['d-flex justify-end mt-2']"
          @click="() => show = 3"
        />
      </div>
    </div>

    <div v-show="show == 3">

      <h5 class="headline-5 text-center mb-8">Ingresa una nueva contraseña</h5>

      <v-text-field
        :type="password"
        label="Contraseña"
        :color="color_negro3"
        class="my-4"
      >
        <template slot="append">
          <v-icon size="28" v-show="password == 'password'" :color="color_negro3" @click="() => password = 'text'">mdi-eye</v-icon>
          <v-icon size="28" v-show="password == 'text'" :color="color_negro3" @click="() => password = 'password'">mdi-eye-off</v-icon>      
        </template>
      </v-text-field>

      <v-text-field
        :type="password"
        label="Repetir contraseña"
        :color="color_negro3"
        class="my-4"
      >
        <template slot="append">
          <v-icon size="28" v-show="repeatPassword == 'password'" :color="color_negro3" @click="() => repeatPassword = 'text'">mdi-eye</v-icon>
          <v-icon size="28" v-show="repeatPassword == 'text'" :color="color_negro3" @click="() => repeatPassword = 'password'">mdi-eye-off</v-icon>      
        </template>
      </v-text-field>

      <TSButton 
        btnType="ts-btn-primary"
        text="Confirmar contraseña"
        :boxClass="['d-flex justify-center mt-12']"
        :className="'w-75'"
        @click="() => show = 4"
      />

    </div>

      <div v-show="show == 4" class="py-8">
        <div class="d-flex justify-center">
          <img src="/img/copa-recuperar-contraseña-modal.svg" alt="">

        </div>
        <h4 class="headline-4 text-center my-8">¡Exelente!</h4>
        <p class="f-body-1 text-center">Tu contraseña ha sido modificada con éxito</p>
     
        <TSButton 
          btnType="ts-btn-primary"
          text="Continuar"
          :boxClass="['d-flex justify-center mt-12']"
          :className="'w-75'"
          @click="$emit('finish')"
        />
      </div>

     
  </div>
</template>
<script>
import TSButton from '@/components/Buttons/TSButton.vue'
import variables from '~/mixins/variables'
export default {
  name: 'ForgotPassword',
  components: {
    TSButton
  },
  mixins: [variables],
  data() {
    return {
      show:1,
      password:'password',
      repeatPassword: 'password'
    }
  }
}
</script>