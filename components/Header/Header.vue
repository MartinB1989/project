<template>
  <v-container fluid class="position-relative header-container bg-negro-1 py-0 bxs-8px">
    <v-row class="w-100 ma-0 pa-0">
      <v-col cols="12" lg="2" class="d-flex justify-center mb-5 mb-lg-0 justify-content-lg-start align-center">
        <NuxtLink to="/">
          <LogoHeader/>
        </NuxtLink>
      </v-col>

      <v-col cols="12" lg="7" class="d-none d-lg-block px-0">
        <!-- <div class="menu-header d-flex justify-center"> -->
          <ul v-if="userType === 'player'" class="list-unstyled px-2 ma-0 h-100 d-flex justify-center align-center">
            <li class="d-block mx-4" v-for="item in items" :key="item.name">
              <NuxtLink :to="item.path" :class="['f-body-2', 'my-nuxt-link', 'color-bg']" :exact="item.path == '/'">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        <!-- </div> -->

      </v-col>

      <v-col v-if="!isLogged" cols="12" lg="3" class="px-0">
        <div  class="d-flex justify-center">
          <div class="register mx-4">
            <TSButton
              text="Registrarse"
              btnType="ts-btn-primary"
              @click="showModal('register')"
              boxClass=""
            />
          </div>
          <div class="login">
            <TSButton
              text="Iniciar sesión"
              btnType="ts-btn-dark"
              className="btn-iniciar-sesion"
              @click="showModal('sign-in')"
            />
          </div>
        </div>
      </v-col>
      <v-col v-else cols="12" lg="3" class="px-0">
        <div class="d-flex justify-end align-center">
          <NotificationsButtonMenu/>
          <AccountMenu/>
        </div>
      </v-col>
    </v-row>
    <Login
      :dialog="login"
      @hideModal="() => login = false"
      @endRegister="() => login = false"
      @signIn="() => login = false"
      @finish="() => login = false"
      :show="show"
    />
  </v-container>
</template>
<script>
import LogoHeader from '@/components/Img/LogoHeader'
import TSButton from '../Buttons/TSButton.vue'
import ModalBase from '../Modals/ModalBase.vue'
import Login from './Login/Login.vue'
import AccountMenu from '@/components/Menu/AccountMenu.vue'
import NotificationsButtonMenu from '@/components/Menu/NotificationsButtonMenu.vue'
export default {
  name: 'Header',
  components: {
    LogoHeader,
    TSButton,
    ModalBase,
    Login,
    AccountMenu,
    NotificationsButtonMenu
  },
  data()
    {
    return {
      items: [
        {name: 'Inicio', path:'/'},
        {name: 'Partidas', path:'/games'},
        {name: 'Torneos', path:'/tournament'},
        {name: 'Cómo jugar', path:'/how-to-play'},
        {name: 'Ranking', path:'/ranking'},
        {name: 'Ayuda', path:'/help'},
        {name: 'Contacto', path:'/contact'},
      ],
      userType: '',
      show: '',
      login: false,
      isLogged: true,
    }
  },
  created() {
    this.userType = this.$store.getters.getUserType
    this.isLogged = !!localStorage.getItem('authToken')
  },
  methods: {
    showModal(value) {
      this.show = value
      this.login = true
    },
  }
}
</script>
<style lang="scss" scoped>
  // .btn-iniciar-sesion {
  //   background-color: $negro1;
  // }
  .header-container {
    z-index: 99;
  }
  .my-nuxt-link {
    text-decoration: none;
  }
/*   .nuxt-link-exact-active {
    color: $acento1;
  }  */
  .nuxt-link-active {
    color: $acento1;
  }
  .modal-content {
    border-radius: 0 0 8px 8px;
  }
  .menu-header {
    max-height: 800px;
  }
</style>
