<template>
  <div>
    <web-title
      title="Hacemos del Truco una nueva experiencia"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus varius tincidunt eu at at. Amet faucibus cursus pellentesque donec. Fusce ullamcorper ultrices amet a eget odio."
    />

    <web-container>
      <div style="height:50px"></div>
      <h4 class="headline-4 text-center my-8">Nuestra empresa</h4>
      <p class="f-body-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus varius tincidunt eu at at. Amet faucibus cursus pellentesque donec. Fusce ullamcorper ultrices amet a eget odio. Eget proin ac lacus, enim aliquet gravida lobortis sodales. Est hendrerit consectetur nulla mattis. Elementum tellus ornare varius morbi gravida a leo amet. 
        <br> <br>
        Fusce ullamcorper ultrices amet a eget odio. Eget proin ac lacus, enim aliquet gravida lobortis sodales. Est hendrerit consectetur nulla mattis. Elementum tellus ornare varius morbi gravida a leo amet. 
      </p>
      <div style="height:80px"></div>
      <h4 class="headline-4 text-center my-8">Nuestro objetivo</h4>
      <p class="f-body-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus varius tincidunt eu at at. Amet faucibus cursus pellentesque donec. Fusce ullamcorper ultrices amet a eget odio. Eget proin ac lacus, enim aliquet gravida lobortis sodales. Est hendrerit consectetur nulla mattis. Elementum tellus ornare varius morbi gravida a leo amet. 
        <br> <br>
        Fusce ullamcorper ultrices amet a eget odio. Eget proin ac lacus, enim aliquet gravida lobortis sodales. Est hendrerit consectetur nulla mattis. Elementum tellus ornare varius morbi gravida a leo amet. 
      </p>
      <div style="height:80px"></div>
       <h4 class="headline-4 text-center my-8">¿Dónde nos encontramos?</h4>


    </web-container>  
    <div class="w-80 bg-white mx-auto mb-16 br-8px" style="max-width: 1108px">
      <v-row class="w-100 ma-0 pa-0">
        <v-col cols="7" class="pa-8 ma-0">
          
          <h5 class="headline-5">Nuestras oficinas</h5><br><br>
          <h6 class="headline-6 color-negro-3">
            Calle 14 5148, <br>
            Berazategui (B1880BFS), <br> 
            Provincia de Buenos Aires, <br>
            Argentina               
          </h6>
        </v-col>

        <v-col cols="5" class="pa-0 ma-0">
          <img src="/img/ubicacion.svg" alt="ubicacion" class="img-map">
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import WebTitle from '~/components/Header/WebTitle.vue'
import WebContainer from '~/components/WebContainer.vue'
export default {
  layout: 'landing-page',
  components: { WebContainer, WebTitle },
  
}
</script>
<style lang="scss" scoped>
::v-deep .web-title {
  height: 440px;
}
::v-deep .text-title, ::v-deep .text-subtitle {
  width: 50%;
}
.img-map {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

</style>