<template>
  <div class="d-flex flex-column align-center">
    <img :src="src" alt="imagen" class="mano">
    <p class="f-body-1 text-center color-negro-3 mt-8">
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Playhand',
  props: {
    src:{
      type: String,
      default: '/img/preparacion-pagina-1ra-mano.svg'
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width:280px) {
  .mano {
    width: 120%;
  }
}
@media screen and (min-width: 960px) {
  .mano {
    width: 60%;
  }
}
@media screen and (min-width: 1440px) {
  .mano {
    width: 50%;
  }
}
</style>