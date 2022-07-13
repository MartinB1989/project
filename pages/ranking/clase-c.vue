<template>
  <div>
    <WebTitle
      title="Clase C"
    />
    <div class="main mx-auto my-16">
      <div class="card-container w-70 mx-auto">
        <div>
          <nuxt-link to="/ranking" class="text-decoration-none f-subtitle-1 color-negro-3">Ranking</nuxt-link>
          <span class="f-subtitle-1 color-negro-3 mx-6">></span>
          <span class="f-subtitle-1 color-negro-2">Clase C</span>
        </div>
        <h5 class="headline-5 mt-16 mb-12">Tabla de puntuación</h5>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="12"
          hide-default-footer	
          class="elevation-1 w-100 br-8px"
        >
          <template slot="top">
            <TopTableWeb
              srcImg="/img/copa-estrella.svg"
              tipo="clase"
              title="Clase C"
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
        </v-data-table>

        <h5 class="headline-5 mt-16 pt-16 mb-12">Requisitos para clasificar en Clase C</h5>

        <v-data-table
          :headers="headers2"
          :items="desserts2"
          :items-per-page="5"
          hide-default-footer	
          class="elevation-1 w-100 br-8px"
        >
          <template v-slot:[`header.category`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
          <template v-slot:[`header.total`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
          <template v-slot:[`header.point`]="{ header }">
            <span class="f-subtitle-2 text-white">{{ header.text }}</span> 
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>
<script>
import WebTitle from '../../components/Header/WebTitle.vue'
import TopTableWeb from '@/components/Tables/TopTableWeb.vue'
export default {
  layout: 'landing-page',
  components: {
    WebTitle,
    TopTableWeb
  },
  data() {
    return {
      headers: [
        {
          text: 'Posicion',
          align: 'start',
          sortable: false,
          value: 'position',
          class:'bg-negro-3',
          cellClass:'f-subtitle-2 color-negro-2'
        },
        { text: 'Jugador', sortable: false, value: 'player', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' },
        { text: 'Puntuación', sortable: false, value: 'punctuation', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' }
      ],
      headers2: [
        {
          text: 'Categoria',
          align: 'start',
          sortable: false,
          value: 'category',
          class:'bg-negro-3',
          cellClass:'f-subtitle-2 color-negro-2'
        },
        { text: 'Total de partidas', sortable: false, value: 'total', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' },
        { text: 'Puntos requeridos', sortable: false, value: 'point', class:'bg-negro-3', cellClass:'f-subtitle-2 color-negro-2' }
      ],
      desserts: [
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
        },
        {
          position: 5,
          player: '@martinbenitez',
          punctuation: '+200',
          percent: '-'
        },
        {
          position: 6,
          player: '@martinbenitez',
          punctuation: '+200',
          percent: '-'
        },
        {
          position: 7,
          player: '@martinbenitez',
          punctuation: '+200',
          percent: '-'
        },
        {
          position: 8,
          player: '@martinbenitez',
          punctuation: '+200',
          percent: '-'
        },
        {
          position: 9,
          player: '@martinbenitez',
          punctuation: '+200',
          percent: '-'
        },
        {
          position: 10,
          player: '@martinbenitez',
          punctuation: '+200',
          percent: '-'
        },
        {
          position: 11,
          player: '@martinbenitez',
          punctuation: '+200',
          percent: '-'
        },
        {
          position: 12,
          player: '@martinbenitez',
          punctuation: '+200',
          percent: '-'
        }
      ],
      desserts2: [
        {
          category: 'C',
          total: '12',
          point: '40 - 49'
        },
      ],
    }
  }
}
</script>
<style scoped>

@media screen and (min-width:280px) {
  .main {
    max-width: 1360px;
  }
}

</style>