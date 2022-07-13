<template>
  <v-app id='landing-layout'>
    <v-container fluid class="pa-0">
      <Header class="main-header"/>
      <SideBarMenu>
        <!-- <template> -->
          <Nuxt />
        <!-- </template> -->

      </SideBarMenu>
      <!-- <v-overlay :value="$store.getters.getLoader" class="progress-spinner" > -->
      <v-overlay :value="$store.getters.getLoader" class="progress-spinner" >
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
    </v-container>
  </v-app>
</template>
<script>
import Header from '@/components/Header/Header.vue'
import SideBarMenu from '../components/SideBar/SideBarMenu.vue'
export default {
  middleware: 'auth',
  name: 'account',
  components: {
    Header,
    SideBarMenu
  }
}
</script>
<style lang="scss" scoped>
#landing-layout {
  background-color: #f9f9f9 ;
  color: #3D445E;
}
:root {
    font-family: 'Mulish';
}
@media screen and (min-width:280px) {
  .main-header {
    position: sticky;
    top: 0;
  }
  .progress-spinner {
    z-index: 99999 !important;
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
