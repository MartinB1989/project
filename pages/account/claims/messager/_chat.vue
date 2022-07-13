<template>
  <v-container fluid class="ma-0 pa-0">
    <AccounHeaderTwo
      :title="title"
      :crumb="crumb"
      :end="end"
      :items="items"
    />
      <Messages />
  </v-container>
</template>
<script>
import AccounHeaderTwo from '~/components/Header/AccountHeaderTwo.vue'
import PlayerInqueriesTable from '~/not_common/account/claims/views/PlayersInqueriesTable.vue'
import Messages from '~/not_common/account/claims/views/Messages.vue'
import TSButton from '~/components/Buttons/TSButton.vue'
import DialogModalBase from '~/components/Modals/DialogModalBase.vue'
export default {
  layout: 'account',
  name: 'CustomerSupport',
  components: {
    AccounHeaderTwo,
    PlayerInqueriesTable,
    Messages,
    TSButton,
    DialogModalBase
  },
  data () {
    return{
      title: '',
      crumb: false,
      end: '',
      items: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.title = ''
      this.crumb = true,
      this.end = `Mensaje ID ${this.$route.params.chat}`,
      this.items = [
        {
          name: 'Reclamos',
          action: () => {
            this.$router.push({path:'/account/claims'})
          }
        }
      ]
    }
  }
}
</script>