<template>
    <div class="home-banner">
      <h1 class="headline-3 text-white mb-4">Bienvenido a TrucoStars</h1>
      <h2 class="headline-6 text-white mb-4">Una forma segura de jugar y apostar al truco</h2>
      <TSButton btnType="ts-btn-dark" text="Descargar juego"/>
    </div>
</template>
<script>
import TSButton from '@/components/Buttons/TSButton.vue'
export default {
  name: 'HomeBanner',
  components: {
    TSButton
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .home-banner {
    width: 100%;
    height: 100vh;
    padding: 14rem 0 0 1rem;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    background-image: url('/img/banner-trucostars-landing.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 60%;
  }
}

@media screen and (min-width: 960px) {
  .home-banner {
    display: block;
    width: 100%;
    height: 100vh;
    padding: 14rem 0 0 12rem;
    background-image: url('/img/banner2-trucostars-landing.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>