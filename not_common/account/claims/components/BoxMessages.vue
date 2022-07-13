<template>
  <v-container fluid class="pa-0 bg-white br-8px">
    <div class="caja-de-mensajes px-6" ref="box" id="box-message">
      <div v-for="(message, i) in AllMessages" :key="i">
        <div v-if="message.id_usuario == userIdClaiming" class="claimer">
          <CurrentUserMessage
            :texto="message.mensaje"
            :isFile="getFileItem(message.nombre_archivo)"
            :fileUrl="message.archivo"
            :timeFromNow="timeFromNow(message.created_at)"
            :weightFile="message.archivo_peso"
          />
        </div>
        <div v-else class="current">
          <UserMessage
            :texto="message.mensaje"
            :imgSrc="userImgClaiming"
            :isFile="getFileItem(message.nombre_archivo)"
            :fileUrl="message.archivo"
            :timeFromNow="timeFromNow(message.created_at)"
            :weightFile="message.archivo_peso"
          />
        </div>
      </div>
    </div>
    <div v-if="spinner" class="spinner px-8 d-flex justify-center">
      <v-progress-circular
        size="16"
        indeterminate
        :color="color_negro2"
      ></v-progress-circular>
    </div>
    <div class="input-send px-8">
      <v-row class="ma-0 pa-0 w-100">
        <v-col cols="1" class="put-file-icon d-flex justify-center align-center pa-0">
          <input type="file" id="file" hidden @change="fileEvent($event)">
          <label for="file">
            <v-avatar size="40" :color="color_negro2" class="pointer">
              <v-icon size="20" color="#ffffff">mdi-file-outline</v-icon>
            </v-avatar>
          </label>
        </v-col>
        <v-col cols="10" class="textarea d-flex justify-center align-center pa-0">
          <v-textarea
            v-model="newMessage"
            placeholder="Escribe tu mensaje aquí"
            :color="color_negro2"
            rows="3"
          >
          </v-textarea>
        </v-col>
        <v-col cols="1" class="send-icon d-flex justify-center align-center pa-0">
          <v-avatar size="40" :color="color_negro2" @click="addNewMessage()" class="pointer">
            <v-icon size="20" color="#ffffff" class="mdi-navigation">mdi-navigation</v-icon>
          </v-avatar>
        </v-col>


      </v-row>
      <div v-if="thereIsFile" class="my-2">
        <v-chip>
          <span>{{fileName}}</span>
          <span class="ml-4 pointer" @click="deleteFile()">X</span>
        </v-chip>
      </div>
    </div>
    <!-- <div class="establecer-estado bg-exito-2 px-8 py-6">
      <div class="d-flex justify-start">
          <span class="f-subtitle-1">Establece un estado:</span>
          <TSButton
            text="Marcar como resuelto"
            btnType="ts-btn-trans"
            boxClass="mx-4"
            @click="showModal()"
          />
          <TSButton
            text="Marcar como no visto"
            btnType="ts-btn-trans"
            boxClass="mx-4"
            @click="changeState(1)"
          />
      </div>
    </div> -->

    <DialogModalBase :dialog="dialog" @hideModal="showModal()">
      <template slot="content">
        <div class="pa-10">
          <h5 class="headline-5 text-center">¿Desea marcar como "resuelto"?</h5>
          <p class="my-10 f-body-1 text-center ">
            Una vez elegida esta opción no se permitiran más mensajes en este chat.
            <br>
            Esta opción no se puede deshacer.
          </p>
          <div class="d-flex justify-space-around">
            <TSButton @click="showModal()" btnType="ts-btn-light" text="Cancelar"/>
            <TSButton text="Marcar como resuelto" @click="changeState(3)" />
          </div>
        </div>
      </template>
    </DialogModalBase>
    <div v-if="noVisto" class="alerta">
      <v-alert
      dense
        close-icon="mdi-close"
        :color="color_exito1"
        dismissible
      ><span class="color-negro-2">Mensaje marcado como "No visto"</span></v-alert>
    </div>
  </v-container>
