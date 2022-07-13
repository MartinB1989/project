<template>
  <div>
    <v-row class="w-100 pa-0 ma-0" :class="boxClass">
      <v-col cols="2">
        <img :src="imgSrc" alt="imagen">
      </v-col>
      <v-col cols="10" :class="boxTextClass">
        <h6 v-if="title != ''" class="headline-6 mb-2">{{ title }}</h6>
        <p class="f-body-2">{{ text }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'FlorCard',
  props: {
    title: {
      type: String,
      default: 'Titulo'
    },
    text: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor agnum.'
    },
    imgSrc: {
      type: String,
      default: ''
    },
    boxClass: {
      type: [String, Array],
      default: ''
    },
    boxTextClass: {
      type: [String, Array],
      default: 'px-8'
    },
  }
}
</script>