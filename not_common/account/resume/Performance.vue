<template>
  <v-container fluid>
    <v-row class="bg-white br-8px pa-0 ma-0">
      <v-col cols="12" class="header pa-0">
        <TopTable
          title="Performance"
          colsSearch="2"
          :canSearch="false"
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
                :itemsDate="[
                  {text:'Últimos 7 días', value: 7},
                  {text:'Últimos 14 días', value: 14},
                  {text:'Últimos 30 días', value: 30},
                ]"
                :deleteButton="true"
                @deleteFilters="dateFilter(7)"
              >
              </FiltersBox>
            </div>
          </template>
          <template #chips>
            <v-col cols="8" md="6">
              <v-chip
                class="ma-2"
                :color="color_acento2"
                :text-color="color_acento1"
              >
                Partida rápida
              </v-chip>
            </v-col>
          </template>
        </TopTable>
      </v-col>
      <v-col cols="12" sm="9">
        <div id="chart">
          <div class="d-flex justify-end align-center">
            <div class="div-gris mx-2"></div>
            <span class="f-caption">{{ last }}</span>
            <div class="div-amarillo mx-2"></div>
            <span class="f-caption">{{ actual }}</span>
          </div>
          <apexchart
            type="line"
            height="350"
            :options="chartOptions"
            :series="series"
            ref="chart"
          >
          </apexchart>
        </div>
      </v-col>
      <v-col cols="12" sm="3">
        <div v-for="item in items" :key="item.title" class="general-card-data py-4 bg-bg d-flex flex-column justify-center align-center">
          <p class="f-subtitle-2 text-center ma-0">{{ item.title }}</p>
          <p class="headline-5 text-bold ma-0 text-center">{{ item.text }}{{ item.percent ? '%' : ''}}</p>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
import FiltersBox from '~/components/Tables/FiltersBox.vue'
import TopTable from '@/components/Tables/TopTable.vue'
import variables from '~/mixins/variables'
import moment from 'moment'
import EventBus from '~/services/eventbus'
export default {
  name:'Performance',
  mixins: [variables],
  components: {
    TopTable,
    FiltersBox
  },
  props:{
    items: {
      type: Array,
      default: () => {}
/*  EJEMPLO
      items: [
        {title: 'Partidas jugadas', text: '14'},
        {title: 'Partidas ganadas', text: '10'},
        {title: 'Partidas perdidas', text: '4'},
        {title: 'Efectividad', text: '70%'}
      ] */
    },
    dataGames: {
      type:[Array,Object],
      default: () => {}
    }
  },
  data () {
    return {
      isFiltering: false,
      dataForGrafic:[],
      today: moment(),
      lastDays: 7,
      fakeData: [],
      last:'',
      actual:'',
      months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
      series: [
        {
          name: "periodo anterior",
          // Formato: [día, cantida de partidas]
          data: [1, 4, 9, 16, 25, 36, 48]
        },
        {
          name: "periodo actual",
          data: [1, 8, 27, 64, 125, 216]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false
          }
        },
        colors: ['#DFE0EB','#EFAD2D' ],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth'
        },
/*         title: {
          text: '',
          align: 'left',
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#ffffff'
          },
        }, */
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
/*             markers: {
          size: 1
        }, */
        xaxis: {
          type: 'category'
        },
        yaxis: {
          min: 0,
          max: 300,
          opposite:true,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
          markers:{
            width: 16,
            height:3,
            radius: 0
          }
        }
      },
    }
  },
  // TODO: Replique todo lo que esta en performance en admin, ver cuando se haga el gráfico en admin
  // mounted() {
  //   EventBus.$on('dataForPerformance', (dataGraf) => {
  //     let that = this
  //     console.log(dataGraf,  dataGraf.length)
  //     console.log(this.series)
  //     this.chartOptions = {
  //       yaxis: {
  //         min:0,
  //         max:dataGraf.length,
  //         opposite:true
  //       }
  //     }
  //     const {actualTitle, lastTitle} = this.setSeriesName(moment(), this.lastDays)
  //     /* let fakeData = [{x:'29' , y:2 },{x:'30' , y:4 },{x:'1' , y:8 },{x:'2' , y:4 },{x:'3' , y: 9},{x:'4' , y:15 },{x: '5', y:5 },] */
  //     this.actual = actualTitle
  //     this.last = lastTitle
  //     let periodoActual = this.counterGamePerDay(dataGraf, this.lastDays).reverse()
  //     let periodoAnterior = this.fakeData.reverse()
  //     this.series = [
  //       {
  //         data: periodoAnterior
  //       },
  //       {
  //         data: periodoActual
  //       }
  //     ]
  //   })
  // },
  methods: {
    showFilters() {
      this.isFiltering = !this.isFiltering
    },
    dateFilter(value){
      if(value == '') {
        return
      } else {
        EventBus.$emit('generateNewData', value)
        this.lastDays = value
      }
    },
    setSeriesName(day = moment(), until = 7){
      // Devuelve el nombre de los titulos de las fechas graficadas
      let numberDay = day.date(),
      untilDay = day.subtract(until,'days').date(),
      monthDay = this.months[day.month()],
      condicionalAux = this.months == 0 ? 11 : day.month()-1, // En caso que day.month() => 0
      lastMonthDay = this.months[condicionalAux], firstTime, secondTime
      if(monthDay == lastMonthDay) {
        firstTime = `${untilDay} a ${numberDay} ${monthDay}`,
        secondTime = `${untilDay} a ${numberDay} ${lastMonthDay}`
      } else {
        let aux = condicionalAux == 0 ? 11 : (condicionalAux - 1)
        let lastLastMonthDay = this.months[aux]
        firstTime = `${untilDay} ${lastMonthDay} a ${numberDay} ${monthDay}`,
        secondTime = `${untilDay} ${lastLastMonthDay} a ${numberDay} ${lastMonthDay}`
      }

      return {
        actualTitle: firstTime,
        lastTitle: secondTime
      }
    },
    rangeDate(start = moment(), n = 7) {
      let dateArray = [{x:`${start.date()}`, y:0}]
      for(let i = 1; i < n; i++) {
        dateArray.push({x: `${start.subtract(1, 'days').date()}`, y:0})
       /*  console.log(start.subtract(, 'days')) */
      }
      console.log(dateArray)
      return dateArray
    },
    counterGamePerDay(data, nDaysBack = 7, date = moment()) {
      const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let range = this.rangeDate(date, nDaysBack)
      this.fakeData = this.rangeDate(moment(), nDaysBack)
      data.forEach(e => {
        range.forEach( (el, i) => {
          if(`${moment(e.created_at).date()}` == el.x) {
            el.y += 1
          }
          /* console.log(moment(e.created_at).date(),moment(e.created_at).date()) */
        })
        this.fakeData.forEach( (el, i) => {
          /* if(`${moment(e.created_at).date()}` == el.x) { */
            el.y += getRandomInt(0,2)
          /* } */
          /* console.log(moment(e.created_at).date(),moment(e.created_at).date()) */
        })
      });
      return range
    },
    deleteFilters() {
      EventBus.$emit('resetFilters')
    }
  },

}
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #EDEEEF;
}
.general-card-data {
  border: 1px solid #DADADA;
  transform: translateY(5px);
}
.div-amarillo{
  width: 16px;
  height: 3px;
  background-color:#EFAD2D;
}
.div-gris{
  width: 16px;
  height: 3px;
  background-color:#DFE0EB;
}
</style>