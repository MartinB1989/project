<template>
      <v-container class="pa-0 ma-0">
        <account-header-two
          title="Histotial"
        />
        <div class="w-100 bg-white">
          <v-tabs
          v-model="tab"
            background-color="transparent"
            :color="color_acento1"
            active-class="tab-active"
          >
            <v-tab
              v-for="(item, index) in items"
              :key="index"
              :to="item.link"
            >
              {{ item.name }}
            </v-tab>            
          </v-tabs>       
        </div>   

        <game-table
          @action="() => {$router.push({path:'/account/record/games-detail'})}"
        />       
      </v-container>
</template>
<script>
import AccountHeaderTwo from '~/components/Header/AccountHeaderTwo.vue'
import variables from '~/mixins/variables'
import GameTable from '~/not_common/account/record/GameTable.vue'
export default {
  layout: 'account',
  mixins:[variables],
  components: { AccountHeaderTwo, GameTable },
  data () {
    return {
      items: [
        {name:'Partidas', link: '/account/record/games'},
        {name:'Torneos rápidos', link: '/account/record/quick-tournament'},
        {name:'Torneos semanales', link: '/account/record/week-tournament'},
        {name:'Torneos rápido flash', link: '/account/record/flash-tournament'},
        {name:'Torneos clase a', link: '/account/record/clase-a-tournament'}
      ]
    }
  }  
}
</script>
<style lang="scss" scoped>
  ::v-deep .v-tab {
    color: #9B9EAB !important;
    font-weight: 600;
    font-size: 14px;
    text-transform: capitalize;
  }
  .tab-active {
    color: $negro1 !important;
  }
</style>