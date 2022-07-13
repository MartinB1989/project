<template>
  <div>
    <h5 class="headline-5 text-center mb-6">¡Ya casi terminamos!</h5>
    <div>
      <p class="f-subtitle-2">Elige uno de nuestros avatares</p>
      <div class="avatars-step-4 py-2">
        <div v-for="n in 20" :key="`img-${n}`">
          <input :class="`radio-avt-step-4 d-none`" :ref="`avt${n}`" type="checkbox" name="avatar" :id="`b${n-1}`" :checked="avtIdSelectedInStep3 == `b${n-1}`">
          <label :for="`b${n-1}`" @click="des(`avt${n}`)" class="label-avt pointer">
            <div class="div-avt">
              <v-avatar v-if="n==1" size="72" :class="['avt', {'avt-img' : srcAvatar == ''}]">
                <v-icon v-if="srcAvatar == ''" color="#3D445E">mdi-plus</v-icon>
                <img v-else :src="srcAvatar" alt="avatar" id="src-avatar">
              </v-avatar>
                
              <v-avatar v-else size="72" class="avt">
                <img :src="`/avatars/a${n-1}.svg`" alt="">
              </v-avatar>
            </div>
          </label>
        </div>
      </div>
    </div>

    <div class="d-flex justify-space-between">
      <TSButton 
        btnType="ts-btn-light"
        text="Atrás"
        :boxClass="['d-flex justify-end mt-2']"
        @click="back()"
      />
      <TSButton 
        btnType="ts-btn-primary"
        text="Finalizar"
        :boxClass="['d-flex justify-end mt-2']"
        @click="$emit('next')"
        :disabled="disabled"
      />
    </div>

  </div>
</template>
<script>
import TSButton from '~/components/Buttons/TSButton.vue'
import UpLoadAvatar from './UpLoadAvatar.vue'
import variables from '~/mixins/variables'
export default {
  name: 'Step4',
  components: {
    TSButton,
    UpLoadAvatar
  },
  props: {
    srcAvatar: {
      type: String,
      default:''
    },
    avtIdSelectedInStep3: {
      type: String,
      default: ''
    }    
  },
  mixins: [variables],
  data () {
    return {
      disabled: (this.srcAvatar == ''),
      avtId:''
    }
  },
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
        if(current.id == 'b0' && this.srcAvatar == '') {
          this.disabled = true
        }
        else {
          this.disabled = false
          let src = ''
          if(current.id == 'b0') {
            let img = document.getElementById('src-avatar')
            src = img.src
            this.$emit('avatarSelected', src )
          }
          else {       
            let falseId = current.id
            let realId = falseId.replace('b', 'a')
            this.avtId = realId
            console.log(realId)
            src = `/avatars/${realId}.svg`
            this.$emit('avatarSelected', src )

          } 
        }
      } else {
        // Cuando deselecciono el avatar
        this.avtId = ''
        console.log(this.avtId)
      }
    },
    back() {
      this.$emit('back', this.avtId)
      console.log(this.avtId)
    }
  },
  watch: {
    avtIdSelectedInStep3: function() {
      let correctId = this.avtIdSelectedInStep3.replace('b','avt')
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
  .avatars-step-4, .upload-img {
    border: 2px solid #CED0D6;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .avatars-step-4 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    row-gap: 1rem ;
  }
  .radio-avt-step-4:checked ~ label .avt{
    border: 3px solid #63CA85;

  }
  .radio-avt-step-4:checked ~ label .div-avt {
    position: relative;
    height: auto;
  } 
  .radio-avt-step-4:checked ~ label .div-avt::after {
    content: url('/img/close-white-bg-red.svg');
    position:absolute;
    top:0;
    right: 0;
    cursor:pointer;
    z-index: 9;
  }
  .v-avatar #src-avatar {
    object-fit: cover;
  }
  .avt-img {
    border: 1px dashed #9B9EAB;;
  }
  
}
</style>