<template>
  <div>

    <div v-show="step == 1" class="" id="step-1">
      <Step1
        :clear="clearDataInForm1"
        @next="nextStep"
      />
    </div>

    <div v-show="step == 2" class="" id="step-2">
      <Step2
        :clear="clearDataInForm2"
        @back="backStep(1)"
        @next="nextStep"
      />
    </div>

    <div v-show="step == 3" class="" id="step-3">
      <Step3
        :avtIdSelectedInStep4="avtIdSelectedInStep4"
        @back="backStep(2)"
        @next="nextStep"
        @idAvtSelected="avtIdSelected"

      />
    </div>

    <div v-show="step == 4" class="" id="step-4">
      <Step4
        :avtIdSelectedInStep3="avtIdSelectedInStep3"
        :srcAvatar="avtImgLoadedInStep3"
        @back="backInStep4"
        @next="nextStep"
        @avatarSelected="avatarSelected"

      />
    </div>

    <div v-show="step == 5" class="" id="step-5">
      <Step5
        :srcAvatar="avatar"
        @click="endRegister"
      />
    </div>

  </div>
</template>
<script>
import TSButton from '~/components/Buttons/TSButton.vue'
import Step1 from './StepsRegister/Step1.vue'
import Step2 from './StepsRegister/Step2.vue'
import Step3 from './StepsRegister/Step3.vue'
import Step4 from './StepsRegister/Step4.vue'
import Step5 from './StepsRegister/Step5.vue'
import {register} from '~/services/register'

export default {
  name: 'Register',
  components: {
    TSButton,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  data () {
    return {
      step: 1,
      srcAvt: '',
      avtImgExist:'',
      avtIdSelectedInStep3:'',
      avtImgLoadedInStep3:'',
      avtIdSelectedInStep4:'',
      avatar:'',
      clearDataInForm1:false,
      clearDataInForm2:false,
      registerData: {
        nombre: '',
        apellido: '',
        usuario: '',
        contrasena: '',
        email: '',
        id_pais: '',
        id_provincia: '',
        avatar_img_perfil: ''
      }

    }
  },
  methods: {
    nextStep(data) {
      console.log(data)
      if(this.step == 1) {
        this.step = 2
        this.registerData.nombre = data.nombre
        this.registerData.apellido = data.apellido
        this.registerData.usuario = data.usuario
        this.registerData.contrasena = data.contrasena
      } else if(this.step == 2) {
        this.step = 3
        this.registerData.email = data.email,
        this.registerData.id_pais = data.id_pais
        this.registerData.id_provincia = data.id_provincia
      } else if(this.step == 3) {
        this.step = 4
        this.avtImgLoadedInStep3 = data
      } else if (this.step == 4) {
/*         console.log(this.avatar)
        let endWithSVG = this.avatar.endsWith('.svg')
        if(endWithSVG) {
          this.registerData.avatar_img_perfil = this.avatar
        } else {
          let avatarArray = this.avatar.split(',')
          this.registerData.avatar_img_perfil = avatarArray[1]
        } */
        this.registerData.avatar_img_perfil = this.avatar
        console.log(this.registerData.avatar_img_perfil)
        this.sendData()
      }
    },
    backStep(num) {
      this.step = num
    },
    backInStep4(avtId){
      this.avtIdSelectedInStep4 = avtId.replace('b','a')
      this.backStep(3)
    },
    avtIdSelected (idAvt) {
      console.log(idAvt)
      let id = idAvt.replace('a', 'b')
      this.avtIdSelectedInStep3 = id
    },
    avatarSelected(avatar) {
      this.avatar = avatar
    },
    endRegister() {
      this.step = 1
      this.registerData = {
        nombre: '',
        apellido: '',
        usuario: '',
        contrasena: '',
        email: '',
        id_pais: '',
        id_provincia: '',
        avatar_img_perfil: ''
      }
      this.clearDataInForm1 = !this.clearDataInForm1
      this.clearDataInForm2 = !this.clearDataInForm2
      this.avtIdSelectedInStep4 = ''
      this.$emit('endRegister')
    },
    async sendData() {
      try {
        this.$store.dispatch('changeLoader', true)
        const {status, data} = await register(this.registerData)
        if(status===200){
          console.log(data)
          this.step = 5
        }
      } catch ({data}) {
        console.log(data)
        let alert = {
          visible:true,
          message: data.message,
          color: '#FF4560'
        }
        this.$store.dispatch('addAlert', alert)
      } finally {
        this.$store.dispatch('changeLoader', false)
      }
    }
  }
}
</script>