<template>
  <div>
    <web-title
      title="Jugadas"
    />    
    <web-container class="my-8">

      <simple-breadcrumb
        link="/how-to-play/"
        back="¿Cómo jugar?"
        actual="Jugadas"
      />
   
    </web-container>
      <v-tabs centered color="#EFAD2D" background-color="transparent">
        <v-tab class="tab-text">Envido</v-tab>
        <v-tab class="tab-text">Truco</v-tab>
        <v-tab class="tab-text">Flor</v-tab>

        <v-tab-item>
          <Envido/>
        </v-tab-item>

        <v-tab-item>
          <Truco/>
        </v-tab-item>

        <v-tab-item>
          <Flor/>
        </v-tab-item>
      </v-tabs>   
  </div>
</template>
<script>
import SimpleBreadcrumb from '~/components/Breadcrumb/SimpleBreadcrumb.vue'
import WebTitle from '~/components/Header/WebTitle.vue'
import WebContainer from '~/components/WebContainer.vue'
import Envido from '~/not_common/how-to-play/Envido.vue'
import Flor from '~/not_common/how-to-play/Flor.vue'
import Truco from '~/not_common/how-to-play/Truco.vue'
export default {
  layout: 'landing-page',
  name:'plays',
  components: { 
    WebTitle, 
    SimpleBreadcrumb, 
    WebContainer, 
    Envido, 
    Truco,
    Flor
  },
}
    
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  ::v-deep .tab-text {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #3D445E !important;
    text-transform: capitalize;
    padding:0 ;
  }
  ::v-deep .theme--light.v-tabs-items {
    background: none;
  }
}
@media screen and (min-width: 600px) {
  ::v-deep .tab-text {
    padding: 0 50px;
  }
}
@media screen and (min-width: 960px) {
  ::v-deep .tab-text {
    padding: 0 100px;
  }
}

</style>