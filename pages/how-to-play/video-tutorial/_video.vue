<template>
  <div>
    <web-title
      title="Video tutorial"
    />

  <web-container class="main-tutorial mt-8">
    <simple-breadcrumb
      class="mb-12"
      link="/how-to-play"
      back="¿Cómo jugar?"
      actual="Video tutorial objetivo del juego"
      id="video"
    />
    <v-row class="w-100 ma-0 pa-0">
      <v-col cols="12" lg="7">
        <iframe class="iframe-video" src="https://www.youtube.com/embed/L2RZcth5M7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-col>

      <v-col cols="12" lg="5">
        <p class="f-body-2" >Video {{ videoId }}</p>
        <h6 class="headline-6">{{ titulo[videoId-1] }}</h6>
        <p class="f-body-1 color-negro-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum maecenas non erat etiam platea tortor ultrices. Egestas sollicitudin augue mauris diam suspendisse. Quis dui, proin ultrices vivamus. 
          <br><br>
          Hendrerit cras pellentesque nisl tempus lectus et. Cras mauris donec nulla et, integer fermentum. Hendrerit viverra viverra praesent eu egestas magna interdum elit. 
          <br><br>
          Mi consectetur vitae, enim quis faucibus ornare aliquet morbi. Lacus vel non vitae, diam nunc sed vestibulum, sit facilisi. Nisl, nibh mi vel molestie.
        </p>

        <v-row class="w-100 ma-0 pa-0">
          <v-col cols="6" class="d-flex justify-start">
            <TSButton
              v-if="videoId != 1"
              btnType="ts-btn-light"
              text="Anterior"
              :link="true"
              :to="'/how-to-play/video-tutorial/'+(videoId-1)+'/#video'"
              beforeIcon="mdi-arrow-left"
            />
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <TSButton
              v-if="videoId != 7"
              btnType="ts-btn-light"
              text="Siguiente"
              :link="true"
              :to="'/how-to-play/video-tutorial/'+(videoId+1)+'/#video'"
              afterIcon="mdi-arrow-right"
            />
          </v-col>

        </v-row>
      </v-col>
    </v-row>
    
  </web-container>

  </div>

</template>
<script>
import SimpleBreadcrumb from '~/components/Breadcrumb/SimpleBreadcrumb.vue'
import TSButton from '~/components/Buttons/TSButton.vue'
import WebTitle from '~/components/Header/WebTitle.vue'
import WebContainer from '~/components/WebContainer.vue'
export default {
  layout: 'landing-page',
  components: {
    WebTitle,
    WebContainer,
    SimpleBreadcrumb,
    TSButton

  },
  data () {
    return {
      videoId: '',
      titulo: [
        'Objetivo del juego', 'Modo de juego',
        'Las cartas', 'Comienza el juego',
        'Cantar envido', 'Cantar truco', 'Cantar flor'
      ]
    }
  },
  created() {
    this.videoId = Number(this.$route.params.video)
  },
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .main-tutorial {
    max-width: 1600px !important;
  }
  .iframe-video {
    width: 100%;
    max-width: 560px;
    max-height:315px; 
  }
}
@media screen and (min-width: 560px) {
  .iframe-video {
    width: 100%;
    max-width: 560px;
    height: 315px;
  }
}

</style>