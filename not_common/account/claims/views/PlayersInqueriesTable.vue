<template>
  <v-container fluid class="pa-0 ">
    <div class="pa-5 bg-bg">
      <v-data-table
        :headers="headers"
        :items="tableData"
        :items-per-page="20"
        class="elevation-1"
        :footer-props="{
          'items-per-page-text': 'Cantidad de filas'
        }"
        :search="search"
        no-data-text="No hay datos"
      >
        <template v-slot:top>
          <TopTable
            title="Consultas de jugadores"
            v-model="search"
            :canDownload="false"
            :canPrint="false"
            @onFilter="showFilters()"
          >
            <template slot="filters">
              <div v-show="isFiltering" class="filters-box bxs-8px br-8px">
                <FiltersBox
                  :selectDateDisable="true"
                  @close="showFilters()"
                  @dateFilter="dateFilter"
                  :deleteButton="true"
                  @deleteFilters="deleteFilters()"
                >

                  <template slot="selects">
                    <v-col cols="4" class="py-0">
                      <v-select
                        v-model="byEstado"
                        label="Estado"
                        :items="[{text:'No visto', value: 1},{text:'Visto', value: 2},{text:'Resuelto', value: 3}]"
                        item-text="text"
                        item-value="value"
                        placeholder=""
                        persistent-placeholder
                      >

                      </v-select>
                    </v-col>
                    <v-col cols="4" class="py-0">
                      <v-select
                        v-model="byCategory"
                        label="Categoria"
                        :items="[{text:'Soporte técnico', value: 1}, {text:'Denuncia de usuario', value: 2}, {text:'Apuesta', value: 3}]"
                        item-text="text"
                        item-value="value"
                        placeholder=""
                        persistent-placeholder
                      >

                      </v-select>
                    </v-col>
                  </template>
                </FiltersBox>
              </div>
            </template>
          </TopTable>
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            :color="chipColor(item.status)"
            :text-color="chipTextColor(item.status)"
          >
          {{ chipText(item.status) }}
          </v-chip>
        </template>

        <template v-slot:[`item.action`] = "{ item }">
          <NuxtLink :to="`/account/claims/messager/${item.id_reclamo}`" class="text-decoration-none">
            <v-icon size="24" :color="item.status == 1 ? color_acento1 : color_negro2">mdi-comment-text</v-icon>
          </NuxtLink>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>
