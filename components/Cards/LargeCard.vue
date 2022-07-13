<template>
  <v-container fluid class="br-8px pa-0" :class="boxClass">
    <v-row class="w-100 pa-0 ma-0">
      <v-col 
        cols="12"
        md="7"
        class="d-flex flex-column justify-center align-start py-4 pr-16 pl-12">
        <h1 :class="className.title">{{ title }}</h1>
        <div :class="[{'line': line}]"></div>
        <p :class="className.text" class="my-2">
          {{ text }}
        </p>
        <TSButton
          btnType="ts-btn-light"
          :text="btnText"
          className="mt-4"
          :link="link"
          @click="$emit('handleClick')"
          :to="to"
        />
      </v-col>
      <v-col 
        cols="12"
        md="5" 
        order="first" 
        order-md="last" 
        class="pa-0"
      >
        <img :src="imgSrc" :alt="alt" class="image">
      </v-col>
    </v-row>
  </v-container>
  
</template>
<script>
import TSButton from '../Buttons/TSButton.vue'
export default {
  name:'LargeCard',
  components: { 
    TSButton 
  },
  props: {
    title: {
      type: String,
      default: 'Titulo'
    },
    text: {
      type: String,
      default: 
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae
        molestias aliquam veniam laboriosam excepturi nihil alias quisquam incidunt
        quibusdam totam ipsum cum ex dolorem voluptatibus, commodi quod iusto at.`
    },
    imgSrc: {
      type: String,
      default: '/img/mano-carta.svg'
    },
    alt: {
      type: String,
      default: 'Aquí va la imagen'
    },
    typeCard: '',
    btnText: {
      type: String,
      default: 'Ver más'
    },
    boxClass: {
      type: [String, Array],
      default: 'bg-background '
    },
    link: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      large:{
        title: 'headline-5',
        text: 'headline-6 color-negro-3'
      },
      medium:{
        title: 'headline-6',
        text: 'f-body-1 color-negro-3'
      },
      className: null,
      line: true
    }
  },
  created() {
    if(this.typeCard === 'large') {
      this.className = this.large
    } else {
      this.className = this.medium
      this.line = false
    }
    
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .line {
    width:75px ;
    height: 1px;
    margin: 1.5rem 0;
    background-color: $negro1;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px 8px 0 0;
  }
}
@media screen and (min-width: 960px) {
  .image {
    border-radius: 0 8px 8px 0 ;
  }
}
</style>