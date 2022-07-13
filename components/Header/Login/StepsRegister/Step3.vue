<template>
  <div>
    <h5 class="headline-5 text-center mb-6">¡Ya casi terminamos!</h5>
    <div>
      <p class="f-subtitle-2">Elige uno de nuestros avatares</p>
      <div class="avatars py-2">
        <div v-for="n in 19" :key="`img-${n}`" class="">
          <input class="radio-avt d-none" :ref="`avt${n}`" type="checkbox" name="avatar" :id="`a${n}`" :checked="avtIdSelectedInStep4 == `a${n}`">
          <label :for="`a${n}`" @click="des(`avt${n}`)" class="label-avt pointer">
            <div class="div-avt">
              <v-avatar size="66" class="avt">
                <img :src="`/avatars/a${n}.svg`" alt="">
              </v-avatar>
            </div>
          </label>
        </div>
      </div>

      <p class="f-subtitle-2 mt-4">Sube tu imagen de avatar</p>
      <div>
        <UpLoadAvatar @imgCompressed="getCompressedImg"/>
      </div>
    </div>

    <div class="d-flex justify-space-between">
      <TSButton 
        btnType="ts-btn-light"
        text="Atrás"
        :boxClass="['d-flex justify-end mt-2']"
        @click="$emit('back')"
      />
      <TSButton 
        btnType="ts-btn-primary"
        text="Siguiente"
        :boxClass="['d-flex justify-end mt-2']"
        @click="nextStep()"
      />
    </div>

  </div>
</template>
<script>
import TSButton from '~/components/Buttons/TSButton.vue'
import UpLoadAvatar from './UpLoadAvatar.vue'
import variables from '~/mixins/variables'
export default {
  name: 'Step3',
  components: {
    TSButton,
    UpLoadAvatar
  },
  props: {
    /* It is only if the user selects a diferent avatar in step 4 and then back to step 3 */
    avtIdSelectedInStep4: {
      type: String,
      default:''
    }
  },
  data () {
    return {
      avtId:'',
      avtImg:''
    }
  },
  mixins: [variables],
  methods: {
    des(r) {
      let current = this.$refs[r][0]
      for(let key in this.$refs) {
        if(this.$refs[key][0]['checked'] && this.$refs[key][0] !== current ) {
          this.$refs[key][0]['checked'] = false
        }
      }
      if(!current['checked']) {
        // Cuando selecciono el avatar
        this.avtId = current.id
        console.log(this.avtId)
        this.$emit('idAvtSelected', this.avtId )
      } else {
        // Cuando deselecciono el avatar
        this.avtId = ''
      }
    },
    getCompressedImg(imagen) {
      this.avtImg = imagen
    },
    nextStep() {
      this.$emit('next', this.avtImg)
    }
  },
  watch: {
    avtIdSelectedInStep4: function() {
      let correctId = this.avtIdSelectedInStep4.replace('a','avt')
      let current = this.$refs[correctId][0]
      if(this.avtIdSelectedInStep4 != '') {
        for(let key in this.$refs) {
          if(this.$refs[key][0]['checked'] && this.$refs[key][0] !== current ) {
            this.$refs[key][0]['checked'] = false
          }
        }
      }
    }
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 280px) {
  .upload-img {
    height: 88px;
  }
  .avatars, .upload-img {
    border: 2px solid #CED0D6;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .avatars {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 66px);
    row-gap: 0.5rem;
    justify-items: center;
    max-height: 300px;
    overflow-y: auto;
  }
  .avatars::-webkit-scrollbar {
      -webkit-appearance: none;
  }

  .avatars::-webkit-scrollbar:vertical {
      width:10px;
  }

  .avatars::-webkit-scrollbar-button:increment,.avatars::-webkit-scrollbar-button {
      display: none;
  } 

  .avatars::-webkit-scrollbar:horizontal {
      height: 10px;
  }

  .avatars::-webkit-scrollbar-thumb {
      background-color: #B7BDCB;
      border-radius: 20px;
      border: 2px solid #f1f2f3;
  }

  .avatars::-webkit-scrollbar-track {
      border-radius: 10px;  
  }
  .radio-avt:checked ~ label .avt{
    border: 3px solid #63CA85;

  }
  .radio-avt:checked ~ label .div-avt {
    position: relative;
    height: auto;
  } 
  .radio-avt:checked ~ label .div-avt::after {
    content: url('/img/close-white-bg-red.svg');
    position:absolute;
    top:0;
    right: 0;
    cursor:pointer;
    z-index: 9;
  }

}
</style>