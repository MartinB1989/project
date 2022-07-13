<template>
  <v-container fluid class="pa-0 ">
    <div class="pa-2">
      <v-data-table
        :headers="headers"
        :items="tableData"
        :items-per-page="5"
        class="elevation-1"
        :footer-props="{
          'items-per-page-text': 'Cantidad de filas'
        }"
        :search="search"
      >
        <template v-slot:top>
          <TopTable
            title="Detalle de partida" 
            v-model="search"
            :canDownload="false"
            :canFilter="false"
            :canPrint="false"
            :canSearch="false"
          />
        </template>

        <template v-slot:[`item.player`]="{ item }">
          <div class="d-flex align-center">
            <v-avatar size="24"><img :src="item.picture" alt="avatar"/></v-avatar>
            <span :class="'ml-2 f-subtitle-2'">{{ item.player }}</span>
          </div>
        </template>
        
        <template v-slot:[`item.state`]="{ item }">
          <v-chip
            :color="chipColor(item.state)"
            :text-color="chipTextColor(item.state)"
          >
            {{ chipText(item.state) }}
          </v-chip>
        </template>
      
      </v-data-table>
    </div>
   
  </v-container>
</template>
<script>
import variables from '@/mixins/variables.js'
import TopTable from '@/components/Tables/TopTable.vue'

export default {
  layout: 'account-section',
  components: {
    TopTable
  },
  mixins: [variables],
  data() {
    return {
      headers: [
        /* {sortable:false, text: 'ID', value: 'id', class:'header-class'}, */
        {sortable:false, text: 'Jugador', value: 'player', class:'header-class'},
        {sortable:false, text: 'Equipo', value: 'team', class:'header-class'},
        {sortable:false, text: 'Estado', value: 'state', class:'header-class'},
        {sortable:false, text: 'Puntos', value: 'point', class:'header-class'},
        {sortable:false, text: 'Importe', value: 'amount', class:'header-class'},

      ],
      tableData: [
        {
          id: 1111,
          player: '@lopezcarlos',
          picture: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png',
          team: 1,
          state:1,
          point: 30,
          amount:'$90.000'
        },
        {
          id: 1111,
          player: '@lopezcarlos',
          picture: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png',
          team: 1,
          state:0,
          point: 30,
          amount:'$90.000'
        },
        {
          id: 1111,
          player: '@lopezcarlos',
          picture: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png',
          team: 1,
          state:0,
          point: 30,
          amount:'$90.000'
        },
      ],
      search:''
    }
  },
  methods: {
    chipColor(state) {
      if(state === 0) return this.color_error2
      else if (state === 1 ) return this.color_exito2
    },
    chipTextColor(state) {
      if(state === 0) return this.color_error1
      else if (state === 1 ) return this.color_exito1
    },
    chipText(state) {
      if(state === 0) return 'Ganado'
      else if (state === 1 ) return 'Perdido'
    },
  }
}
</script>