<template>
  <div>
    <WebTitle
      title="Torneo Clase A"
    />
    <div class="main mx-auto my-16">
      <div class="w-70 mx-auto">
        <div>
          <nuxt-link to="/tournament/tournament" class="text-decoration-none f-subtitle-1 color-negro-3">Toneos</nuxt-link>
          <span class="f-subtitle-1 color-negro-3 mx-6">></span>
          <span class="f-subtitle-1 color-negro-2">Torneo Clase A</span>
        </div>
        <h5 class="headline-5 mt-16 mb-12">Próximos torneos</h5>

        <InscriptionCard
          srcImg="/img/inscripcion-torneo-clase-a.svg"
          date="21/12/2021"
          missingHours="62hs"
          quotas="2 lugares"
          prize="$60.000"
        />

      </div>
      <div class="w-70 mx-auto">
        <h5 class="headline-5 mt-16 mb-12">Últimos torneos</h5>
        <h6 class="headline-6 mt-16 mb-12">1 versus 1</h6>
        <v-data-table
          :headers="headers1"
          :items="desserts1"
          :items-per-page="5"
          hide-default-footer	
          class="elevation-1 w-100 br-8px"
        >
          <template slot="top">
            <TopTableWeb
              srcImg="/img/inscripcion-torneo-clase-a-con-borde.svg"
              prize="$60.000"
              date="11/11/2021"
            />
          </template>
          <template v-slot:[`header.position`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
          <template v-slot:[`header.player`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
          <template v-slot:[`header.punctuation`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
          <template v-slot:[`header.percent`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
        </v-data-table>
      </div>


      <div class="w-70 mx-auto">
        <h6 class="headline-6 mt-16 mb-12">1 versus 1</h6>
        <v-data-table
          :headers="headers2"
          :items="desserts2"
          :items-per-page="5"
          hide-default-footer	
          class="elevation-1 w-100 br-8px"
        >
          <template slot="top">
            <TopTableWeb
              srcImg="/img/inscripcion-torneo-clase-a-con-borde.svg"
              prize="$110.000"
              date="11/11/2021"
            />
          </template>
          <template v-slot:[`header.position`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
          <template v-slot:[`header.player`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
          <template v-slot:[`header.punctuation`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
          <template v-slot:[`header.percent`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
        </v-data-table>
      </div>
      <div class="my-16 d-flex justify-center">
        <TSButton
          btnType="ts-btn-light"
          text="Ver más"
        />
      </div>

      <div class="w-70 mx-auto my-16 pt-16">
         <h5 class="headline-5 mb-12">Próximos torneos</h5>
         <p class="f-body-1 mb-16">
           La competencia será disputada en el formato Todos-Contra-Todos (FFA) en grupos de 8 jugadores que obtendrán Puntos de Torneo con base en su desempeño. Estos se irán sumando y aparecerán en el Ranking General de la copa.
         </p>
        <v-row>
          <v-col cols="6">
            <DarkCard 
              title="Domingos"
            />
          </v-col>
          <v-col cols="6">
            <DarkCard 
              title="Inscripción"
            />
          </v-col>
          <v-col cols="6">
            <DarkCard 
              title="Mesas predeterminadas"
            />
          </v-col>
          <v-col cols="6">
            <DarkCard 
              title="Premio"
            />
          </v-col>
        </v-row>
      </div>
    </div>  
  </div>
</template>
<script>
import WebTitle from '~/components/Header/WebTitle.vue'
import InscriptionCard from '~/not_common/tournament/InscriptionCard.vue'
import TopTableWeb from '~/components/Tables/TopTableWeb.vue'
import TSButton from '~/components/Buttons/TSButton.vue'
import DarkCard from '@/components/Cards/DarkCard.vue'

export default {
  layout: 'landing-page',
  name: 'weekly-tournament',
  components: {
    WebTitle,
    InscriptionCard,
    TopTableWeb,
    TSButton,
    DarkCard
  },
    data () {
      return {
        headers1: [
          {
            text: 'Posicion',
            align: 'start',
            sortable: false,
            value: 'position',
            class:'bg-negro-3',
            cellClass:'f-subtitle-2 color-negro-2'
          },
          { text: 'Jugador', value: 'player', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' },
          { text: 'Puntuación', value: 'punctuation', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' },
          { text: '%', value: 'percent', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' }
        ],
        headers2: [
          {
            text: 'Posicion',
            align: 'start',
            sortable: false,
            value: 'position',
            class:'bg-negro-3',
            cellClass:'f-subtitle-2 color-negro-2'
          },
          { text: 'Jugador', value: 'player', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' },
          { text: 'Puntuación', value: 'punctuation', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' },
          { text: '%', value: 'percent', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' }
        ],
        desserts1: [
          {
            position: 1,
            player: '@martinbenitez',
            punctuation: '+200',
            percent: '-'
          },
          {
            position: 2,
            player: '@martinbenitez',
            punctuation: '+200',
            percent: '-'
          },
          {
            position: 3,
            player: '@martinbenitez',
            punctuation: '+200',
            percent: '-'
          },
          {
            position: 4,
            player: '@martinbenitez',
            punctuation: '+200',
            percent: '-'
          }
        ],
        desserts2: [
          {
            position: 1,
            player: '@martinbenitez / @shara',
            punctuation: '+200',
            percent: '-'
          },
          {
            position: 2,
            player: '@martinbenitez / @shara',
            punctuation: '+200',
            percent: '-'
          },
          {
            position: 3,
            player: '@martinbenitez / @shara',
            punctuation: '+200',
            percent: '-'
          },
          {
            position: 4,
            player: '@martinbenitez / @shara',
            punctuation: '+200',
            percent: '-'
          }
        ]
      }
    },
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