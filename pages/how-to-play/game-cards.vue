<template>
  <div>
    <web-title
      title="Cartas"
    />

    <web-container class="mt-8">
      <simple-breadcrumb
        link="/how-to-play/"
        back="¿Cómo jugar?"
        actual="Cartas"
      />

      <h5 class="headline-5 my-8">El mazo</h5>
      <p class="f-body-1 mb-16">
        El mazo para el truco está formado por 40 cartas en lugar de 48. 
        Esto se debe a que no hay ochos, nueves ni comodines en el mazo completo. 
        <br><br>
        Hay cartas desde el as hasta el siete, cada una de las cuales tiene un 
        valor numérico que coincide con el número que aparece en esta. 
        
        También están los reyes, caballos y sotas que no tienen ningún valor numérico.

      </p>
    
      <h5 class="headline-5 mb-8 mt-16">Jerarquía</h5>
      <p class="f-body-1">
        Aprende la clasificación o jerarquía de las cartas, desde la más alta 
        hasta la más baja. Esto es importante para poder ganar trucos individuales 
        durante el juego. 
        <br><br>
        Para determinar quién gana el truco tienes que seguir la clasificación 
        de las cartas (de mayor a menor):

      </p>
    </web-container>
    <div class="bg-white d-flex flex-column align-center justify-center ">
      <h5 class="headline-5 mt-16">Mayor valor</h5>
      <img src="/img/jerarquia-cartas.svg" alt="" class="px-4 img-jerarquia">
      <h5 class="headline-5 mb-16">Menor valor</h5>
    </div>
    <div class="d-flex justify-center my-16">
      <a href="#top" class="a-btn d-block px-4 py-1 text-decoration-none">
        <v-icon color="#3D445E" size="18">mdi-arrow-up</v-icon>
        <span class="f-caption color-negro-2">Ir arriba</span>
      </a>
    </div>
  </div>
</template>
<script>
import SimpleBreadcrumb from '~/components/Breadcrumb/SimpleBreadcrumb.vue'
import WebTitle from '~/components/Header/WebTitle.vue'
import WebContainer from '~/components/WebContainer.vue'
export default {
  layout: 'landing-page',
  components: { WebContainer,WebTitle, SimpleBreadcrumb },
  
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .img-jerarquia {
    width: 100%;
  }
  .a-btn {
    border: 1px solid #3D445E;
    box-sizing: border-box;
    border-radius: 36px;
  }
}

@media screen and (min-width: 600px) {
  .img-jerarquia {
    width: 80%;
  }
}
@media screen and (min-width: 960px) {
  .img-jerarquia {
    width: 60%;
  }
}
@media screen and (min-width: 1440px) {
  .img-jerarquia {
    width: 45%;
  }
}
@media screen and (min-width: 1904px) {
  .img-jerarquia {
    width: 40%;
  }
}
@media screen and (min-width: 2500px) {
  .img-jerarquia {
    width: 25%;
  }
}
</style>