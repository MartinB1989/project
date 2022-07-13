<template>
  <v-row class="ma-0 pa-0">
    <v-col cols="9">
      <BoxMessages
        :mensajes="mensajes"
        :userIdClaiming="userIdClaiming"
        :userImgClaiming="userImgClaiming"
      />
    </v-col>
    <v-col cols="3">
      <SideInfoCard
        :items="items"
      />
    </v-col>
  </v-row>
</template>
<script>
import SideInfoCard from '~/components/Cards/SideInfoCard.vue'
import BoxMessages from '@/not_common/account/claims/components/BoxMessages.vue'
import { getClaim } from '~/services/reclamos'
import getCorrectImg from '~/mixins/getCorrectImg'
export default {
  name: 'Messages',
  components: {
    SideInfoCard,
    BoxMessages
  },
  mixins: [getCorrectImg],
  data () {
    return {
      reclamo:[],
      mensajes:[],
      userIdClaiming: 0,
      userImgClaiming:'',
      items: [
        {
          title: 'Fecha del mensaje',
          text: '',
        },
        {
          title: 'ID del mensaje',
          text: ''
        },
        {
          title: 'Asusto',
          text: 'Sin asunto'
        },
        {
          title: 'Estado del mensaje',
          text: 'Visto'
        }
      ]
    }
  },
  created() {
    this.getAllMessages()
  },
  methods:{
    getDateFriendly(value) {
      let arrDate = value.split('T')
      return arrDate[0]
    },
    async getAllMessages() {
      try {
        if (this.newMessage != '' || this.thereIsFile){
          this.$store.dispatch('changeLoader', true)
          let idMessage = this.$route.params.chat
          let token = this.$store.getters.getToken
          const {status, data} = await getClaim(token, idMessage )
          if(status === 200) {
            console.log(data)
            this.mensajes = data.mensajes
            this.userIdClaiming = data.reclamo.usuario.id
            this.userImgClaiming = this.getCorrectImg(data.reclamo.usuario.avatar_img_perfil)
            this.items = [
              {
                title: 'Fecha del mensaje',
                text: this.getDateFriendly(data.reclamo.created_at),
              },
              {
                title: 'ID del reclamo',
                text: data.reclamo.id
              },
              {
                title: 'Asunto',
                text: data.reclamo.categoria.nombre
              },
              {
                title: 'Estado del mensaje',
                text: this.estadoDelMensaje(data.reclamo.id_estado)
              }
            ]
          }
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.$store.dispatch('changeLoader', false)
      }
    },
    estadoDelMensaje(value) {
      if (value == 2) return 'Visto'
      else if(value == 3) return 'Resuelto'
      else return 'No visto'
    }
  }
}
</script>