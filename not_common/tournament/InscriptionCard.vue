<template>
  <div class="bg-white bxs-8px br-8px">
    <v-row class="w-100 pa-0 ma-0">
      <v-col cols="3" class="px-8 py-0 d-flex justify-center align-center">
        <img :src="srcImg" alt="imagen" style="width:100%">
      </v-col>
      <v-col cols="9" class="py-0">
        <v-row class="ffc w-100 px-0 py-2 ma-0">
          <v-col>
            <p class="f-body-1 color-negro-3 mb-2 ma-0">Fecha</p>
            <p class="headline-6 mb-0">{{ date }}</p>
          </v-col>
          <v-col>
            <p class="f-body-1 color-negro-3 mb-2 ma-0">Faltan</p>
            <p class="headline-6 mb-0">{{ missingHours }}</p>
          </v-col>
          <v-col>
            <p class="f-body-1 color-negro-3 mb-2 ma-0">Cupo</p>
            <p class="headline-6 mb-0">{{ quotas }}</p>
          </v-col>
        </v-row>
        <v-row class="w-100 pa-0 ma-0">
          <v-col>
            <p class="f-body-1 color-negro-3 mb-2 ma-0">Premio</p>
            <p class="headline-5 color-acento-1">{{ prize }}</p>
          </v-col>
          <v-col class="d-flex justify-end align-center">
            <TSButton
              btnType="ts-btn-primary"
              text="Inscribirse"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import TSButton from '~/components/Buttons/TSButton.vue'
export default {
  name: 'IncriptionCard',
  props: {
    srcImg: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    missingHours: {
      type: String,
      default: ''
    },
    quotas: {
      type: String,
      default: ''
    },
    prize: {
      type: String,
      default: ''
    }
  },
  components: {
    TSButton
  }
}
</script>
<style lang="scss" scoped>
.ffc {
  border-bottom: 1px solid #CED0D6;
}
</style>