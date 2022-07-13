<template>
  <div>
    <web-title
      title="Ayuda"
    />
    <web-container class="my-8">
      <simple-breadcrumb
        back="Ayuda"
        actual="¿Dignissim quisque proin odio amet amet maecenas sapien habitant?"
        link="/help"
      >
        <template slot="add">

        <nuxt-link to="/help/my-account" class="text-decoration-none f-subtitle-1 color-negro-3">Mi cuenta</nuxt-link>
        <span class="f-subtitle-1 color-negro-3 mx-6">></span>
        </template>
      </simple-breadcrumb>

      
      <h1 class="headline-5 my-5 py-5">¿Dignissim quisque proin odio amet amet maecenas sapien habitant?</h1>
      <p class="f-body-1 mb-16">
        Mattis nibh in at sapien at donec amet, convallis vulputate sed augue dignissim tincidunt odio non, 
        praesent integer nulla facilisis nibh sollicitudin faucibus velit vulputate est praesent proin nullam 
        urna risus eget pellentesque leo lectus aliquam mauris.
        <br><br>
        Senectus purus egestas faucibus lectus nibh venenatis donec imperdiet varius urna aliquet 
        euismod id cursus feugiat iaculis neque urna, condimentum adipiscing varius neque tellus 
        turpis risus, id cras lacus justo et tortor, faucibus malesuada. 
        <br><br>
        Ultricies eget sit malesuada velit feugiat at arcu nunc pellentesque 
        lobortis aenean phasellus integer arcu pharetra quam convallis et arcu 
        dignissim consequat, phasellus sed odio et nulla ipsum, turpis.
      </p>

      <h1 class="headline-5 my-5 py-5">Artículos relacionados</h1>

      <div v-for="ask in 5" :key="ask" class="article pa-6 d-flex justify-space-between align-center">
        <p class="f-body-1 ma-0">
          ¿Dignissim quisque proin odio amet amet maecenas sapien habitant?
        </p>
        <v-icon size="24" color="#3D445E">mdi-chevron-right</v-icon>
      </div>
    </web-container>
    <div style="height:50px"></div>
  </div>
</template>
<script>
import SimpleBreadcrumb from '~/components/Breadcrumb/SimpleBreadcrumb.vue'
import WebTitle from '~/components/Header/WebTitle.vue'
import WebContainer from '~/components/WebContainer.vue'
export default {
  layout: 'landing-page',
  name: 'my-account',
  components: {
    WebTitle,
    SimpleBreadcrumb,
    WebContainer

  }
}
</script>
<style lang="scss" scoped>
.article {
  border-bottom: 1px solid #CED0D6;
}
</style>