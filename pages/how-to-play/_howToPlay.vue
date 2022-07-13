<template>
  <div>
    <WebTitle
      title="Cómo jugar"
    />
    <div class="max-w mx-auto my-16">
      <h1 class="headline-5 text-center mb-5 py-5">Reglas del truco argentino</h1>
      <v-row class="w-100 py-0 px-16 ma-0">
        <v-col cols="12" sm="6" lg="3" v-for="card in cardsData" :key="card.img" class="pa-0 h-100">
          <NuxtLink :to="card.link" class="text-decoration-none color-negro-2">
            <SimpleCard
              :title="card.title"
              :src="card.img"
              img-size="160px"
              title-class="headline-6 my-3 text-center"
              description-class="f-body-1 text-center color-negro-3"
              body-class="bg-white bxs-6px ma-2 pa-5 py-lg-12 br-8px"
              container-class="bg-transparent"
            />
          </NuxtLink>
        </v-col>
      </v-row>  
      <div class="videos mx-auto my-16 pt-16">
        <h5 class="headline-5 mb-16">Videos tutoriales</h5>
        <div v-for="(card, index) in cardVideos" :key="index">
          <LargeCard
            :title="card.title"
            text="Et vel tortor velit praesent in dolor egestas iaculis molestie ac placerat dui, sit sed pretium vitae et vel sapien, metus, diam feugiat et, luctus."
            boxClass="bg-white my-8"
            :link="true"
            :to="'/how-to-play/video-tutorial/'+card.id"
          />
        </div>

      </div>      
    </div>

  </div>
</template>
<script>
import WebTitle from '~/components/Header/WebTitle.vue'
import SimpleCard from '~/components/Cards/SimpleCard.vue'
import LargeCard from '~/components/Cards/LargeCard.vue'
export default {
  layout:'landing-page',
  components: {
    WebTitle,
    SimpleCard,
    LargeCard
  },
    data() {
    return {
      cardsData: [
        {img: '/img/partida-clasica.svg', title: 'Modo de juego', link:'/how-to-play/game-mode'},
        {img: '/img/modo-conquistador.svg', title: 'Cartas', link:'/how-to-play/game-cards'},
        {img: '/img/partida-rapida.svg', title: 'Preparación', link:'/how-to-play/preparation' },
        {img: '/img/partida-privada.svg', title: 'Jugadas', link:'/how-to-play/plays/'}
      ],
      cardVideos: [
        {title: 'Objetivo del juego', id:1},
        {title: 'Modo de juego', id:2},
        {title: 'Las cartas', id:3},
        {title: 'Comienza el juego', id:4},
        {title: 'Cantar envido', id:5},
        {title: 'Cantar truco', id:6},
        {title: 'Cantar flor', id:7}

      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.videos {
  max-width: 860px;
}
</style>