<template>
  <v-container fluid class="container-box py-5 px-4">
    <v-icon :color="color_negro4" class="close-icon" @click="$emit('close')">mdi-close</v-icon>
    <v-row>
      <v-col cols="12" class="d-flex align-center">
        <p class="f-body-2 ma-0">FILTROS</p>
        <v-chip v-if="deleteButton" class="pointer mx-4">
          <span  class="f-caption" @click="deleteF()">
            Borrar
          </span>
        </v-chip>
        <slot name="chips"></slot>
      </v-col>
      <v-col :cols="dateColsSize" class="py-0" v-if="selectDateDisable">
        <v-select
          v-show="dateSelect != 'personalizada'"
          v-model="dateSelect"
          :items="itemsDate"
          label="Fecha"
          placeholder=""
          persistent-placeholder
        ></v-select>
        <v-menu
          v-if="dateSelect == 'personalizada'"
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Fecha"
              prepend-icon="mdi-calendar"
              readonly
              placeholder=""
              persistent-placeholder
              v-bind="attrs"
              v-on="on"
              :color="color_negro2"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
            locale="es"
            :color="color_acento1"
          >
<!--             <v-spacer></v-spacer>
            <v-btn
              text
              :color="color_acento1"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              :color="color_acento1"
              @click="$refs.menu.save(date)"
            >
              OK
            </v-btn> -->
          </v-date-picker>
        </v-menu>
      </v-col>
      <slot name="selects">

      </slot>
    </v-row>
  </v-container>
</template>
<script>
import variables from '@/mixins/variables'
export default {
  mixins: [variables],
  props: {
    selectDateDisable: {
      type: Boolean,
      default: false
    },
    dateColsSize: {
      type: String,
      default: '4'
    },
    deleteButton: {
      type: Boolean,
      default: false
    },
    itemsDate: {
      type: [Array],
      default: function(){
        return [
          {text:'Últimos 7 días', value: 7},
          {text:'Últimos 14 días', value: 14},
          {text:'Últimos 30 días', value: 30},
          {text:'Fecha personalizada', value: 'personalizada'},
        ]
      }
    }
  },
  data() {
    return {
      dateSelect: '',
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }
  },
  mounted() {
    this.$on('close', () => {
      console.log('Se cerro')
      this.dateSelect = ''
    })
  },
  methods:{
    deleteF() {
      this.dateSelect = ''
      this.$emit('deleteFilters')
      console.log('Si, esta funcionando hasta aquí')
    }
  },
  watch: {
    dateSelect: function() {
      if(this.dateSelect != 'personalizada') {
        this.$emit('dateFilter', this.dateSelect)
      }
      return
    },
    date: function() {
      this.$emit('dateFilter', this.date)
      this.$refs.menu.save(this.date)
    }
  }
}
</script>
<style lang="scss" scoped>
.container-box {
  position: relative;
}
.close-icon {
  position: absolute;
  top:5%;
  right: 1%;
}
::v-deep .v-date-picker-header__value button{
  font-size:1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: .025rem;
  text-transform: capitalize;
}
</style>