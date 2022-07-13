<template>
  <v-container fluid class="main-container pa-0">
    <HomeBanner/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4
      class="aux"
    />
    <!-- <div class="w-100"> -->
      <img src="/img/bg-cartas.svg" alt="banner" class="w-100 aux">
    <!-- </div> -->
  </v-container>
</template>

<script>
import HomeBanner from '@/components/Landing/Home/HomeBanner.vue'
import Section1 from '@/components/Landing/Home/Section1.vue'
import Section2 from '@/components/Landing/Home/Section2.vue'
import Section3 from '@/components/Landing/Home/Section3.vue'
import Section4 from '@/components/Landing/Home/Section4.vue'

export default {
  layout: 'landing-page',
  name: 'Home',
  components: {
    HomeBanner,
    Section1,
    Section2,
    Section3,
    Section4
  }
}
</script>
<style lang="scss" scoped>
.aux {
  transform: translateY(10px);
}
</style>