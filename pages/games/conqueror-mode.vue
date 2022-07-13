<template>
<div>
  <WebTitle
    title="Modo conquistador"
  />
  <div class="main mx-auto my-16">
    <div class="card-container w-70 mx-auto">
      <div>
        <nuxt-link to="/games/games" class="text-decoration-none f-subtitle-1 color-negro-3">Partidas</nuxt-link>
        <span class="f-subtitle-1 color-negro-3 mx-6">></span>
        <span class="f-subtitle-1 color-negro-2">Modo conquistador</span>
      </div>
      <h5 class="headline-5 mb-8 mt-16">Siete niveles</h5>
      <v-row class="w-100 ma-0 pa-0">
        <v-col cols="12">
          <FlorCard
            title=""
            text="Este modo se basa en que el usuario debe alcanzar la cima venciendo a la pc en 7 oportunidades teniendo dos vidas disponibles; en caso de perder las dos vidas se reinicia la cuenta y se vuelve al nivel cero."
            imgSrc="/img/siete-niveles.svg"
            boxClass="bg-white br-8px pa-2"
            boxTextClass="px-4 d-flex align-center"
          />
        </v-col>
      </v-row>

      <h5 class="headline-5 mb-8 mt-16 pt-8">Premios</h5>
      <v-row class="w-100 ma-0 pa-0">
        <v-col cols="12">
          <FlorCard
            title=""
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            imgSrc="/img/premios.svg"
            boxClass="bg-white br-8px pa-2"
            boxTextClass="px-4 d-flex align-center"
          />
        </v-col>
        <v-col cols="12">
          <FlorCard
            title=""
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            imgSrc="/img/premios.svg"
            boxClass="bg-white br-8px pa-2"
            boxTextClass="px-4 d-flex align-center"
          />
        </v-col>
      </v-row>
    </div>
  </div>
  <div style="height:150px"></div>
</div>

</template>
<script>
import WebTitle from '../../components/Header/WebTitle.vue'
import FlorCard from '../../components/Cards/FlorCard.vue'
export default {
  layout:'landing-page',
  components: {
    WebTitle,
    FlorCard
  }
}
</script>
<style scoped>
.main {
  max-width: 1360px;
}
/* .card-container {
  width: 75;
} */

</style>