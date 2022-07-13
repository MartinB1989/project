<template>
  <div>

    <nuxt-link :to="link" class="text-decoration-none f-subtitle-1 color-negro-3">{{ back }}</nuxt-link>
    <span class="f-subtitle-1 color-negro-3 mx-6">></span>
    <slot name="add"></slot>
    <span class="f-subtitle-1 color-negro-2">{{ actual }}</span>
  </div>
</template>
<script>
export default {
  name: 'SimpleBreadcrumb',
  props: {
    link: {
      type: String,
      default:'/'
    },
    back: {
      type: String,
      default:'Volver'
    },
    actual: {
      type: String,
      default:'Estas aquí'
    }
  }
}
</script>