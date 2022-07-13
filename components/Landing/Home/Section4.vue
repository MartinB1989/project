<template>
  <section class="container-section-4 container-fluid bg-white ma-0">
    <div class="mx-auto max-w">
      <h1 class="headline-4 text-center mb-5 py-5">Nuestros torneos</h1>
      <v-row class="w-100 pa-0 ma-0">
        <v-col cols="12" md="4" v-for="card in cardsData" :key="card.img">
          <SimpleCard
            :title="card.title"
            :src="card.img"
            :description="card.description"
            img-size="50%"
            title-class="headline-5 my-4 text-center"
            description-class="f-body-1 text-center color-negro-3 px-4"
            body-class="ma-2 pa-5"
          />
        </v-col>
      </v-row>
      <div class="button d-flex justify-center">
          <TSButton btnType="ts-btn-primary" text="Descargá el juego" />
      </div>
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
        {img: '/img/copa-rapido.svg', title: 'Torneo rápido', description:'Torneos hasta de 8 equipos',},
        {img: '/img/copa-semanal.svg', title: 'Torneo semanal', description:'Torneos todos los domingos',},
        {img: '/img/copa-claseA.svg', title: 'Torneo clase A', description:'El torneo más importante',},
      ]
    }
  }
}
</script>
// <style lang="scss" scoped>
@media screen and (min-width: 220px) {
  .button {
    margin-top: 4rem;
  }
  .container-section-4 {
    padding: 5rem 10%;
  }
}
</style>