<template>
  <v-container fluid>
    <h5 class="headline-6 color-negro-2 mb-6">Datos de partida</h5>
      <v-row class="ma-0 pa-0">
        <v-col cols="12" md="5">
          <ShortInfoCard
            title="Partidas rápidas"
            :shadow="true"
            :won="quickWon"
            :lost="quickLost"
            :effectiveness="quickEff"
          />
        </v-col>
        <v-col cols="12" md="5">
          <ShortInfoCard
            title="Torneos rápidos"
            :shadow="false"
            img="/img/torneo-rapido.svg"
          />
        </v-col>
        <v-col cols="12" md="2" @click="$emit('gain')" class="pointer">
          <ProfitsCard
            title="Ganancias"
            text="$25.000"
            :shadow="false"
          />
        </v-col>
      </v-row>
      <v-row class="ma-0 pa-0">
        <slot name="performance"></slot>
<!--         <Performance
          :items="performance"
        /> -->
      </v-row>
  </v-container>
</template>
<script>
import ShortInfoCard from './ShortInfoCard.vue'
import ProfitsCard from '~/components/Cards/ProfitsCard.vue'

export default {
  components: {
    ShortInfoCard,
    ProfitsCard
  },
  props: {
    quickWon:{
      type: [Number, String],
      default: 0
    },
    quickLost:{
      type: [Number, String],
      default: 0
    },
    quickEff:{
      type: [Number, String],
      default: 0
    },
    quickPlay:{
      type: [Number, String],
      default: 0
    },
  }
}
</script>
