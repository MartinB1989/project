<template>
  <div>
    <v-menu
      bottom
      :offset-y="true"
      rounded="lg"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
          class="pointer"
          size="36"
          v-bind="attrs"
          v-on="on"
        >
          <img :src="getCorrectImg($store.getters.getProfileImg)" alt="foto-de-perfil" class="jmb-avatar">
        </v-avatar>
      </template>
      <div class="globo">
        <div class="header-box d-flex bg-negro-4 pa-4">
          <v-avatar>
            <img :src="getCorrectImg($store.getters.getProfileImg)" alt="foto-de-perfil" class="jmb-avatar">
          </v-avatar>
          <div>
            <p class="f-body-1 my-0 mx-2">Hola <br> <span class="headline-6">Esteban</span></p>
          </div>
        </div>
        <div class="d-flex justify-start align-center pa-3">
          <v-icon class="" size="28" :color="color_negro1">mdi-account-circle</v-icon>
          <NuxtLink to="/account/profile/my-profile" class="text-decoration-none f-body-2 mb-0 mx-2 color-negro-1">Mi cuenta</NuxtLink>
        </div>
        <div class="d-flex justify-start align-center pa-3" @click="logout()">
          <v-icon class="sign-out-icon" size="24" :color="color_negro1">mdi-tray-arrow-up</v-icon>
          <p class="f-body-2 mb-0 mx-2 color-negro-1 pointer">Cerrar sesión</p>
        </div>
      </div>
    </v-menu>


  </div>
</template>
<script>
import variables from '~/mixins/variables'
import getCorrectImg from '~/mixins/getCorrectImg'
import {signOut} from '~/services/signIn'
  export default {
    mixins: [variables, getCorrectImg],
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    methods: {
      async logout() {
        try {
          const token = localStorage.getItem('authToken')
          console.log(token)
          const {status, data} = await signOut(token)
          if(status === 200) {
            console.log(data)
            this.$store.dispatch('signOut')
            localStorage.removeItem('authToken')
            this.$router.push({path:'/'})
          }
        } catch (error) {
          console.log(error)
        }

      }
    }
  }
</script>
<style lang="scss" scoped>
.globo {
  background-color: #ffffff;
  width: 336px ;
}
.sign-out-icon{
  transform: rotateZ(90deg);
}
.jmb-avatar {
  object-fit: cover;
  object-position: center;
}
</style>
