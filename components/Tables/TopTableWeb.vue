<template>
  <div class="top-table-class bg-negro-2">
    <v-row v-if="tipo == 'premio'" class="w-100 ma-0 pa-0">
      <v-col cols="2" class="d-flex justify-start align-center">
        <img :src="srcImg" alt="" class="top-img w-70">
      </v-col>
      <v-col cols="3">
        <p class="color-bg f-subtitle-1 mb-2">Premio</p>
        <p class="headline-5 text-white">{{ prize }}</p>
      </v-col>
      <v-col cols="7">
        <p class="color-bg f-subtitle-1 mb-2">Fecha</p>
        <p class="headline-5 text-white">{{ date }}</p>
      </v-col>
    </v-row>

    <v-row v-else-if="tipo == 'clase'" class="w-100 ma-0 pa-0" @click="$emit('handleClick')">
      <v-col cols="2" class="d-flex justify-center align-center">
        <img :src="srcImg" alt="">
      </v-col>
      <v-col cols="8" class="d-flex align-center">
        <p class="headline-5 text-white ma-0">{{ title }}</p>
      </v-col>
      <v-col cols="2" class="d-flex justify-end align-center">
        <v-icon color="#ffffff">{{ icon }}</v-icon>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'TopTableWeb',
  props: {
    srcImg: {
      type: String,
      default: ''
    },
    tipo: {
      type: String,
      default: 'premio'
    },
    prize: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }, 
    title: {
      type: String,
      default: ''
    }, 
    icon: {
      type: String,
      default: ''
    },  
  }
}
</script>
<style scoped>
.top-table-class {
  border-radius: 8px 8px 0 0;
}
</style>
