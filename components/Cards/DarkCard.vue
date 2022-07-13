<template>
  <div class="bg-negro-2 pa-6 br-8px">
    <h6 class="headline-6 text-white mb-4">{{ title }}</h6>
    <p class="f-subtitle-1 text-white" v-html="text"></p>
  </div>
</template>
<script>
export default {
  name: 'DarkCard',
  props:{
    title: {
      type: String,
      default:'Titulo'
    },
    text: {
      type: String,
      default:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>