<script>
import variables from '@/mixins/variables.js'
import TopTable from '@/components/Tables/TopTable.vue'
import { getAllClaims } from '@/services/reclamos'
import FiltersBox from '~/components/Tables/FiltersBox.vue'
import getCorrectImg from '~/mixins/getCorrectImg'
import EventBus from '~/services/eventbus'
export default {
  name: 'PlayerInqueriesTable',
  components: {
    TopTable,
    FiltersBox
  },
  mixins: [variables, getCorrectImg],
  data() {
    return {
      isFiltering: false,
      byEstado:'',
      byCategory:'',
      byDate:'',
      inmutableList:[],
      headers: [
        {text: 'Fecha de creación', value: 'created_at', class:'header-class'},
        /* {text: 'Jugador', value: 'player', class:'header-class'}, */
        {text: 'ID', value: 'id_reclamo', class:'header-class'},
        {text: 'Estado', value: 'status', class:'header-class'},
        {text: 'Categoría', value: 'category', class:'header-class'},
        {text: 'Acción', value: 'action', class:'header-class'}
      ],
      tableData: [],
      search:''
    }
  },
  created() {
    this.getClaims()
  },
  mounted() {
    EventBus.$on('new-claim', data => {
      console.log('Nuevo reclamo:', data)
      this.inmutableList.unshift({
        created_at: this.getDateFriendly(data.reclamo.created_at),
        status: data.reclamo.id_estado,
        category: data.reclamo.categoria.nombre,
        id_category: data.reclamo.categoria.id,
        id_reclamo: data.reclamo.id
      })

      this.tableData = this.inmutableList
      console.log(this.tableData)
    })
  },
  methods: {
/*     rowClass(item) {
        console.log(item)
        const rowClass = 'tr-class'
        return rowClass;
    }, */
    chipColor(status) {
      if(status === 1) return this.color_error2
      else if (status === 2) return this.color_negro4
      else if (status === 3) return this.color_exito2
    },
    chipTextColor(status) {
      if(status === 1) return this.color_error1
      else if (status === 2) return this.color_negro2
      else if (status === 3 ) return this.color_exito1
    },
    chipText(status) {
      if(status === 1) return 'No visto'
      else if (status === 2) return 'Visto'
      else if (status === 3 ) return 'Resuelto'
    },
    getDateFriendly(value) {
      let arrDate = value.split('T')
      return arrDate[0]
    },
    dateFilter(value) {
      this.byDate = value
    },
    showFilters() {
      this.isFiltering = !this.isFiltering
    },
    correctImg(imagen) {
      if(imagen == '' || imagen == null) {
        return 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
      } else {
        return `http://api-dev.trucostars.bet${imagen}`
      }
    },
    async getClaims() {
      try {
        this.$store.dispatch('changeLoader', true)
        let token = this.$store.getters.getToken
        let userId = this.$store.getters.getUserId
        const {status, data} = await getAllClaims(token,userId)
        if(status === 200) {
          console.log(data)
          data.reclamos.forEach(e => {
            this.tableData.push({
              created_at: this.getDateFriendly(e.created_at),
              status: e.id_estado,
              category: e.categoria.nombre,
              id_category: e.categoria.id,
              id_reclamo: e.id
            },)
          });

          this.inmutableList = [...this.tableData]
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.$store.dispatch('changeLoader', false)
      }
    },
    filterByXLastDays(table, arr) {
      let newTable = []
      arr.forEach(element => {
        let result = this.filterByDate(table, element)
        newTable = newTable.concat(result)
      })
      return newTable
    },
    filterByDate(data, valueToCompare) {
      if(valueToCompare !== '' && valueToCompare !== null) {
        let newData = data.filter(el => {
          return (this.getDateFriendly(el.created_at) === valueToCompare)
        })
        return newData
      }
      return data
    },
    filterByEstado(data, valueToCompare) {
      if(valueToCompare !== '' && valueToCompare !== null) {
        let newData = data.filter(el => {
          if(valueToCompare === 0 && el.status === null) {
            return el.status === null
          } else {
            return el.status === valueToCompare
          }
        })

        return newData
      }
      return data
    },
    filterByCategory(data, valueToCompare) {
      if(valueToCompare !== '') {
        let newData = data.filter(el => {
          return el.id_category === valueToCompare
        })
        return newData
      }
      return data
    },
    applyFilter(date, statusValidation, status) {
      let newDataTable = this.inmutableList
      if(date === 7 || date === 14 || date === 30) {
        let table = this.getLastXDate(date)
        newDataTable = this.filterByXLastDays(newDataTable, table)
      } else {
        newDataTable = this.filterByDate(newDataTable, date)
      }
      newDataTable = this.filterByEstado(newDataTable, status)
      newDataTable = this.filterByCategory(newDataTable, statusValidation)

      return newDataTable
    },
    getLastXDate(n) {
      let days = []
      let today = new Date()
      let oneDayInMils = 86400000
      today = today.getTime()
      for(let i = 0; i < n; i++) {
        let newDay = new Date(today)
        newDay = newDay.toLocaleDateString().split('/')
        let mes = Number(newDay[1]) < 10 ? `0${newDay[1]}` : `${newDay[1]}`
        let dia = Number(newDay[0]) < 10 ? `0${newDay[0]}` : `${newDay[0]}`
        days.push(`${newDay[2]}-${mes}-${dia}`)
        today = today - oneDayInMils
      }
      return days
    },
    deleteFilters() {
      this.byDate = '',
      this.byEstado = ''
      this.byCategory = ''
      this.tableData = this.inmutableList
    }
  },
  watch: {
    byDate: function() {
      if(this.byDate !== '' && this.byDate !== null) {
        this.tableData = this.applyFilter(this.byDate, this.byCategory, this.byEstado, 1)
      }
    },
    byCategory: function() {
      if(this.byCategory !== '') {
        this.tableData = this.applyFilter(this.byDate, this.byCategory, this.byEstado, 1)
      }
    },
    byEstado: function() {
      if(this.byEstado !== '' && this.byEstado !== null) {
        this.tableData = this.applyFilter(this.byDate, this.byCategory, this.byEstado, 1)
      }
    }
  }
}
</script>