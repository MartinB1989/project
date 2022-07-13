<template>
  <v-container tag="section" fluid class="container-section-2 bg-white">
    <div class="mx-auto max-w">
      <h1 class="headline-4 text-center mb-5 py-5">¿Cómo jugar?</h1>
      <carousel
        :autoplay="true"
        :autoplayTimeout="4000"
        :perPage="1"
        paginationActiveColor='#EFAD2D'
        :paginationSize="12"
      >
        <slide class="px-4">
          <LargeCard
            title="Modo de juego"
            text="Cuando solo dos jugadores se enfrentan se denomina «mano a mano». El juego en equipos se hace entre dos parejas o entre equipos de tres jugadores, modalidad llamada, «pica pica», «tres puntas» o «sexto»."
            typeCard="large"
          />
        </slide>
        <slide class="px-4">
          <LargeCard
            title="Modo de juego"
            text="Cuando solo dos jugadores se enfrentan se denomina «mano a mano». El juego en equipos se hace entre dos parejas o entre equipos de tres jugadores, modalidad llamada, «pica pica», «tres puntas» o «sexto»."
            typeCard="large"
          />
        </slide>
        <slide class="px-4">
          <LargeCard
            title="Modo de juego"
            text="Cuando solo dos jugadores se enfrentan se denomina «mano a mano». El juego en equipos se hace entre dos parejas o entre equipos de tres jugadores, modalidad llamada, «pica pica», «tres puntas» o «sexto»."
            typeCard="large"
          />
        </slide>
        <slide class="px-4">
          <LargeCard
            title="Modo de juego"
            text="Cuando solo dos jugadores se enfrentan se denomina «mano a mano». El juego en equipos se hace entre dos parejas o entre equipos de tres jugadores, modalidad llamada, «pica pica», «tres puntas» o «sexto»."
            typeCard="large"
          />
        </slide>
        <slide class="px-4">
          <LargeCard
            title="Modo de juego"
            text="Cuando solo dos jugadores se enfrentan se denomina «mano a mano». El juego en equipos se hace entre dos parejas o entre equipos de tres jugadores, modalidad llamada, «pica pica», «tres puntas» o «sexto»."
            typeCard="large"
          />
        </slide>
      </carousel>
    </div>
  </v-container>
</template>
<script>
import LargeCard from '@/components/Cards/LargeCard.vue'
export default {
  name: 'Section2',
  components: {
    LargeCard
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .container-section-2 {
    padding: 6rem 10%;
  }
}
</style>