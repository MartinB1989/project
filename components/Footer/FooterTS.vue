<template>
  <v-container fluid class="pa-0">
    <footer class="footer-container bg-negro-1 d-flex align-center justify-center ">
      <v-row class="h-100 w-100 pa-0 ma-0">
        <v-col cols="12" md="6" class="h-100 d-flex align-center justify-center justify-md-start">
          <div class="h-50 px-4">
            <LogoHeader/>
          </div>
        </v-col>
        <v-col class="h-100 d-flex align-center justify-center justify-md-start">
          <v-row class="h-50 w-100 pa-0 ma-0">
            <v-col cols="12" md="4" class="h-100 d-flex flex-column align-center align-md-start justify-space-between ">
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/">Descargar</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/games">Partidas</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/tournament">Torneos</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/how-to-play">Cómo jugar</NuxtLink>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center align-md-start justify-space-between">
              <NuxtLink class="d-block color-acento-1 text-decoration-none f-body-2" to="/">Más información</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/about">¿Quiénes Somos?</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/help">Ayuda</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/contact">Contacto</NuxtLink>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-center align-md-start justify-space-between">
              <NuxtLink class="d-block color-acento-1 text-decoration-none f-body-2" to="/">Información legal</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/terms-and-condition">Términos y condiciones</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/privacy-policies">Política de privacidad</NuxtLink>
              <NuxtLink class="d-block color-bg text-decoration-none f-body-2" to="/responsible-gaming">Juego responsable</NuxtLink>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </footer>
    <v-row class="w-100 ma-0 pa-2">
      <v-col cols="12" md="9" class="d-flex justify-center justify-md-start align-center">
        <p class="f-subtitle-2 ma-0">Todos los derechos reservados 2021</p>
      </v-col>
      <v-col cols="12" md="3" class="d-flex justify-center justify-md-end">
        <Linkedin :className="['d-inline', 'mx-2', 'px-2']" color="#CED0D6"/>
        <Facebook :className="['d-inline', 'mx-2', 'px-2']" color="#CED0D6"/>
        <Twitter :className="['d-inline', 'mx-2', 'px-2']" color="#CED0D6"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LogoHeader from '@/components/Img/LogoHeader.vue'
import Linkedin from '../Img/Linkedin.vue'
import Facebook from '../Img/Facebook.vue'
import Twitter from '../Img/Twitter.vue'
export default {
  name:'FooterTS',
  components: {
    LogoHeader,
    Linkedin,
    Twitter,
    Facebook
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 960px){
  .footer-container {
    height: 27.6rem ;
  }
}
</style>