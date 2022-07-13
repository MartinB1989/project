<template>
  <v-dialog
    v-model="dialog"
    max-width="544px"
    persistent
  >
  <v-container fluid class="bg-white pa-0">
    <v-row class="ma-0 pa-0">
      <v-col cols="12" class="modal-header bg-negro-2 ma-0 pa-0">
        <div :class="['header-logo','py-4']">
          <LogoHeader v-if="isLogo"/>
          <span @click="$emit('hideModal')" class="close-x text-white f-subtitle-1">
            <v-icon size="24" color="#ffffff">mdi-close</v-icon>
          </span>
        </div>
      </v-col>
      <v-col cols="12">
        <slot name="content"></slot>
      </v-col>
    </v-row>
  </v-container>
  </v-dialog>
</template>
<script>
import LogoHeader from '~/components/Img/LogoHeader.vue'
export default {
  components: {
    LogoHeader
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    isLogo: {
      type: Boolean,
      default: true
    },
  }
}
</script>
// <style lang="scss" scoped>
@media screen and (min-width:280px) {
  .modal-header {
    position: relative;
  }
  .close-x {
    position: absolute;
    top:30%;
    right: 2rem;
    color: #ffffff !important;
    cursor: pointer;
    color: #0000003c;
  }
}
</style>