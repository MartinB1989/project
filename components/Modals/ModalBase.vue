<template>
  <v-overlay :value="overlay" :dark="false" color="#0000003c" opacity="0.8">
    <div class="br-8px" :class="bodyClass">
      <div :class="['header-box','py-4', 'bg-negro-2']">
        <LogoHeader v-if="isLogo"/>
        <span @click="$emit('hideModal')" class="close-x text-white f-subtitle-1">X</span>
      </div>
      <slot name="content"></slot>
      <slot></slot>
    </div>


  </v-overlay>
</template>
<script>
import LogoHeader from '../Img/LogoHeader.vue'
export default {
  components: {
    LogoHeader
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    isLogo: {
      type: Boolean,
      default: true
    },
    overlay: {
      type:Boolean,
      default: false
    },
    bodyClass: {
      type: [String, Array],
      default: 'w-100'
    }
  }
}
    
</script>
// <style lang="scss" scoped>
@media screen and (min-width:280px) {
  ::v-deep.v-overlay {
    .v-overlay__content {
      width: 35%;
    }
  }
  .header-box {
    border-radius: 8px 8px 0 0;
    position:relative;
  }
  .close-x {
    position: absolute;
    top:28%;
    right: 2rem;
    color: #ffffff !important;
    cursor: pointer;
    color: #0000003c;
  }
}
</style>