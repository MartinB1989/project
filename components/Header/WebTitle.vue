<template>
  <div class="web-title bg-negro-2 d-flex flex-column align-center justify-center">
    <h3 class="text-title headline-3 text-white text-center">{{ title }}</h3>
    <h6 v-if="subtitle != ''" class="text-subtitle headline-6 text-white text-center mt-8">
      {{subtitle}}
    </h6>
  </div>
</template>
<script>
export default {
  name: 'WebTitle', 
  props: {
    title: {
      type: String,
      default: 'Titulo'
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.web-title {
  height: 136px;
}
</style>