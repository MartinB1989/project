<template>
  <div>
    <web-title
      title="Notificaciones"
    />
    <web-container class="my-12">

      <div class="contact-container mx-auto my-8 bg-white bxs-8px br-8px">
        <div v-for="n in 12" :key="n" class="py-2 px-0">
          <v-row class="ma-0 pa-0">
            <v-col cols="2" class="ma-0 pa-0 d-flex justify-center align-center">
              <v-avatar size="36">
                <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png" alt="">
              </v-avatar>           
            </v-col>
            <v-col cols="6" class="ma-0 pa-0 d-flex flex-column justify-center align-start">
              <p class="f-body-2 ma-0">Vestibulum consequat dictum ac</p>
              <p class="f-caption color-negro-3 ma-0">Purus hac congue in cras ipsum</p>
            </v-col>
            <v-col cols="3" class="ma-0 pa-0 d-flex justify-center align-center">
              <span class="f-subtitle-1">15/11/2021</span>
            </v-col>
            <v-col cols="1" class="ma-0 pa-0 d-flex justify-center align-center">
                <span class="dot color-acento-1 ma-0" v-if="n%3==0">•</span>
            </v-col>
          </v-row>
        </div>           
      </div>
    </web-container>
  </div>
</template>
<script>
import TSButton from '~/components/Buttons/TSButton.vue'
import WebTitle from '~/components/Header/WebTitle.vue'
import DialogModalBase from '~/components/Modals/DialogModalBase.vue'
import WebContainer from '~/components/WebContainer.vue'
export default {
  layout:'landing-page',
  components: { 
    WebTitle, 
    WebContainer,
    TSButton,
    DialogModalBase 
  },
  data () {
    return {
      items: ['Item-1', 'Item-2', 'Item-3'],
      dialog: false,
      vof: true
    }
  },
  methods: {
    cerrar() {
      this.dialog = false
      setTimeout(() => {
        this.vof = !this.vof
      },1000)
      
    }
  }

}
</script>
<style lang="scss" scoped>
.contact-container {
  width:100%;
  max-width: 736px;
}
.dot {
  font-size:3rem;
}
</style>