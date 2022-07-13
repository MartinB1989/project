<template>
  <div :class="classBox">
    <div v-for="(item, index) in items" :key="index" class="mb-4">
      
      <p class="ma-1 f-body-2 color-negro-3">
        {{ item.title }}
      </p>

      <div class="switch-container d-flex justify-space-between">
        <div class="d-flex">
          <v-avatar v-if="item.avatar" size="24" color="teal" class="align-self-center">
            <img :src="item.avatar" alt="avatar" class="avatar-img">
          </v-avatar>

          <p class="ma-1 f-body-2 color-negro-2">
            {{ item.text }}
          </p>
        </div>    
     
        <v-switch v-if="item.switchable" :color="color_acento1"></v-switch>
      </div>      
    </div>
    <slot></slot>
  </div>
</template>
<script>
import variables from '~/mixins/variables'

export default {
  name: 'SideInfoCard',
  mixins: [variables],
  props: {
    items: {
      type: Array,
      default: () => {}
      /* 
      items: [{
        title: '',
        avatar: '', (picture avatar, string)
        text: '',
        swicheable: false (Boolean)
      }]
      */
    },
    classBox: {
      type:[String, Array],
      default: 'bg-white pa-6 bxs-8px br-8px'
    }
  }  
}
</script>
<style lang="scss" scoped>
.switch-container .v-input{
  margin: 0;
}
::v-deep .v-input__control .v-input__slot {
  margin: 0;
}
.avatar-img {
  object-fit: cover;
  object-position: center;
}
</style>