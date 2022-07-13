<template>
  <v-container fluid class="ma-0 pa-0">
    <h5 class="headline-6 bg-white w-100 color-negro-2 mb-6 pt-10 pb-6 px-8">Resumen</h5>
      <div class="max-w mx-auto">
        <v-row class="ma-0 pa-0">
          <v-col cols="12">
            <GameData
              quickWon="won"
              quickLost="lost"
              quickEff="eff"
              quickPlay="play"
            >
              <template slot="performance">
                <keep-alive>
                  <Performance
                    :items="[
                      {title: 'Partidas jugadas', text: '14'},
                      {title: 'Partidas ganadas', text: '10'},
                      {title: 'Partidas perdidas', text: '4'},
                      {title: 'Efectividad', text: '70%'}
                    ]"
                  />
                </keep-alive>

              </template>
            </GameData>
          </v-col>
          <!-- <v-col cols="12" md="5">
            <ShortInfoCard
              title="Partidas rápidas"
              :shadow="true"
            />
          </v-col>
          <v-col cols="12" md="5">
            <ShortInfoCard
              title="Partidas rápidas"
              :shadow="false"
            />
          </v-col>
          <v-col cols="12" md="2" class="pointer">
              <ProfitsCard
                @click="gainPage()"
                title="Ganancias"
                text="$25.000"
                :shadow="false"
              />
          </v-col> -->
        </v-row>
        <!-- <v-row class="ma-0 pa-0">
          <Performance/>
        </v-row> -->
        <v-row class="w-100 ma-0 pa-0">
          <v-col cols="6" class="bg-white rounded-lg bxs-4px pa-0">
            <div class="box-title pa-4">
              <p class="f-subtitle-1 ma-0">Últimas actividades</p>
            </div>
            <div v-for="n in 7" :key="n" class="px-2 my-2">
              <LastActivity/>
            </div>

          </v-col>

          <v-col cols="6" class="rounded-lg bxs-4px pa-0" style="background-color:#F3F3F3">
            <div class="pa-4">
              <p class="f-subtitle-1 ma-0">Próximos torneos</p>
            </div>
            <div v-for="n in 7" :key="n" class="px-2 my-2">
              <NextTournament
                :class="[{'bg-white bxs-4px': n == 1}, , 'mx-4', 'pa-4', 'rounded-lg']"
              />
            </div>

          </v-col>
        </v-row>
      </div>

  </v-container>
</template>
<script>
import ShortInfoCard from '~/not_common/account/resume/ShortInfoCard.vue'
import GameData from '~/not_common/account/resume/GameData.vue'
import Performance from '~/not_common/account/resume/Performance.vue'
import LastActivity from '~/not_common/account/resume/LastActivity.vue'
import NextTournament from '~/not_common/account/resume/NextTournament.vue'
import ProfitsCard from '@/components/Cards/ProfitsCard.vue'
export default {
  layout: 'account',
  components: {
    ShortInfoCard,
    ProfitsCard,
    Performance,
    GameData,
    LastActivity,
    NextTournament
  },
  data() {
    return {
      performance:[],
    }
  },
  methods: {
    gainPage() {
      this.$router.push({path: '/account/resume/gain'})
    }
  }
}
</script>
<style lang="scss" scoped>
.box-title {
  border-bottom: 1px solid #EDEEEF;
}
</style>
