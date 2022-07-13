<template>
  <div :class="classContainer">

    <v-icon :color="iconColor" :size="iconSize">
      {{ previousIcon }}
      <v-slot name="previous-icon"></v-slot>
    </v-icon>
    
    <span :class="textClass">
      {{ text }}
    </span>

    <v-icon :color="iconColor" :size="iconSize">
      {{ backIcon }}
      <v-slot name="back-icon"></v-slot>
    </v-icon>

  </div>
</template>
<script>
export default {
  name: 'IconText',
  props: {
    classContainer: {
      type: [String, Array],
      default: ''
    },
    textClass: {
      type: [String, Array],
      default: ''
    },
    text: {
      type: String,
      default: 'Texto'
    },
    previousIcon: {
      type: String,
      default: 'mdi-account-circle',
    },
    backIcon: {
      type: String,
      default: '',
    },
    iconSize: {
      type: [Number, String],
      default:'18'
    },
    iconColor: {
      type: String,
      default: '#000000'
    }
  }
}
</script>