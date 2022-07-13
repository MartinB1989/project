<template>
  <div>
    <v-container v-if="title !== '' " fluid class="header-container bg-white">
      <h1 class="headline-5">{{ title }}</h1>  
    </v-container>
    <div v-if="crumb" class="py-4">
      <BreadcrumbTwo :classContainer="classCrumbContainer" :items="items" :end="end" @action="$emit('action')"/>
    </div>
    
  </div>

</template>
<script>
import BreadcrumbTwo from '../Breadcrumb/BreadcrumbTwo.vue'
export default {
  components: { BreadcrumbTwo },
  name: "AccountHeaderTwo",
  props: {
    title: {
      type: String,
      // IF TITLE IS AN EMPTY STRING THE TITLE HEADER WON'T SHOW
      default: 'Titulo'
    },
/*     root: {
      type: Object,
      default: () => {}
    }, */
    items: {
      type: Array,
      default: () => {}
    },
    end: {
      type: String,
      default: 'usted esta aquí'
    },
    crumb: {
      type: Boolean,
      default: false
    },
    classCrumbContainer: {
      type: [String, Array],
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.header-container {
  padding-top: 3rem;
  padding-bottom: 1rem;
}
.bread {
  text-decoration: none;
  font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.15px;
color: #9B9EAB;
}
</style>
