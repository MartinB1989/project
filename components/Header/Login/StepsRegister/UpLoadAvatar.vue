<template>
  <div class="upload-img d-flex align-center px-8">
    <input class="d-none" ref="file_img" @change="isThereAFileImg()" accept="image/png,image/jpeg" type="file" id="profile-picture">
    <label for="profile-picture" class="pointer">
      <v-row class="ma-0 pa-0">
        <v-col cols="3" class="d-flex justify-center align-center">
          <v-avatar v-show="isEmpty" size="48" :color="color_acento1">
            <v-icon size="24" color="#ffffff">mdi-plus</v-icon>
          </v-avatar>
          <v-avatar v-show="!isEmpty" size="48" color="#000000" id="elavatar">
          </v-avatar>
        </v-col>
        <v-col cols="9" class="d-flex flex-column justify-center align-start">
          <p class="color-negro-2 f-subtitle-2 ma-0">Subir una imágen</p>
          <p class="color-negro-2 f-caption ma-0">Soporta JPG, PNG</p>
        </v-col>
      </v-row>
    </label>
  </div>
</template>
<script>
import variables from '~/mixins/variables'
export default {
  name: 'UpLoadAvatar',
  mixins: [variables],
  data() {
    return {
      isEmpty: true,
      src: ''
    }
  },
  methods: {
    isThereAFileImg() {
      const img_container =  document.getElementById('elavatar')
      console.log(img_container)
      if(img_container.contains(document.getElementById('avt'))) {
        img_container.removeChild(document.getElementById('avt'))
      }
      if(this.$refs.file_img.value != '') {
        const file = this.$refs.file_img.files[0]
        const canvas = document.createElement('canvas')
        const img = document.createElement('img')
       
        const imagen = new Image()
        let that = this
        imagen.onload = () => {
          const lamda = (imagen.height/imagen.width)
          let imgW = 300
          let imgH = lamda*300
          canvas.width = imgW
          canvas.height = imgH
          canvas.getContext('2d').drawImage(imagen,0,0,imgW,imgH)
          let imgCompressed = canvas.toDataURL("image/jpeg", 0.75)
          that.$emit('imgCompressed', imgCompressed) 
          img.src = imgCompressed
          img.id = 'avt'
          img_container.appendChild(img)
          that.src = imgCompressed
        }
        imagen.src = URL.createObjectURL(file)
        this.isEmpty = false
      }
    }
/*     isThereAFileImg () {
      const img_container =  document.getElementById('elavatar')
      console.log(img_container)
      if(img_container.contains(document.getElementById('avt'))) {
        img_container.removeChild(document.getElementById('avt'))
      }
      if(this.$refs.file_img.value != '') {
    
        const file = this.$refs.file_img.files[0]
        const reader = new FileReader()
        const img = document.createElement('img')
        const that = this
        reader.readAsDataURL(file)
        reader.onload = function() {
          img.src = reader.result
          img.id = 'avt'
          img_container.appendChild(img)
          that.src = reader.result          
          that.compressImg()
        }
        this.isEmpty = false

        
      }
    },
    compressImg() {
      const canvas = document.createElement('canvas')
      const imgUpLoaded = document.getElementById('avt')
      const imagen = new Image()
      let that = this
      imagen.onload = () => {
        const lamda = (imagen.height/imagen.width)
        let imgW = 300
        let imgH = lamda*300
        canvas.width = imgW
        canvas.height = imgH
        canvas.getContext('2d').drawImage(imagen,0,0,imgW,imgH)
        let imgCompressed = canvas.toDataURL("image/jpeg", 0.75)
        that.$emit('imgCompressed', imgCompressed)
        
      }
      imagen.src = imgUpLoaded.src

    } */
  }
  
}
</script>
<style lang="scss" scoped>
  .upload-img {
    height: 88px;
    border: 2px solid #CED0D6;
    box-sizing: border-box;
    border-radius: 8px;
  }
  ::v-deep .v-avatar #avt {
    object-fit: cover;
    object-position: center;
  }
</style>