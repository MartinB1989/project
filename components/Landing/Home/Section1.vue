<template>
  <section class="container-section-1 my-5 mx-auto max-w">
    <h1 class="headline-4 text-center mb-5 py-5">Por qué jugar TrucoStart</h1>
    <v-row class="bg-transparent d-flex justify-center">
      <v-col v-for="card in cardsData" :key="card.img" cols="12" md="4" >
        <SimpleCard
          :title="card.title"
          :src="card.img"
          img-size="20%"
          title-class="headline-5 my-5 text-center"
          description-class="f-body-1 text-center color-negro-3 px-4"
          body-class="bg-white bxs-6px ma-2 px-5 py-8 py-lg-14 br-8px"
          containerClass="bg-transparent"
        />
      </v-col>
    </v-row>
    <div class="button d-flex justify-center">
        <TSButton btnType="ts-btn-primary" text="Descargá el juego" box-class="d-flex justify-center" />
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
        {img: '/img/copa.svg', title: 'Nuestros tornes', description:'',},
        {img: '/img/escudo.svg', title: 'Nuestros Torneos', description:'',},
        {img: '/img/medalla.svg', title: 'Nuestros Torneos', description:'',},
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
  .container-section-1 {
    padding: 5rem 8%;
  }
}
</style>