<template>
  <div>
    <web-title
      title="Preparación"
    />
    <web-container class="mt-8">
      <simple-breadcrumb
        link="/how-to-play/"
        actual="Preparación"
        back="¿Cómo jugar?"
      />

      <h1 class="headline-5 mb-5 py-5">Objetivo del juego</h1>
      <p class="f-body-1">
      Al principio de la partida se decide por el jugador que es mano, es decir, 
      el que empieza a jugar. La persona que está a la derecha del repartidor empieza 
      el juego.
      <br><br>
      En cada ronda, se reparten tres cartas a cada jugador y todos tiran una carta 
      por turnos. La primera pareja o jugador que gana dos manos con cartas de mayor 
      valor, gana la ronda. 
      <br><br>
      Por ejemplo, si un jugador gana la primera mano y empata la segunda, 
      gana la ronda.  
      </p>  
    </web-container>
    <div class="bg-white py-16 mt-16">
      <web-container>
        <playhand
          src="/img/preparacion-pagina-1ra-mano.svg"
          text="En esta jugada el Jugador A tiene una carta mayor al Jugador B ganando la primera mano."
        />

        <playhand
          class="mt-16"
          src="/img/preparacion-pagina-2da-mano.svg"
          text="En esta jugada el Jugador B tiene una carta de mayor valor que el Jugador A ganando la segunda mano."
        />

        <playhand
          class="my-16"
          src="/img/preparacion-pagina-3ra-mano.svg"
          text="En esta jugada el Jugador A tiene una carta mayor al Jugador B ganando la tercera mano y la ronda."
        />      

      </web-container>
    </div>

    <web-container>
      <h5 class="headline-5 mt-16 mb-4">¿Cómo se ganan las rondas</h5>
      
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        hide-default-footer	
        class="elevation-1 w-100 br-8px"
      >
        <template v-slot:[`header.ronda1`]="{ header }">
          <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
        </template>
        <template v-slot:[`header.ronda2`]="{ header }">
          <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
        </template>
        <template v-slot:[`header.ronda3`]="{ header }">
          <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
        </template>
        <template v-slot:[`header.winner`]="{ header }">
          <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
        </template>
      </v-data-table>

      <h5 class="headline-5 mt-16 pt-16 mb-4">Puntaje de las rondas</h5>
      <p class="f-body-1 mb-16">
        Por cada ronda ganada simple, sin declaraciones de jugadas, el jugador o la pareja obtendrá 1 punto.
      </p>

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
import WebTitle from '~/components/Header/WebTitle.vue'
import WebContainer from '~/components/WebContainer.vue'
import SimpleBreadcrumb from '~/components/Breadcrumb/SimpleBreadcrumb'
import Playhand from '~/not_common/how-to-play/Playhand.vue'
export default {

  layout: 'landing-page',
  name: 'preparation',
  components: { 
    WebContainer,
    WebTitle,
    SimpleBreadcrumb,
    Playhand 
  },
  data () {
    return {
      headers: [
        {
          text: 'Ganador 1er enfrentamiento',
          align: 'start',
          sortable: false,
          value: 'ronda1',
          class:'bg-negro-3',
          cellClass:'f-subtitle-2 color-negro-2'
        },
        { text: 'Ganador 2do enfrentamiento', sortable: false, value: 'ronda2', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' },
        { text: 'Ganador 3er enfrentamiento', sortable: false, value: 'ronda3', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' },
        { text: 'Ganador', sortable: false, value: 'winner', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' }
      ],
      desserts: [
        {
          ronda1: 'Jugador A',
          ronda2: 'Jugador B',
          ronda3: 'Empate',
          winner: 'Jugador A'
        },
        {
          ronda1: 'Jugador A',
          ronda2: 'Empate',
          ronda3: 'No se juega',
          winner: 'Jugador A'
        },
        {
          ronda1: 'Empate',
          ronda2: 'Jugador A',
          ronda3: 'No se juega',
          winner: 'Jugador A'
        },
        {
          ronda1: 'Empate',
          ronda2: 'Empate',
          ronda3: 'Jugador A',
          winner: 'Jugador A'
        },
        {
          ronda1: 'Empate',
          ronda2: 'Empate',
          ronda3: 'Empate',
          winner: 'Mano'
        }
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
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
</style>