</template>
<script>
import TSButton from '@/components/Buttons/TSButton.vue'
import UserMessage from './UserMessage.vue'
import variables from '~/mixins/variables'
import CurrentUserMessage from './CurrentUserMessage.vue'
import DialogModalBase from '@/components/Modals/DialogModalBase.vue'
import { changeClaimState, addMessage } from '~/services/reclamos'
import getCorrectImg  from '~/mixins/getCorrectImg'
import moment from 'moment'
export default {
  name: 'BoxMessages',
  components: {
    TSButton,
    UserMessage,
    CurrentUserMessage,
    DialogModalBase
  },
  mixins: [variables, getCorrectImg],
  props:{
    mensajes:{
      type: Array,
      default: () => {}
    },
    userIdClaiming: {
      type:[String, Number],
      default: 0
    },
    userImgClaiming: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      spinner: false,
      newMessage: '',
      file:'',
      thereIsFile:false,
      fileName:'',
      dialog: false,
      noVisto: false,
      currentUserId: 0
    }
  },
  created(){
    this.currentUserId = this.$store.getters.getUserId
  },
  methods: {
    showModal () {
      this.dialog = !this.dialog
    },
    marcarNoVisto() {
      this.noVisto = true
      setTimeout(() => {
        this.noVisto = false
      }, 5000)
    },
    fileEvent(e){
      console.log(e)
      this.file = e.target.files[0]
      this.thereIsFile = true
      this.fileName = this.file.name
    },
    deleteFile() {
      this.thereIsFile = false
      this.fileName = ''
    },
    async changeState(newState) {
      try {
        this.$store.dispatch('changeLoader', true)
        console.log(this.$route)
        let idMessage = this.$route.params.chat
        let token = this.$store.getters.getToken
        const {status, data} = await changeClaimState(idMessage, token, newState)
        if(status === 200) {
          console.log(data)
          if(newState == 1) {
            this.marcarNoVisto()
          }
          else if(newState == 3) {
            this.$store.dispatch('addAlert', {visible: true, color:'#63CA85', message: 'Mensaje marcado como resuelto'})
          }
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.$store.dispatch('changeLoader', false)
      }
    },
    async addNewMessage() {
      try {
        if (this.newMessage != '' || this.thereIsFile){
          this.spinner = true
          let idMessage = this.$route.params.chat
          let token = this.$store.getters.getToken
          let fd = new FormData()
          fd.append('mensaje', this.newMessage);
          fd.append('id_usuario', this.$store.getters.getUserId);
          if(this.thereIsFile) {
            fd.append('archivo', this.file)
          }
          const {status, data} = await addMessage(idMessage, token,fd)
          if(status === 200) {
            console.log(data)
          this.mensajes.push({
            archivo: data.reclamo_mensaje.archivo,
            created_at: data.reclamo_mensaje.created_at,
            id_usuario: this.currentUserId,
            mensaje: data.reclamo_mensaje.mensaje,
            nombre_archivo: data.reclamo_mensaje.nombre_archivo,
            archivo_peso: data.reclamo_mensaje.archivo_peso
            })
          }
          this.file = []
          this.thereIsFile = false
          this.fileName = ''
          this.newMessage = ''
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.spinner = false
      }
    },
    getFileItem(fileItem) {
      if(fileItem != null) {
        return fileItem
      }
      return ''
    },
    timeFromNow(time) {
      let t = this.getDateFriendly(time)
      let from = moment(t).locale('es').fromNow()
      return this.capitalize(from)
    },
    getDateFriendly(value) {
      let arrDate = value.split('.')
      return arrDate[0]
    },
    capitalize(str) {
      const lower = str.toLowerCase()
      return str.charAt(0).toUpperCase() + lower.slice(1)
    },
    scrollAbajo() {
      let container = this.$el.querySelector("#box-message");
      container.scrollTop = container.scrollHeight;
    }
  },
  computed:{
    AllMessages() {
      return this.mensajes
    }
  },
  watch: {
    mensajes: {
      handler() {
        this.$nextTick(() => {
          this.scrollAbajo()
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width:280px) {
  .caja-de-mensajes{
    height: 500px;
    overflow-y: scroll;
  }
  .mdi-navigation {
    transform: rotateZ(45deg);
  }

  .caja-de-mensajes::-webkit-scrollbar {
      -webkit-appearance: none;
  }

  .caja-de-mensajes::-webkit-scrollbar:vertical {
      width:10px;
  }

  .caja-de-mensajes::-webkit-scrollbar-button:increment,.caja-de-mensajes::-webkit-scrollbar-button {
      display: none;
  }

  .caja-de-mensajes::-webkit-scrollbar-thumb {
      background-color: #B7BDCB;
      border-radius: 20px;
      border: 2px solid #f1f2f3;
  }

  .caja-de-mensajes::-webkit-scrollbar-track {
      border-radius: 10px;
  }

  .input-send > div {
    border-top:2px solid #CED0D6;
  }
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border: none !important;
}
.alerta {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999999999999;
}
</style>