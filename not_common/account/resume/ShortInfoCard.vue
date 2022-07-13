<template>
  <div :class="['bg-white', 'br-8px',{'bxs-6px': shadow}]"> 
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="header d-flex justify-space-between align-center pa-2">
        <p class="f-subtitle-1 ma-0">{{ title }}</p>
        <v-icon :color="color_negro2" size="24">mdi-chevron-right</v-icon>
      </v-col>

      <v-col cols="6" sm="3" class="py-1 px-2">
        <img
          src="/img/partida-rapida.svg"
          class="image"
        />
      </v-col>

      <v-col cols="6" sm="3" class="py-1 px-2">
        <p class="f-caption ma-0">Ganadas</p>
        <p class="headline-5 text-bold ma-0">10</p>
      </v-col>

      <v-col cols="6" sm="3" class="py-1 px-2">
        <p class="f-caption ma-0">Perdidas</p>
        <p class="headline-5 text-bold ma-0">4</p>
      </v-col>

      <v-col cols="6" sm="3" class="py-1 px-2">
        <p class="f-caption ma-0">Eficacia</p>
        <p class="headline-5 color-acento-1 text-bold ma-0">60%</p>
      </v-col>

    </v-row>
  </div>
</template>
<script>
import variables from '~/mixins/variables'
export default {
  mixins: [variables],
  props: {
    title: {
      type: String,
      default: 'Titulo'
    },
    shadow: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #EDEEEF;
}
.image {
  width: 85%;
  object-fit: contain;
  object-position: center;
}
</style>