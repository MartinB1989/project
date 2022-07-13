<template>
  <div>
    <WebTitle
      title="Ranking"
    />
    <div class="main mx-auto my-16">
      <div class="w-70 mx-auto">
        <h5 class="headline-5 mt-16 mb-12">Tabla de puntuación</h5>
        <v-row>
          <v-col cols="6">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              hide-default-footer	
              class="elevation-1 w-100 br-8px"
            >
              <template slot="top">
                <TopTableWeb
                  srcImg="/img/copa-estrella.svg"
                  tipo="clase"
                  title="Clase A"
                  icon="mdi-chevron-right"
                  class="pointer"
                  @handleClick="goto('/ranking/clase-a')"
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
          </v-col>
          <v-col cols="6">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              hide-default-footer	
              class="elevation-1 w-100 br-8px"
            >
              <template slot="top">
                <TopTableWeb
                  srcImg="/img/copa-estrella.svg"
                  tipo="clase"
                  title="Clase B"
                  icon="mdi-chevron-right"
                  class="pointer"
                  @handleClick="goto('/ranking/clase-b')"
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
          </v-col>

          <v-col cols="6">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              hide-default-footer	
              class="elevation-1 w-100 br-8px"
            >
              <template slot="top">
                <TopTableWeb
                  srcImg="/img/copa-estrella.svg"
                  tipo="clase"
                  title="Clase C"
                  icon="mdi-chevron-right"
                  class="pointer"
                  @handleClick="goto('/ranking/clase-c')"
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
          </v-col>

          <v-col cols="6">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              hide-default-footer	
              class="elevation-1 w-100 br-8px"
            >
              <template slot="top">
                <TopTableWeb
                  srcImg="/img/copa-estrella.svg"
                  tipo="clase"
                  title="Clase D"
                  icon="mdi-chevron-right"
                  class="pointer"
                  @handleClick="goto('/ranking/clase-d')"
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
          </v-col>
        </v-row>

        <div class="d-flex justify-center my-16">
          <TSButton
            btnType="ts-btn-light"
            text="Ver ranking completo"
          />
        </div>

        <h5 class="headline-5 mt-16 mb-4">Sistema de puntuación</h5>
        <p class="f-body-1 mb-16">Para pasar de categoria debes sumar un total de 30 puntos en un plazo de 14 dias.</p>
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
import WebTitle from '@/components/Header/WebTitle.vue'
import TopTableWeb from '@/components/Tables/TopTableWeb.vue'
import TSButton from '@/components/Buttons/TSButton.vue'
export default {
  layout:'landing-page',
  components: {
    WebTitle,
    TopTableWeb,
    TSButton
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
        }
      ],
      desserts2: [
        {
          category: 'A',
          total: '24',
          point: '60 - 69'
        },
        {
          category: 'B',
          total: '16',
          point: '50 - 59'
        },
        {
          category: 'C',
          total: '12',
          point: '40 - 49'
        },
        {
          category: 'D',
          total: '8',
          point: '30 - 39'
        },
      ],
    }
  },
  methods: {
    goto(pathName) {
      this.$router.push({path: pathName})
    }
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