<template>
  <div>
    <WebTitle
      title="Aiuuuuda"
    />
    <web-container class="mt-8">
      <h1 class="headline-5 text-center mb-5 py-5">¿Cuál es tu consulta?</h1>
      <div class="m-auto d-flex justify-center">
        <div class="w-50">
          <v-text-field
            label=""
            placeholder="Buscar"
            rounded
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>    
        </div>     
      </div>

    </web-container>
    <div class="max-w mx-auto my-16">
      <v-row class="w-100 py-0 px-16 ma-0">
        <v-col cols="12" sm="6" lg="3" v-for="card in cardsData" :key="card.img" class="pa-0 h-100">
          <NuxtLink :to="card.link" class="text-decoration-none color-negro-2">
            <SimpleCard
              :title="card.title"
              :src="card.img"
              img-size="50px"
              title-class="headline-6 my-3 text-center"
              description-class="f-body-1 text-center color-negro-3"
              body-class="bg-white bxs-6px ma-2 pa-5 py-lg-12 br-8px"
              container-class="bg-transparent"
              imgClass="py-4"
            />
          </NuxtLink>
        </v-col>
      </v-row>  
        
    </div>

    <web-container class="mb-16">
      <h1 class="headline-5 mb-5 py-5">Artículos más populares</h1>
      <NuxtLink to="/help/article" class="text-decoration-none color-negro-2">
        <div v-for="ask in 10" :key="ask" class="article pa-6 d-flex justify-space-between align-center"> 
          <p class="f-body-1 ma-0">
            ¿Dignissim quisque proin odio amet amet maecenas sapien habitant?
          </p>
          <v-icon size="24" color="#3D445E">mdi-chevron-right</v-icon>
        </div>
      </NuxtLink>
    </web-container>

  </div>
</template>
<script>
import WebTitle from '~/components/Header/WebTitle.vue'
import SimpleCard from '~/components/Cards/SimpleCard.vue'
import WebContainer from '~/components/WebContainer.vue'
export default {
  layout:'landing-page',
  components: {
    WebTitle,
    SimpleCard,
    WebContainer   
  },
    data() {
      return {
      cardsData: [
        {img: '/img/user.svg', title: 'Mi cuenta', link:'/help/my-account'},
        {img: '/img/escudo-2.svg', title: 'Seguridad general', link:'/help/general-security'},
        {img: '/img/interrogacion-ciculo.svg', title: 'Apoyo técnico', link:'/help/technical-support' },
        {img: '/img/estrella.svg', title: 'Jugá en TrucoStars', link:'/help/play-in-truco-stars'}
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.article {
  border-bottom: 1px solid #CED0D6;
}
</style>