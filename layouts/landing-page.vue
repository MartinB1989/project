<template>
  <v-app id='landing-layout'>
    <v-container fluid class="pa-0" id="landing-container">
      <Header class="main-header"/>
      <Nuxt />
      <FooterTS/>
    </v-container>
    <v-overlay class="overlay-main" :value="$store.getters.getLoader">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <div v-if="$store.state.alert.visible" class="alerta">
      <v-alert
      dense
        close-icon="mdi-close"
        :color="$store.state.alert.color"
        dismissible
      ><p class="color-negro-2 f-body-2 ma-0" style="line-height: 14px;">{{ $store.state.alert.message }}</p></v-alert>
    </div>
  </v-app>
</template>
<script>
import Header from '@/components/Header/Header.vue'
import FooterTS from '@/components/Footer/FooterTS.vue'
export default {
  name: 'landing-page',
  components: {
    Header,
    FooterTS
  },

}
</script>
<style lang="scss" scoped>
@media screen and (min-width:280px) {
  #landing-layout {
    background-color: #f9f9f9 ;
    color: #3D445E;
  }
  .main-header {
    position: sticky;
    top: 0;
  }
  .overlay-main {
    z-index: 990 !important;
  }
  .alerta {
    position:fixed;
    top: 75px;
    right: 20px;
    z-index: 991 ;
    width: 280px;
  }
}
</style>