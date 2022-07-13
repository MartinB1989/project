<template>
  <div>
    <web-container>
      <h5 class="headline-5 my-16">Truco</h5>
    </web-container>
    <div class="bg-white">
      <web-container class="py-16">
        <div class="d-flex justify-center">
          <img src="/img/truco.svg" alt="truco-imagen" class="img-truco">
        </div>
      </web-container>
    </div>

    <web-container class="my-16">
      <p class="f-body-1">
        Cantá "truco" si crees que podés ganar la mano. El truco es una apuesta 
        que se puede realizar en cualquier momento de la partida y el rival 
        puede responder de tres formas:
      </p>

      <ul>
        <li class="f-body-1">
          Quiero: aceptando el desafío.
        </li>
        <li class="f-body-1">
          No quiero: rechazando el desafío, y perdiendo la ronda.
        </li>
        <li class="f-body-1">
          Quiero retruco: elevando la apuesta un punto más.
        </li>
      </ul>

      <p class="f-body-1">
        Si el rival canta “retruco” se puede responder de tres formas:
      </p>

      <ul>
        <li class="f-body-1">
          Quiero: aceptando el desafío.
        </li>
        <li class="f-body-1">
          No quiero: rechazando el desafío, y perdiendo la ronda.
        </li>
        <li class="f-body-1">
          Quiero retruco: elevando la apuesta un punto más.
        </li>
      </ul>

      <p class="f-body-1">
        Si se canta “vale cuatro” solo hay dos respuestas posibles:
      </p>

      <ul>
        <li class="f-body-1">
          Quiero: aceptando el desafío.
        </li>
        <li class="f-body-1">
          No quiero: rechazando el desafío, y perdiendo la ronda.
        </li>
      </ul>
           
    </web-container>

    <web-container class="my-16">
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
          situation: 'Truco',
          wanted: 2,
          nowanted: 1
        },
        {
          situation: 'Retruco',
          wanted: 3,
          nowanted: 2
        },
        {
          situation: 'Vale 4',
          wanted: 4,
          nowanted: 3
        }                                  
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .img-truco {
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
  .img-truco {
    width: 80%;
  }
}
@media screen and (min-width: 960px) {
  .img-truco {
    width: 50%;
  }
}


</style>