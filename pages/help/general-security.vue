<template>
  <div>
    <web-title
      title="Ayuda"
    />
    <web-container class="mt-8">
      <simple-breadcrumb
        back="Ayuda"
        actual="Seguridad general"
        link="/help"
      />

      <h1 class="headline-5 my-5 py-5">Seguridad general</h1>

      <div v-for="ask in 10" :key="ask" class="article pa-6 d-flex justify-space-between align-center">
        <p class="f-body-1 ma-0">
          ¿Dignissim quisque proin odio amet amet maecenas sapien habitant?
        </p>
        <v-icon size="24" color="#3D445E">mdi-chevron-right</v-icon>
      </div>
    </web-container>
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