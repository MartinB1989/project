<template>
  <div class="w-100 mt-10">
    <h2 class="headline-6 mb-5">Contacto</h2>
    <v-row class="row-container ma-0 px-0 bg-white br-8px bxs-4px">
      <v-col cols="12" class="px-8">
        <v-row class="w-100 pa-0 ma-0">
          <v-col cols="3" class="ma-0 pa-0">
            <vue-tel-input-vuetify
              type="text"
              label=""
              selectLabel="Prefijo"
              placeholder=""
              persistent-placeholder
              :inputOptions="{showDialCode:true, tabindex:0}"
              mode="international"
              :color="color_negro2"
              required
              :defaultCountry="codigoPais"
              disabledFetchingCountry
              @country-changed="countryChange($event)"
            ></vue-tel-input-vuetify>
          </v-col>
          <v-col cols="9" class="ma-0 pa-0">
            <v-text-field
              v-model="telefono"
              label="Telefono"
              placeholder=""
              persistent-placeholder
              :color="color_negro2"
              :error-messages="errorHandler('telefono', errorData.telefono)"
              @input="$v.telefono.$touch()"
              @blur="$v.telefono.$touch()"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="px-8">
        <v-text-field
          v-model="email"
          label="Email"
          placeholder=""
          persistent-placeholder
          :error-messages="errorHandler('email', errorData.email)"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          required
        >

        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email, numeric } from 'vuelidate/lib/validators'
import errorHandler from '~/mixins/errorHandler'
import variables from '~/mixins/variables'

export default {
  mixins:[variables, validationMixin, errorHandler],
  data() {
    return {
      telefono:this.$store.getters.getPhone,
      codigoPais:this.$store.getters.getCodigoPais == null ? 'AR' : this.$store.getters.getCodigoPais ,
      email:this.$store.getters.getEmail,
      errorData:{
        telefono:[
          {name:'required', message:'Teléfono es requerido'},
          {name:'maxLength', message:'Teléfono no puede tener mas de 50 caracteres'},
          {name:'minLength', message:'Teléfono debe tener al menos 6 números'},
          {name:'numeric', message:'Teléfono debe tener solo números'}
        ],
        email: [
          {name:'required', message:'Email es requerido'},
          {name:'minLength', message:'Email debe tener al menos 5 caracteres'},
          {name:'email', message:'El formato introducido no es valido'}
        ]
      }
    }
  },
  validations: {
    telefono: {required, maxLength:maxLength(24), minLength:minLength(6), numeric},
    email: {required, minLength:minLength(5), email}
  },
  methods: {
    countryChange(e) {
      console.log(e)
      this.codigoPais = e.iso2
    },
  },
  watch: {
    telefono: function() {
      let phone = {telefono: this.telefono, codigoPais: this.codigoPais }
      this.$emit('onTelefono', phone)
    },
    email: function() {
      this.$emit('onEmail', this.email)
    },
    codigoPais: function() {
      let phone = {telefono: this.telefono, codigoPais: this.codigoPais }
      this.$emit('onTelefono', phone)
    },
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