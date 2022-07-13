<template>
  <v-container fluid class="ma-0 pa-0">
    <AccounHeaderTwo
      :title="title"
      :crumb="crumb"
      :end="end"
      :items="items"
    />
    <div>
        <TSButton
          class="pt-8 px-6 d-flex align-center justify-end"
          beforeIcon="mdi-plus"
          text="Nuevo mensaje"
          btnType="ts-btn-primary"
          @click="newMessage()"
        />
      <PlayerInqueriesTable/>
      <DialogModalBase
        :dialog="dialog"
        @hideModal="closeModal()"
      >
        <template slot="content">
          <div class="pa-12">
            <p class="headline-5 text-center">
              Nuevo mensaje
            </p>
            <v-select
              v-model="category"
              :items="[{text:'Soporte técnico', value: 1}, {text:'Denuncia de usuario', value: 2}, {text:'Apuesta', value: 3}]"
              label="Categoría"
            >
            </v-select>

            <div class="d-flex justify-space-around">
              <TSButton
                class="pt-8 px-6 d-flex align-center justify-end"
                text="Volver"
                btnType="ts-btn-light"
                @click="closeModal()"
              />
              <TSButton
                class="pt-8 px-6 d-flex align-center justify-end"
                text="Crear mensaje"
                btnType="ts-btn-primary"
                @click="initNewClaim()"
              />
            </div>
          </div>
        </template>
      </DialogModalBase>
    </div>

  </v-container>
</template>
<script>
import AccounHeaderTwo from '~/components/Header/AccountHeaderTwo.vue'
import PlayerInqueriesTable from '~/not_common/account/claims/views/PlayersInqueriesTable.vue'
import TSButton from '~/components/Buttons/TSButton.vue'
import DialogModalBase from '~/components/Modals/DialogModalBase.vue'
import EventBus from '~/services/eventbus'
import { newClaim } from '~/services/reclamos'
export default {
  layout: 'account',
  name: 'CustomerSupport',
  components: {
    AccounHeaderTwo,
    PlayerInqueriesTable,
    TSButton,
    DialogModalBase
  },
  data () {
    return{
      title: 'Reclamos',
      crumb: false,
      end: '',
      items: [],
      dialog: false,
      category: 1
    }
  },
  methods: {
    newMessage () {
      this.dialog = true
    },
    closeModal () {
      this.dialog = false
    },
    async initNewClaim() {
      try {
        this.$store.dispatch('changeLoader', true)
        let token = this.$store.getters.getToken
        let userId = this.$store.getters.getUserId
        const {status, data} = await newClaim(this.category, userId, token)
        if(status === 200) {
          console.log(data)
          EventBus.$emit('new-claim', data)
          this.$store.dispatch('addAlert', {visible: true, message:`Nuevo reclamo creado con el ID: ${data.reclamo.id}`, color:'#63CA85'})
          this.dialog = false
          EventBus.$off('new-claim')
        }
      } catch (error) {
        console.log(error)
        this.$store.dispatch('addAlert', {visible: true, message:`ERROR al intentar crear un nuevo reclamo. Intentelo nuevamente`, color:'#F44336'})
      } finally {
        this.$store.dispatch('changeLoader', false)
      }
    }
  }

}
</script>