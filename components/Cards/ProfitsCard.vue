<template>
  <div :class="['card-container', 'br-8px', {'bxs-6px': shadow}, 'h-100']" :style="`background-color:${bgColor}`" @click="$emit('click')">
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="header d-flex justify-space-between align-center pa-2">
        <p class="f-subtitle-1 ma-0">{{ title }}</p>
        <v-icon v-if="arrow" :color="color_negro2" size="24">mdi-chevron-right</v-icon>
      </v-col>

      <v-col cols="12" class="h-100 py-1 px-2">
        <p class="f-caption ma-0">{{ subtitle }}</p>
        <p class="headline-5 text-bold ma-0 py-2">{{ text }}</p>
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
    text: {
      type: String,
      default: '$10.000'
    },
    bgColor: {
      type: String,
      default: '#f3f3f3'
    },
    subtitle: {
      type: String,
      default: ''
    },
    arrow: {
      type: Boolean,
      default: true
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
  border-bottom: 1px solid #e4e4e4;
}
.image {
  width: 85%;
  object-fit: contain;
  object-position: center;
}
</style>
