<template>
  <div>
      <WebTitle
        title="Torneos"
      />
    <div class="main mx-auto my-16">
      <div class="card-container w-70 mx-auto">
        <h5 class="headline-5 mt-16 mb-0 mb-md-16">Tipos de tornes</h5>
        <v-row class="w-100 pa-0 ma-0 bg-transparent d-flex justify-center">
          
          <v-col v-for="card in cardsData" :key="card.img" cols="12" md="4" class="pa-0 mt-16">
            <SimpleCard
              :title="card.title"
              :src="card.img"
              :img-size="percentImg"
              title-class="headline-5 mb-0 mt-16 pt-16 text-center"
              description-class="f-body-1 text-center color-negro-3 px-4"
              body-class="bg-white bxs-6px ma-2 pa-5 br-8px box-img"
              containerClass="bg-transparent container-card"
              imgClass="imagen-torneos ma-4"
              :btn="true"
              btnText="Ver más"
              :to="card.to"
              :link="true"
            />
          </v-col>
        </v-row>      
      </div>  
      <div style="height:50px"></div>
      <div class="w-70 mx-auto my-16">
        <h5 class="headline-5 mt-16 mb-0 mb-md-16">Características generales</h5>
        <v-row>
          <v-col cols="6">
            <DarkCard 
              title="Premios"
            />
          </v-col>
          <v-col cols="6">
            <DarkCard 
              title="Inscripciones"
            />
          </v-col>
        </v-row>
      </div>
    </div>    
  </div>
</template>
<script>
import WebTitle from '../../components/Header/WebTitle.vue'
import SimpleCard from '@/components/Cards/SimpleCard.vue'
import DarkCard from '@/components/Cards/DarkCard.vue'

export default {
  layout:'landing-page',
  components: {
    WebTitle,
    SimpleCard,
    DarkCard
  },
  data() {
    return {
      cardsData: [
        {img: '/img/torneo-rapido.svg', title: '', description:'',  to:'/tournament/quick'},
        {img: '/img/torneo-semanal.svg', title: '', description:'', to:'/tournament/weekly'},
        {img: '/img/torneo-clase-a.svg', title: '', description:'', to:'/tournament/clase-a'},
      ],
      percentImg: '70%'
    }
  },
  mounted () {
/* 
    if(screen.width > 600) {
      this.percentImg = '40%'
    }
    if(screen.width > 960) {
      this.percentImg = '90%'
    }
    if(screen.width > 1264) {
      this.percentImg = '70%'
    } */

  }
}
</script>
<style scoped>
@media screen and (min-width:280px) {
  .container-card {
    margin-top: 60px;
  }
  ::v-deep .box-img {
    position: relative;
  }
  ::v-deep .imagen-torneos {
    position:absolute;
    transform: translateY(-150px);
    width: 100% !important;
  }
}

@media screen and (min-width:400px) {
  .container-card {
    margin-top: 80px;
  }
  ::v-deep .imagen-torneos {
    width: 70% !important;
  }
}

@media screen and (min-width:600px) {
  .container-card {
    margin-top: 120px;
  }
  ::v-deep .imagen-torneos {
    width: 50% !important;
  }

}

@media screen and (min-width:960px) {
  .container-card {
    margin-top: 0px;
  }
  ::v-deep .imagen-torneos {
    width: 90% !important;
  }
}

@media screen and (min-width:1264px) {
  .container-card {
    margin-top: 0px;
  }
  ::v-deep .imagen-torneos {
    width: 70% !important;
  }
}
.main {
  max-width: 1360px;
}
::v-deep .box-img {
  position: relative;
}
::v-deep .imagen-torneos {
  position:absolute;
  transform: translateY(-150px);
}
/* .card-container {
  width: 75;
} */

</style>