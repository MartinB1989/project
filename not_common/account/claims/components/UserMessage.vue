<template>
  <v-container fluid>
    <v-row class="d-flex justify-start">
      <v-col cols="1" class="">
        <v-avatar color="primary">
          <v-img :src="imgSrc"/>
        </v-avatar>
      </v-col>
      <v-col cols="6">
        <div class="message br-8px pa-3">
          <a v-if="isFile" :href="`https://api-dev.trucostars.bet${fileUrl}`" target="_blank" class="text-decoration-none d-block pointer is-file d-flex justify-start py-2 align-center">
            <v-icon size="24" color="#ffffff" class="bg-negro-2 rounded-pill pa-2">mdi-file-outline</v-icon>
            <div class="file-data">
              <p class="file-name my-0 mx-2 color-negro-2 f-body-2">{{isFile}}</p>
              <p class="file-name my-0 mx-2 color-negro-3 f-body-2">{{weightFile}}</p>
            </div>
          </a>
          <p class="f-body-2 ma-0">
            {{texto}}</p>
        </div>
        <p class="date">
          {{timeFromNow}}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'UserMessage',
  props: {
    texto: {
      type: String,
      default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro et soluta unde
            voluptas sapiente eaque autem, voluptate dolorem cumque veritatis quia? Doloribus debitis
            ipsum eum vel deserunt culpa. Aliquam.`
    },
    imgSrc:{
      type: String,
      default: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
    },
    isFile:{
      type: String,
      default:''
    },
    timeFromNow:{
      type: String,
      default:''
    },
    fileUrl:{
      type: String,
      default:''
    },
    weightFile:{
      type: String,
      default:''
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width:280px){
  .message {
    border: 1px solid #CED0D6;
  }
}
</style>