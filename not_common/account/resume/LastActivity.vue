<template>
  <div>
    <v-row class="w-100 ma-0 pa-0">
      <v-col cols="2" class="d-flex justify-center align-center pa-0">
        <v-avatar size="56" color="teal">
          <v-img :src="srcImg" alt="imagen-de-perfil" class="imagen-de-perfil"/>
        </v-avatar>
      </v-col>
      <v-col cols="7" class="d-flex justify-start align-center">
        <div>
          <p class="f-body-1 ma-0">{{ title }}</p>
          <span class="f-caption color-negro-3">{{ subtitle }}</span>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-end align-center">
        <p class="f-subtitle-1 ma-0">{{ date }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name:'LastActivity',
  props: {
    srcImg: {
      type: String,
      default: 'https://cdn.pixabay.com/photo/2016/04/01/17/09/question-1301144_960_720.png'
    },
    title: {
      type: String,
      default: 'Vestibulum consequat dictum ac'
    },
    subtitle: {
      type: String,
      default: 'Purus hac congue in cras ipsum'
    },
    date: {
      type: String,
      default: '15/02/2022'
    },

  }
}
</script>
<style lang="scss" scoped>
.imagen-de-perfil {
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
