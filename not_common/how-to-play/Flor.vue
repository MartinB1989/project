<template>
  <div>
    <web-container>
      <h5 class="headline-5 my-16">Flor</h5>
    </web-container>
    <div class="bg-white">
      <web-container class="py-16">
        <div class="d-flex justify-center">
          <img src="/img/flor.svg" alt="envido-imagen" class="img-flor">
        </div>
      </web-container>
    </div>

    <web-container class="my-16">
      <p class="f-body-1">
        Cantá "flor" en voz alta si tienes 3 cartas del mismo palo en tu mano. 
        La puntuación de una flor es la misma que en el envido: 
        se suma el valor de las cartas más 20 puntos 
        (teniendo en cuenta que las figuras valen 0). 

      </p>
           
    </web-container>

    <div class="bg-white my-16">
      <web-container class="py-16">
        <div class="d-flex justify-center">
          <img src="/img/flor.svg" alt="flor-imagen" class="img-flor">
        </div>
        <p class="f-body-1 color-negro-3 text-center mt-8">
          En este ejemplo se suman las tres cartas y se le agregan 20: 1+5+3+20=29.
        </p>
      </web-container>
    </div>

    <web-container class="my-16">
      <p class="f-body-1 mt-16 mb-8">
        Algunas consideraciones a tener en cuenta.
      </p>

      <ul class="mb-16">
        <li class="f-body-1">
          Si algún jugador tiene flor el envite queda anulado.
        </li>
        <li class="f-body-1">
          La flor es obligada cantarla
        </li>
        <li class="f-body-1">
          Si un jugador tiene flor y los demás no, éste gana 3 puntos.
        </li>
        <li class="f-body-1">
          Si ambos jugadores de una pareja tienen flor, suman 3 puntos en total.
        </li>        
      </ul>
      <p class="f-body-1 my-8">
        Si ambos bandos tienen flor, se realiza un envite de flores, 
        el cual se puede responder con las siguientes opciones:
      </p>  

      <h5 class="headline-5 my-16">Contra flor</h5>
      
      <p class="f-body-1 my-8">
        Sirve para cantar la flor propia y retar al bando contrario a hablar 
        de nuevo. Si se acepta la apuesta, el ganador se resuelve al instante 
        y se anota 6 puntos. Si se rechaza, el bando que cantó contra-flor se 
        anota 4 puntos.
      </p>            
      <ul class="mb-16">
        <li class="f-body-1">
          Contra-flor al resto: Si se acepta la apuesta, el ganador 
          se lleva los puntos que le queden al jugador/pareja que vaya 
          ganando para ganar el chico.
        </li>
        <li class="f-body-1">
          Con flor quiero: Se acepta la apuesta de los contrarios. 
          Un envite de flor aceptado suma 4 puntos al ganador.
        </li>
        <li class="f-body-1">
          Con flor me achico: Sirve para anunciar que se tiene una flor, pero 
          se acepta como ganadora la de los contrarios. Un envite de flor no 
          aceptado suma 3 puntos al bando que cantó la flor 
          (Contra flor no aceptada suma 4 puntos y contra-flor al resto no 
          aceptada 6 puntos).
        </li>
      </ul>

      <p class="f-body-1 mb-16">
        Como pasa con el envido, la flor se juega antes que el truco. Por tanto, una pareja puede ganar el “chico” con los puntos de las flores y no se tendrá en cuenta el truco.
      </p>     
      <h5 class="headline-5 my-16">Puntaje</h5>
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
          situation: 'Flor',
          wanted: 4,
          nowanted: 3
        },
        {
          situation: 'Flor + contra flor',
          wanted: 6,
          nowanted: 4
        },
        {
          situation: 'Flor + contraflor al resto',
          wanted: 'Ver abajo',
          nowanted: 4
        },
        {
          situation: 'Flor + contra flor + contra flor al resto',
          wanted: 4,
          nowanted: 6
        }                                  
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .img-flor {
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
  .img-flor {
    width: 80%;
  }
}
@media screen and (min-width: 960px) {
  .img-flor {
    width: 50%;
  }
}


</style>