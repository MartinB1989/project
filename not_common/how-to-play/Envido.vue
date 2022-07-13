<template>
  <div>
    <web-container>
      <h5 class="headline-5 my-16">Envido</h5>
    </web-container>
    <div class="bg-white">
      <web-container class="py-16">
        <div class="d-flex justify-center">
          <img src="/img/envido.svg" alt="envido-imagen" class="img-envido">
        </div>
      </web-container>
    </div>

    <web-container class="my-16">
      <p class="f-body-1">
        Esta apuesta la gana el jugador que consigue ligar dos cartas del mismo palo 
        cuya suma sea la más alta. En este caso, los sietes son las cartas de mayor 
        valor y los anchos las más bajas. 
        <br><br>
        Además, sólo se puede realizar en primera mano y siempre antes del truco.
      </p>

      <h5 class="headline-5 my-16">¿Cuándo se canta envido?</h5>
      <ul>
        <li class="f-body-1">
          Si se tienen 2 cartas del mismo palo, se suman sus valores y se le agregan 20 (de ahí la importancia de unir dos cartas del mismo palo).
        </li>
        <li class="f-body-1">
          Las figuras (sota, caballo y rey) valen 0 puntos para el envido. Si se tienen 2 figuras del mismo palo la puntuación de envido es 20.
        </li>
        <li class="f-body-1">
          Si nadie tiene 2 cartas del mismo palo, se cuenta la carta más alta. En caso de empate, gana el jugador que va de mano.
        </li>
      </ul>
           
    </web-container>

    <div class="bg-white my-16">
      <web-container class="py-16">
        <div class="d-flex justify-center">
          <img src="/img/envido.svg" alt="envido-imagen" class="img-envido">
        </div>
        <p class="f-body-1 color-negro-3 text-center mt-8">
          En este ejemplo se suman las dos cartas de espadas y se le agregan 20: 7+1+20=28.
        </p>
      </web-container>
    </div>

    <web-container class="my-16">
      <p class="f-body-1 mt-16 mb-8">
        La pareja o jugador contrario debe responder con una de las siguientes opciones: No quiero:
      </p>

      <ul class="mb-16">
        <li class="f-body-1">
          Rechaza la apuesta y la pareja que ha envidado suma los puntos apostados hasta ese momento.
        </li>
        <li class="f-body-1">
          Quiero: Acepta la apuesta que se resolverá al final de la ronda.
        </li>
        <li class="f-body-1">
          Envido, Real Envido, Falta: Sube la apuesta y pasa el turno al jugador o pareja contraria para que decida.
        </li>
      </ul>
      
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="12"
        hide-default-footer	
        class="elevation-1 w-100 br-8px"
      >
        <template v-slot:[`header.situation`]="{ header }">
          <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
        </template>
        <template v-slot:[`header.wanted`]="{ header }">
          <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
        </template>
        <template v-slot:[`header.nowanted`]="{ header }">
          <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
        </template>
      </v-data-table>

      <p class="f-body-1 my-16 mb-8">
        La falta es la apuesta máxima del envido y la puntuación conseguida depende del estado de la partida:
      </p>

      <ul>
        <li class="f-body-1">
          Si se está en “malas”, el jugador o pareja ganadora del envite gana el chico
        </li>
        <li class="f-body-1">
          Si se está en “buenas”, el jugador o pareja ganadora se lleva los puntos que le faltan al jugador o pareja con más puntos para conseguir el chico.
        </li>
      </ul>
      
      <div class="d-flex justify-center my-16">
        <a href="#top" class="a-btn d-block px-4 py-1 text-decoration-none">
          <v-icon color="#3D445E" size="18">mdi-arrow-up</v-icon>
          <span class="f-caption color-negro-2">Ir arriba</span>
        </a>
      </div>
    </web-container>


  </div>
</template>
<script>
import WebContainer from "~/components/WebContainer.vue"

export default {  
  name: 'Envido',
  components: { 
    WebContainer 
  
  },
  data() {
    return {
      headers: [
        {
          text: '',
          sortable: false,
          value: 'situation',
          class:'bg-negro-3',
          cellClass:'f-subtitle-2 color-negro-2'
        },
        { 
          text: 'Puntos si quiere', 
          sortable: false, 
          value: 'wanted', 
          class:'bg-negro-3',
          cellClass:'f-subtitle-2 color-negro-2' 
        },
        { 
          text: 'Puntos si no quiere', 
          sortable: false, 
          value: 'nowanted', 
          class:'bg-negro-3', 
          cellClass:'f-subtitle-2 color-negro-2' 
        },
      ],
      desserts: [
        {
          situation: 'Envido',
          wanted: 2,
          nowanted: 1
        },
        {
          situation: 'Real envido',
          wanted: 3,
          nowanted: 1
        },
        {
          situation: 'Falta envido',
          wanted: 'Ver abajo',
          nowanted: 1
        },
        {
          situation: 'Envido + Envido',
          wanted: 4,
          nowanted: 2
        },
        {
          situation: 'Envido + Real envido',
          wanted: 5,
          nowanted: 2
        },
        {
          situation: 'Envido + Falta envido',
          wanted: 'Ver abajo',
          nowanted: 2
        },
        {
          situation: 'Real envido + Falta envido',
          wanted: 'Ver abajo',
          nowanted: 3
        },
        {
          situation: 'Envido + Envido + Real envido',
          wanted: 7,
          nowanted: 5
        },
        {
          situation: 'Envido + Envido + Falta envido',
          wanted: 'Ver abajo',
          nowanted: 4
        },
        {
          situation: 'Envido + Real envido + Falta envido',
          wanted: 'Ver abajo',
          nowanted: 5
        },
        {
          situation: 'Envido + Envido + Real envido +Falta envido',
          wanted: 'Ver abajo',
          nowanted: 7
        },
                                           
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .img-envido {
    width: 100%;
  }
  ::v-deep .v-data-table-header tr th:first-child {
    border-radius: 8px 0px 0 0;
  }
  ::v-deep .v-data-table-header tr th:last-child {
    border-radius: 0px 8px 0 0px;
  }
  .a-btn {
    border: 1px solid #3D445E;
    box-sizing: border-box;
    border-radius: 36px;
  }
}

@media screen and (min-width: 600px) {
  .img-envido {
    width: 80%;
  }
}
@media screen and (min-width: 960px) {
  .img-envido {
    width: 50%;
  }
}


</style>