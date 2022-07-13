<template>
<div>
  <WebTitle
    title="Partida rápida"
  />
  <div class="main mx-auto my-16">
    <div class="card-container w-70 mx-auto">
      <div>
        <nuxt-link to="/games/games" class="text-decoration-none f-subtitle-1 color-negro-3">Partidas</nuxt-link>
        <span class="f-subtitle-1 color-negro-3 mx-6">></span>
        <span class="f-subtitle-1 color-negro-2">Partidas rápidas</span>
      </div>
      <h5 class="headline-5 mb-12 mt-16">Modalidad</h5>
      <v-row class="w-100 pa-0 ma-0 bg-transparent d-flex justify-center">
        
        <v-col v-for="card in cardsData" :key="card.img" cols="12" md="4" class="pa-0">
          <SimpleCard
            :title="card.title"
            :src="card.img"
            img-size="45%"
            title-class="headline-5 my-5 text-center"
            description-class="f-body-1 text-center color-negro-3 px-4"
            body-class="bg-white bxs-6px ma-2 pa-5 br-8px"
            containerClass="bg-transparent"
            imgClass="ma-4"
          />
        </v-col>
      </v-row>      
    </div>
    
    <!-- 
    ######################################################
    ############# CARACTERÍSTICAS ########################
     -->
    <div class="card-container w-70 mx-auto my-16">
      <h5 class="headline-5 mt-16 mb-12">Características</h5>
      <v-row class="w-100 ma-0 pa-0">
        <v-col cols="6">
          <FlorCard
            title="Mesas predeterminadas"
            imgSrc="/img/circulo-negro1-vacio.svg"
          />
        </v-col>
        <v-col cols="6">
          <FlorCard
          title="Premio"
            imgSrc="/img/circulo-negro1-vacio.svg"
          />
        </v-col>
        <v-col cols="6">
          <FlorCard
            title="Montos de inscripción"
            imgSrc="/img/circulo-negro1-vacio.svg"
          />
        </v-col>
        <v-col cols="6">
          <FlorCard
          title="Jugadores aleatorios"
            imgSrc="/img/circulo-negro1-vacio.svg"
          />
        </v-col>
      </v-row>
    </div>
    <div style="height:150px"></div>
  </div>
</div>

</template>
<script>
import WebTitle from '../../components/Header/WebTitle.vue'
import SimpleCard from '../../components/Cards/SimpleCard.vue'
import FlorCard from '../../components/Cards/FlorCard.vue'
export default {
  layout:'landing-page',
  components: {
    WebTitle,
    SimpleCard,
    FlorCard
  },
  data() {
    return {
            cardsData: [
        {img: '/img/oro-uno-de.svg', title: '1 versus 1', description:'',},
        {img: '/img/oro-dos-de.svg', title: '2 versus 2', description:'',},
        {img: '/img/oro-tres-de.svg', title: '3 versus 3', description:'',},
      ]
    }
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