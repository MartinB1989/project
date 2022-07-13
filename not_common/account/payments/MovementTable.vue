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
            title="Detalle de partida" 
            v-model="search"
            :canDownload="false"
            :canFilter="false"
            :canPrint="false"
            :canSearch="false"
          />
        </template>

        <template v-slot:[`item.move`]="{ item }">
          <span :class="moveTextColor(item.move)">
            {{ moveText(item.move) }}
          </span>
        </template>
        <template v-slot:[`item.payType`]="{ item }">
          <v-chip>
            {{ payTypeText(item.payType)}}
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
        {text: 'Fecha', value: 'date', class:'header-class'},
        {sortable:false, text: 'Tipo', value: 'payType', class:'header-class'},
        {sortable:false, text: 'Descripción', value: 'description', class:'header-class'},
        {sortable:false, text: 'Movimientos', value: 'move', class:'header-class'},
        {sortable:false, text: 'Importe', value: 'amount', class:'header-class'},

      ],
      tableData: [
        // {
        //   date: '24/11/2021',
        //   payType: 0,
        //   description: 'Agregar fondos',
        //   move: 700,
        //   amount: 3700
        // },
        // {
        //   date: '24/11/2021',
        //   payType: 0,
        //   description: 'Agregar fondos',
        //   move: 700,
        //   amount: 3700
        // },
        // {
        //   date: '24/11/2021',
        //   payType: 0,
        //   description: 'Agregar fondos',
        //   move: 700,
        //   amount: 3700
        // },
        // {
        //   date: '24/11/2021',
        //   payType: 1,
        //   description: 'Agregar fondos',
        //   move: -700,
        //   amount: 3700
        // },
        // {
        //   date: '24/11/2021',
        //   payType: 1,
        //   description: 'Agregar fondos',
        //   move: -700,
        //   amount: 3700
        // } 
      ],
      search:''
    }
  },
  methods: {
    payTypeText (value) {
      if (value == 0) return 'Carga'
      else return 'Pago'
    },
    moveText (value) {
      if (value > 0) return `+ $ ${value}`
      else return `- $ ${value}`
    },
    moveTextColor (value) {
      if (value > 0) return `color-exito-1`
      else return `color-error`
    }    
  }
}
</script>