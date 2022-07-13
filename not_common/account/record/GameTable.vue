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
        no-data-text="No hay datos"
      >
        <template v-slot:top>
          <TopTable
            title="Partidas" 
            v-model="search"
            :canDownload="false"
            :canPrint="false"
          />
        </template>

        <template v-slot:[`item.rival`]="{ item }">
          <div class="d-flex align-center">
            <v-avatar size="24"><img :src="item.picture" alt="avatar"/></v-avatar>
            <span :class="'ml-2 f-subtitle-2'">{{ item.rival }}</span>
          </div>
        </template>
        
        <template v-slot:[`item.gameStyle`]="{ item }">
          <v-chip
            :color="color_acento2"
          >
            {{gameStyle(item.gameStyle)}}
          </v-chip>
        </template>

        <template v-slot:[`item.result`]="{ item }">
          <v-chip
            :color="resultColor(item.result)"
          >
            {{ resultText(item.result) }}
          </v-chip>
        </template>

        <template v-slot:[`item.point`]="{ item }">
          <span :class="pointColor(item.point)">
            {{ pointText(item.point)}}
          </span>
        </template>

        <template v-slot:[`item.amount`]="{ item }">
          <span :class="amountColor(item.amount)">
            {{ amountText(item.amount)}}
          </span>
        </template>

        <template v-slot:[`item.action`]>
          <v-icon size="24" :color="color_negro2" @click="$emit('action')">mdi-note-text</v-icon>
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
          { text: 'Fecha', value: 'date', class:'header-class' },
          { sortable:false, text: 'Rivales', value: 'rival', class:'header-class' },
          { sortable:false, text: 'Tipo de partida', value: 'gameType', class:'header-class' },
          { sortable:false, text: 'Estilo de partida', value: 'gameStyle', class:'header-class' },
          { sortable:false, text: 'Resultado', value: 'result', class:'header-class' },
          { sortable:false, text: 'Puntos', value: 'point', class:'header-class' },
          { sortable:false, text: 'Importe', value: 'amount', class:'header-class' },
          { sortable:false, text: 'Acciones', value: 'action', class:'header-class' },
        
      ],
      tableData: [],
      search:''
    }
  },
  created () {
    this.getTableData()
  },
  methods: {
    gameStyle (value) {
      if (value == 1) return '1 vs 1'
      else if (value == 2) return '2 vs 2'
      else if (value == 3) return '3 vs 3'
    },
    resultColor (value) {
      if (value == 1) return '#DEF4E7'
      else if (value == 2) return '#FD5E5E26'
    },
    resultText (value) {
      if (value == 1) return 'Ganado'
      else if (value == 2) return 'Perdido'      
    },
    pointColor (value) {
      if (value > 0) return 'color-exito-1'
      else return 'color-error'
    },
    pointText (value) {
      if (value > 0) return `+ ${value}`
      else return `- ${Math.abs(value)}`  
    },
    amountColor (value) {
      if (value > 0) return 'color-exito-1'
      else return 'color-error'
    },
    amountText (value) {
      if (value > 0) return `+ $ ${value}`
      else return `- $ ${Math.abs(value)}`  
    },    

    getTableData () {
      this.tableData = [
        // {
        //   id: 1,
        //   date:'24/11/2022',
        //   rival: '@lopezcarlos',
        //   picture: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png',
        //   gameType: 'Rápida',
        //   gameStyle: 1,
        //   result: 1,
        //   point: 35,
        //   amount:2000
        // },
        // {
        //   id: 1,
        //   date:'24/11/2022',
        //   rival: '@lopezcarlos',
        //   picture: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png',
        //   gameType: 'Rápida',
        //   gameStyle: 3,
        //   result: 2,
        //   point: 35,
        //   amount:2000
        // },
        // {
        //   id: 1,
        //   date:'24/11/2022',
        //   rival: '@lopezcarlos',
        //   picture: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png',
        //   gameType: 'Rápida',
        //   gameStyle: 2,
        //   result: 2,
        //   point: -20,
        //   amount:-2000
        // }
      ]
    }
  }
}
</script>