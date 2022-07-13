<template>
  <div>
    <WebTitle
      title="Torneo rápido"
    />
    <div class="main mx-auto my-16">
      <div class="card-container w-70 mx-auto">
        <div>
          <nuxt-link to="/tournament/tournament" class="text-decoration-none f-subtitle-1 color-negro-3">Torneos</nuxt-link>
          <span class="f-subtitle-1 color-negro-3 mx-6">></span>
          <span class="f-subtitle-1 color-negro-2">Torneo rápido</span>
        </div>
        <h5 class="headline-5 mt-16 mb-12">Modalidades</h5>
        <v-row class="w-100 pa-0 ma-0 bg-transparent d-flex justify-center">
          
          <v-col v-for="card in cardsData" :key="card.img" cols="12" md="6" class="pa-0">
            <SimpleCard
              :title="card.title"
              :src="card.img"
              img-size="25%"
              title-class="headline-5 my-5 text-center"
              description-class="f-body-1 text-center color-negro-3 px-4"
              body-class="bg-white bxs-6px ma-2 pa-5 br-8px"
              containerClass="bg-transparent"
              imgClass="ma-4"
            />
          </v-col>
        </v-row>      
      </div>
    </div>
    <div class="w-100 d-flex flex-column align-center justify-center my-16 bg-negro-2 pa-16">
        <div class="img-estructura">
        
        <h5 class="headline-5 text-white mb-12">Estructura de torneo</h5>
        </div>        
        <img src="/img/estructura-de-un-torneo.svg" alt="imagen" class="img-estructura mx-auto">
    </div>
          <div style="height:50px"></div>
    <web-container>
      <v-row>
        <v-col cols="12" md="6">
          <DarkCard 
            title="Premios"
          />
        </v-col>
        <v-col cols="12" md="6">
          <DarkCard 
            title="Inscripciones"
          />
        </v-col>
        <v-col cols="12" md="6">
          <DarkCard 
            title="Premios"
          />
        </v-col>
        <v-col cols="12" md="6">
          <DarkCard 
            title="Inscripciones"
          />
        </v-col>
      </v-row>
    </web-container>
    
    <div style="height:50px"></div>
  </div>
</template>
<script>
import WebTitle from '../../components/Header/WebTitle.vue'
import SimpleCard from '@/components/Cards/SimpleCard.vue'
import DarkCard from '~/components/Cards/DarkCard.vue'
import WebContainer from '~/components/WebContainer.vue'
export default {
  layout: 'landing-page',
  components: {
    WebTitle,
    SimpleCard,
    DarkCard,
    WebContainer
  },
  data() {
    return {
      cardsData: [
        {img: '/img/oro-uno-de.svg', title: '1 versus 1', description:''},
        {img: '/img/oro-dos-de.svg', title: '2 versus 2', description:''}
      ]
    }
  }
}
</script>
<style scoped>

@media screen and (min-width:280px) {
  .main {
    max-width: 1360px;
  }
  .img-estructura {
    width: 100%;
    max-width: 700px;
  }
}

</style>