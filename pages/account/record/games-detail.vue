<template>
  <v-container fluid>
    <v-container class="pt-8 ma-0">
      <simple-breadcrumb
        link="/account/record/"
        back="Historial"
        actual="Detalle de partida 12456"
      >
        <template slot="add">
          <nuxt-link to="/account/record/games" class="text-decoration-none f-subtitle-1 color-negro-3">Partidas</nuxt-link>
          <span class="f-subtitle-1 color-negro-3 mx-6">></span>
        </template>
      </simple-breadcrumb>
    </v-container>  
    <div class="mx-auto max-w">
      <v-row class="w-100 pa-0 ma-0">
        <v-col cols="9">
          <v-row>
            <v-col cols="6">
              <ProfitsCard
                title="Premio Total"
                text="$ 526.970"
                bg-color="#FFFFFF"
                :arrow="false"
              />
            </v-col>
            <v-col cols="6">
              <ProfitsCard
                title="Premio de mesa"
                text="$ 526.970"
                bg-color="#FFFFFF"
                :arrow="false"
              />
            </v-col>
            <v-col cols="12">
              <GameDetailTable/>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <SideInfoCard
            :items="items"
          >
          </SideInfoCard>
        </v-col>
      </v-row>
    </div>  
      


  </v-container>
</template>
<script>
import ProfitsCard from '@/components/Cards/ProfitsCard.vue'
import SideInfoCard from '~/components/Cards/SideInfoCard.vue'
import GameDetailTable from '~/not_common/account/record/GameDetailTable.vue'
import SimpleBreadcrumb from '~/components/Breadcrumb/SimpleBreadcrumb.vue'
import TSButton from '~/components/Buttons/TSButton.vue'
export default {
  layout: 'account',
  components:{
    ProfitsCard,
    SideInfoCard,
    GameDetailTable,
    SimpleBreadcrumb,
    TSButton
  },
  data() {
    return {
      items: [
        {title:'Fecha de torneo', text:'21/12/2022'},
        {title:'Hora de torneo', text:'23:00 a 24:00'},
        {title:'ID de torneo', text:'12345'},
        {title:'Tipo', text:'Torneo rápida'},
        {title:'Estilo de partida', text:'1 vs 1'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.max-w {
  max-width: 1130px;
}
</style>