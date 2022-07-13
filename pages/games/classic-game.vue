<template>
<div>
  <WebTitle
    title="Partida clásica"
  />
  <div class="main mx-auto my-16">
    <div class="card-container w-70 mx-auto">
      <div>
        <nuxt-link to="/games/games" class="text-decoration-none f-subtitle-1 color-negro-3">Partidas</nuxt-link>
        <span class="f-subtitle-1 color-negro-3 mx-6">></span>
        <span class="f-subtitle-1 color-negro-2">Partida clásica</span>
      </div>
      <h5 class="headline-5 mt-16 mb-12">Niveles de dificultad</h5>
      <v-row class="w-100 pa-0 ma-0 bg-transparent d-flex justify-center">
        
        <v-col v-for="card in cardsData" :key="card.img" cols="12" md="4" class="pa-0">
          <SimpleCard
            :title="card.title"
            :src="card.img"
            img-size="20%"
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
    ###########################################
    ############# FLOR ########################
     -->
    <div class="card-container w-70 mx-auto my-16">
      <h5 class="headline-5 mt-16 mb-12">Flor</h5>
      <v-row class="w-100 ma-0 pa-0">
        <v-col cols="6">
          <FlorCard
            title="Con flor"
            imgSrc="/img/con-flor.svg"
          />
        </v-col>
        <v-col cols="6">
          <FlorCard
          title="Sin flor"
            imgSrc="/img/sin-flor.svg"
          />
        </v-col>
      </v-row>
    </div>

    <div class="card-container w-70 mx-auto my-16">
      <h5 class="headline-5 my-4">Puntaje</h5>
      <v-row class="w-100 ma-0 pa-0">
        <!-- 
        ###########################################
        ############# 15 PUNTOS ###################
         -->
        <v-col cols="6">
          <v-row class="w-100 ma-0 pa-0 bg-white">
            <v-col cols="12">
              <h5 class="headline-5">15 pts</h5>         
            </v-col>
            <v-col cols="9">
              <p class="f-subtitle-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </p>
            </v-col>

            <v-col cols="3">
              <v-row class="w-100 ma-0 pa-0">
                <v-col v-for="n in 3" cols="12" :key="n" class="pa-1 d-flex justify-center">
                  <img src="/img/puntaje.svg" alt="">
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- 
        ###########################################
        ############# 30 PUNTOS ###################
         -->
        <v-col cols="6">
          <v-row class="w-100 ma-0 pa-0 bg-white">
            <v-col cols="12">
              <h5 class="headline-5">30 pts</h5>         
            </v-col>
            <v-col cols="9">
              <p class="f-subtitle-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </p>


            </v-col>

            <v-col cols="3">
              <v-row class="w-100 ma-0 pa-0">
                <v-col v-for="n in 6" cols="6" :key="n" class="pa-1 d-flex justify-center">
                  <img src="/img/puntaje.svg" alt="">
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        
      </v-row>
    </div>
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
        {img: '/img/principiante.svg', title: 'Principiante', description:'',},
        {img: '/img/normal.svg', title: 'Normal', description:'',},
        {img: '/img/experto.svg', title: 'Experto', description:'',},
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