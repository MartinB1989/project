<template>
<div>
  <WebTitle
    title="Partidas"
  />
  <div class="main mx-auto my-16">

    <div class="card-container w-70 mx-auto">
      <h5 class="headline-5 mb-10">Partidas contra la máquina</h5>
      <LargeCard
        title="Partida clásica"
        text="Et vel tortor velit praesent in dolor egestas iaculis molestie ac placerat dui, sit sed pretium vitae et vel sapien, metus, diam feugiat et, luctus."
        boxClass="bg-white my-8"
        :link="true"
        to="/games/classic-game"
      />
      <LargeCard
        title="Modo conquistador"
        text="Et vel tortor velit praesent in dolor egestas iaculis molestie ac placerat dui, sit sed pretium vitae et vel sapien, metus, diam feugiat et, luctus."
        boxClass="bg-white my-8"
        :link="true"
        to="/games/conqueror-mode"
      />
      <div style="height:100px"></div>
      <h5 class="headline-5 mb-10">Partidas contra la máquina</h5>
      <LargeCard
        title="Partida rápida"
        text="Et vel tortor velit praesent in dolor egestas iaculis molestie ac placerat dui, sit sed pretium vitae et vel sapien, metus, diam feugiat et, luctus."
        boxClass="bg-white my-8"
        :link="true"
        to="/games/quickplay"
      />
      <LargeCard
        title="Modo privado"
        text="Et vel tortor velit praesent in dolor egestas iaculis molestie ac placerat dui, sit sed pretium vitae et vel sapien, metus, diam feugiat et, luctus."
        boxClass="bg-white my-8"
        :link="true"
        to="/games/privateplay"
      />
    </div>
  </div>
</div>

</template>
<script>
import WebTitle from '../../components/Header/WebTitle.vue'
import LargeCard from '../../components/Cards/LargeCard.vue'
export default {
  layout:'landing-page',
  components: {
    WebTitle,
    LargeCard
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