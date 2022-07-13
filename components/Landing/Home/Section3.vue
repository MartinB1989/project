<template>
  <section class="container-section-3 my-5 mx-auto max-w">
    <h1 class="headline-4 text-center mb-5 py-5">Nuestras partidas</h1>
    <v-row class="w-100 pa-0 ma-0">
      <v-col cols="12" sm="6" lg="3" v-for="card in cardsData" :key="card.img" class="pa-0 h-100">
        <SimpleCard
          :title="card.title"
          :src="card.img"
          img-size="160px"
          :description="card.description"
          title-class="headline-6 my-3 text-center"
          description-class="f-body-1 text-center color-negro-3"
          body-class="bg-white bxs-6px ma-2 pa-5 py-lg-12 br-8px"
          container-class="bg-transparent"
        />
      </v-col>
    </v-row>
    <div class="button d-flex justify-center">
        <TSButton btnType="ts-btn-primary" text="Descargá el juego" />
    </div>
  </section>
</template>
<script>
import TSButton from '@/components/Buttons/TSButton.vue'
import SimpleCard from '@/components/Cards/SimpleCard.vue'
export default {
  name: 'Section1',
  components: {
    TSButton,
    SimpleCard
  },
  data() {
    return {
      cardsData: [
        {img: '/img/partida-clasica.svg', title: 'Partida clásica', description:'Jugá contra la máquina',},
        {img: '/img/modo-conquistador.svg', title: 'Modo conquistador', description:'Jugá contra la máquina',},
        {img: '/img/partida-rapida.svg', title: 'Partida rápida', description:'Jugá contra la máquina',},
        {img: '/img/partida-privada.svg', title: 'Partida privada', description:'Jugá contra la máquina',}
      ]
    }
  }
}
</script>
// <style lang="scss" scoped>
@media screen and (min-width: 220px) {
  .button {
    margin-top: 8rem;
  }
  .container-section-3 {
    padding: 5rem 8%;
  }
}
</style>