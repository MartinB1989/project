<template>
  <div :class="`border-0 h-100 ${containerClass}`">
    <div :class="`d-flex flex-column align-center justify-center ${bodyClass}`">
      <img :src="src" :class="imgClass" :style="`width:${imgSize}`" />
      <h6 :class="titleClass">{{ title }}</h6>
      <p :class="descriptionClass">{{ description }}</p>
      <TSButton
        v-if="btn"
        btnType="ts-btn-light"
        :text="btnText"
        :to="to"
        :link="link"
      />
    </div>
  </div>
</template>
<script>
import TSButton from '@/components/Buttons/TSButton.vue'
export default {
  name: 'SimpleCard',
  components: {
    TSButton
  },
  props: {
    src: {
      type: String,
      default: '/img/copa.svg'
    },
    title: {
      type: String,
      default: 'Titulo'
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cumque nemo beatae impedit libero atque fugiat eos perferendis'
    },
    imgSize: {
      type: [String, Number],
      default: '75%'
    },
    titleClass: {
      type: [String, Array],
      default: ''
    },
    imgClass: {
      type: [String, Array],
      default: ''
    },
    descriptionClass: {
      type: [String, Array],
      default: ''
    },
    bodyClass:{
      type: String,
      default: ''
    },
    containerClass:{
      type: String,
      default: ''
    },
    btn: {
      type: Boolean,
      default: false
    },
    btnText: {
      type: String,
      default: 'texto'
    },
    to: {
      type: String,
      default: '/'
    },
    link: {
      type: Boolean,
      default: false
    },
  }
}
</script>