<template>
  <div class="w-100 mt-10">
    <h2 class="headline-6 mb-5">Dirección</h2>
    <v-row class="row-container ma-0 pa-4 bg-white br-8px bxs-4px">
      <v-col cols="1">
        <v-icon size="24" :color="color_negro1" class="">mdi-map-marker</v-icon>
      </v-col>
      <v-col cols="5" class="">
        <div class="">
          <p class="f-subtitle-1 mb-2">{{addressText($store.getters.getCalle, $store.getters.getNumero, $store.getters.getPisoDepto)}}</p>
          <p class="f-body-2 color-negro-3">{{locationText( $store.getters.getNombreLocalidad, $store.getters.getNombreProvincia , $store.getters.getNombrePais )}}</p>
        </div>

      </v-col>
      <v-col cols="6" class="d-flex justify-end align-start">
        <TSButton :btnType="'ts-btn-trans'" text="Cambiar dirección" @click="$emit('click')"/>
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
  methods: {
    addressText(street, num, floor) {
      let calle = '(calle)', numero = '(número)', pisoDepto = '(piso - depto)'
      if(street!= null && street != '') {
        calle = street
      }
      if(num != null  && num != '') {
        numero = num
      }
      if(floor != null && floor != '') {
        pisoDepto = floor
      }

      return `${calle} ${numero}, ${pisoDepto}`
    },
    locationText(localidad, provincia = '(Provincia)', pais = '(País)') {
      let loc = '(Localidad)'
      if(localidad != null) {
        loc = localidad
      }
      return loc+', '+provincia+', '+pais
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
