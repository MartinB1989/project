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
            title="Mes 202X" 
            v-model="search"
            :canDownload="false"
            :canPrint="false"
          />
        </template>

        <template v-slot:[`item.type`]="{ item }">
          <v-chip
            :color="color_negro4"
            :text-color="color_negro2"
          >
            {{ item.type }}
          </v-chip>
        </template>

        <template v-slot:[`item.action`]>
          <v-icon size="24" class="pointer" :color="color_negro2">mdi-note-text</v-icon>
          <v-icon size="24" class="pointer" :color="color_negro2">mdi-download</v-icon>
          <v-icon size="24" class="pointer" :color="color_negro2">mdi-printer</v-icon>
        </template>

        <template v-slot:[`item.moving`]="{ item }">
          <span :class="['f-subtitle-2', {'color-error' : item.moving < 0}, {'color-exito-1' : item.moving > 0}]">{{ item.moving }}$</span>
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
        {sortable:false, text: 'Fecha', value: 'date', class:'header-class'},
        {sortable:false, text: 'Tipo', value: 'type', class:'header-class'},
        {sortable:false, text: 'Descripción', value: 'description', class:'header-class'},
        {sortable:false, text: 'Movimientos', value: 'moving', class:'header-class'},
        {sortable:false, text: 'Importe', value: 'amount', class:'header-class'},

      ],
      tableData: [
        {
          id: 1111,
          date:'21/11/2021',
          type: 'Carga',
          description: 'Agregar fondos',
          moving: 700,
          amount: '$1200'
        },
                {
          id: 1111,
          date:'21/11/2021',
          type: 'Carga',
          description: 'Agregar fondos',
          moving: -1700,
          amount: '$1200'
        },
                {
          id: 1111,
          date:'21/11/2021',
          type: 'Carga',
          description: 'Agregar fondos',
          moving: 700,
          amount: '$1200'
        },
                {
          id: 1111,
          date:'21/11/2021',
          type: 'Carga',
          description: 'Agregar fondos',
          moving: -1700,
          amount: '$1200'
        },
                {
          id: 1111,
          date:'21/11/2021',
          type: 'Carga',
          description: 'Agregar fondos',
          moving: 700,
          amount: '$1200'
        },

      ],
      search:''
    }
  },
  methods: {
    chipColor(kindGame) {
      if(kindGame === 0) return this.color_error2
      else if (kindGame === 1 ) return this.color_exito2
      else if (kindGame === 2) return this.color_negro4
    },
    chipTextColor(kindGame) {
      if(kindGame === 0) return this.color_error1
      else if (kindGame === 1 ) return this.color_exito1
      else if (kindGame === 2) return this.color_negro2
    },
    chipText(kindGame) {
      if(kindGame === 0) return 'No validado'
      else if (kindGame === 1 ) return 'Validado'
      else if (kindGame === 2) return 'Visto'
    },
  }
}
</script>