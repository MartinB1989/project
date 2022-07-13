<template>
  <v-container fluid :class="classContainer">
    <div class="pl-5">
      <!-- <span><NuxtLink :to="root.path" class="root-item subtitle-1 color-negro-3 text-decoration-none">{{ root.name }}</NuxtLink></span> -->
      <span class="root-item f-subtitle-1 color-negro-3 text-decoration-none" @click="$emit('action')">{{ root.name }}</span>
      <span v-for="item in items" :key="item.name"> <span class="f-subtitle-1 color-negro-3 mx-2">></span> <NuxtLink :to="item.path" class="items f-subtitle-1 color-negro-3 text-decoration-none">{{item.name}}</NuxtLink> </span>
      <span><span class="f-subtitle-1 color-negro-3 mx-2">></span> <span class="f-subtitle-1 color-negro-2">{{ end }}</span></span>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    root: {
      type: Object,
      default: () => {}
    },
    items: {
      type: Array,
      default: () => {}
    },
    end: {
      type: String,
      default: 'usted esta aquí'
    },
    classContainer: {
      type: [String, Array],
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.root-item {
  cursor:pointer;
}
.root-item:hover, .items:hover {
  color:$acento1;
} 
</style>