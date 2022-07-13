<template>
  <div>
    <WebTitle
      title="Torneo rápido"
      
    />
    <!-- <div class="max-w mx-auto mt-8">
        <div class="w-70 mx-auto"> -->
        <web-container class="mt-8" >

          <nuxt-link to="/how-to-play/" class="text-decoration-none f-subtitle-1 color-negro-3">¿Cómo jugar?</nuxt-link>
          <span class="f-subtitle-1 color-negro-3 mx-6">></span>
          <span class="f-subtitle-1 color-negro-2">Modo de juego</span>

          <h5 class="headline-5 mt-16 mb-4">Objetivo de juego</h5>
          <p class="f-body-1 mb-16 pb-8">
              El truco argentino se juega a 2 jugadores o por parejas y se utiliza la baraja española de 40 cartas.
              <br><br>
              El objetivo del juego es ganar un número determinado de chicos (1, 2 ó 3 chicos). Cada chico puede jugar a 15 ó 30 puntos. 
          </p>  
        </web-container>
        <!-- </div>            
    </div> -->
    <div class="bg-white d-flex flex-column align-center justify-center mt-16 " >
        <!-- 
            ###########################################
            ############ 30 PUNTOS ####################
        -->
            <div class="w-30">
                <v-row class="w-100 ma-0 pa-0 bg-white">
                    <v-col cols="12">
                    <h5 class="headline-5">Un chico de 30 pts</h5>         
                    </v-col>
                    <v-col cols="9">
                    <p class="f-subtitle-1">
                      A la primera mitad de los puntos se las llama “malas” 
                    </p>


                    </v-col>

                    <v-col cols="3">
                        <v-row class="w-100 ma-0 pa-0">
                            <v-col v-for="n in 3" cols="6" :key="n" class="pa-1 d-flex justify-center">
                            <img src="/img/puntaje.svg" alt="">
                            </v-col>
                        </v-row>  
                    </v-col>
                </v-row>
            </div>
            <div class="w-30">
                <v-row class="w-100 ma-0 pa-0 bg-white">
                        <v-col cols="9">
                        <p class="f-subtitle-1">
                            A la segunda mitad de los puntos se las llama “buenas”  
                        </p>
                    </v-col>

                    <v-col cols="3">
                        <v-row class="w-100 ma-0 pa-0">
                            <v-col v-for="n in 3" cols="6" :key="n" class="pa-1 d-flex justify-center">
                            <img src="/img/puntaje.svg" alt="">
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
    </div>

    <web-container>
      <p class="f-body-1 my-16 py-8">
        Un partido de truco consta de varias "manos" o rondas, en las cuales las cartas se reparten, los jugadores suman puntos, y luego las cartas se vuelven a mezclar. Los puntos se suman venciendo al rival en cada mano o bien logrando que el rival rechace un desafío ya que el juego se basa en jugar las cartas y a la vez desafiarse mutuamente.
      </p>
      <h5 class="headline-5 mt-16 mb-4">Modo de juego</h5>
      <p class="f-body-1 mb-8">
          Cuando solo dos jugadores se enfrentan se denomina “mano a mano”. El juego en equipos se hace entre dos parejas o entre equipos de tres jugadores, modalidad llamada, “pica pica”, “tres puntas” o “sexto”.
      </p>
      <v-row class="w-100 pa-0 ma-0 bg-transparent d-flex justify-center">
        
        <v-col v-for="card in cardsData" :key="card.img" cols="12" md="4" class="pa-0">
          <SimpleCard
            :title="card.title"
            :src="card.img"
            img-size="25%"
            title-class="headline-5 my-5 text-center"
            description-class="f-body-1 text-center color-negro-3 px-4"
            body-class="bg-white bxs-6px ma-2 pa-5 br-8px"
            containerClass="bg-transparent"
            imgClass="ma-4"
          />
        </v-col>
      </v-row>  
    </web-container>
    

    <div style="height:50px"></div>
    <div class="d-flex justify-center my-16">
      <a href="#top" class="a-btn d-block px-4 py-1 text-decoration-none">
        <v-icon color="#3D445E" size="18">mdi-arrow-up</v-icon>
        <span class="f-caption color-negro-2">Ir arriba</span>
      </a>
    </div>
  </div>

</template>
<script>
import WebTitle from '../../components/Header/WebTitle.vue'
import SimpleCard from '@/components/Cards/SimpleCard.vue'
import DarkCard from '~/components/Cards/DarkCard.vue'
import WebContainer from '~/components/WebContainer.vue'
import TSButton from '~/components/Buttons/TSButton.vue'
export default {
  layout: 'landing-page',
  components: {
    WebTitle,
    SimpleCard,
    DarkCard,
    WebContainer,
    TSButton
  },
  data() {
    return {
      cardsData: [
        {img: '/img/oro-uno-de.svg', title: '1 versus 1', description:''},
        {img: '/img/oro-dos-de.svg', title: '2 versus 2', description:''},
        {img: '/img/oro-tres-de.svg', title: '3 versus 3', description:''}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.a-btn {
  border: 1px solid #3D445E;
  box-sizing: border-box;
  border-radius: 36px;
}
</style>