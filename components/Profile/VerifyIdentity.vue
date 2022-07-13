<template>
    <div class="w-100">
        <div
            v-if="stateValidationNumber != null && stateValidationNumber != 2"
            class="w-100 ma-0 pa-0"
        >
            <p class="headline-4 text-center">{{ validationMessage }}</p>
            <p class="f-body-1 text-center">
                Archivos cargados
            </p>

            <div cols="3" class="d-flex justify-center my-6" v-for="img in loadedFile" :key="img.id">
                <v-img max-width="250" :src="getCorrectImg(img.url_archivo)" class="file-loaded rounded-lg"/>
            </div>
        </div>
        <v-row v-else class="w-100 ma-0 pa-0">
            <v-col cols="7">
                <div
                    :class="['pa-16','drag-n-drop', 'br-8px', {'active': active}, 'd-flex', 'justify-center align-center']"
                    ref="dragdrop"
                    @dragover.prevent="over"
                    @dragleave.prevent="leave"
                    @drop.prevent.stop="release($event)"
                >
                    <div v-if="!thereIsImg" class="d-flex flex-column justify-center align-center">
                        <p class="headline-6">
                            Arrastrá tu imagen y soltalo acá o
                        </p>
                        <input
                            type="file"
                            id="file-img"
                            ref="inputFile"
                            class="d-none"
                            @change="upLoadImgWithBtn($event)"
                            accept="image/png, image/jpg, image/jpeg">
                        <label for="file-img" class="f-caption pa-2 search-img pointer">
                            Buscar imagen
                        </label>
                    </div>

                    <div
                        :class="['preview w-100',{'d-none' : !thereIsImg}, { 'd-flex flex-column justify-center align-center' : thereIsImg}]" 
                        ref="previewContainer">
                        <span class="f-caption mt-4 pa-2 search-img pointer" ref="upLoadImgBtn" @click="addImg()">
                            Subir imagen
                        </span>
                    </div>
                </div>
                <div v-if="error">
                    <p class="color-error text-bold f-body-1 text-center">Ya tiene dos imagenes cargadas</p>
                </div>
                <div v-for="(item, index) in filesList" :key="index" class="temporal-box br-8px bxs-8px my-8">
                    <v-row class="w-100 ma-0 pa-0">
                        <v-col cols="3">
                            <div class="dni">
                                <img :src="item.img" alt="" class="dni-img w-100">
                            </div>
                        </v-col>
                        <v-col cols="8">
                            <p class="name-img f-body-2">{{ item.file.name}}</p>
                        </v-col>
                        <v-col>
                            <v-icon size="24" @click="deleteImg(index)">mdi-close</v-icon>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="5">
                <div class="bg-white bxs-4px br-8px px-8 py-4">
                    <div class="d-flex justify-start my-4">
                        <v-avatar size="24" color="#EFAD2D"><span class="f-subtitle-2">1</span></v-avatar>
                        <p class="f-subtitle-1 my-0 ml-2">Sube una foto de tu documento.</p>
                    </div>
                    <div class="d-flex justify-start my-4">
                        <v-avatar size="24" color="#EFAD2D"><span class="f-subtitle-2">2</span></v-avatar>
                        <p class="f-subtitle-1 my-0 ml-2">Validamos tu identidad.</p>
                    </div>
                    <div class="d-flex justify-start my-4">
                        <v-avatar size="24" color="#EFAD2D"><span class="f-subtitle-2">3</span></v-avatar>
                        <p class="f-subtitle-1 my-0 ml-2">Chequeamos tus datos personales.</p>
                    </div>
                </div>

                <div>
                    <TSButton
                        :disabled="!(filesList.length == 2)"
                        btnType="ts-btn-primary"
                        text="Enviar archivos"
                        class="mt-8"
                        className="w-100"
                        @click="sendFiles()"
                    />
                    <div v-if="stateValidationNumber == 2">
                        <p class="headline-6 color-error my-2">
                            Su cuenta no ha sido aprobada, intente enviar nuevamente los datos
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import TSButton from '../Buttons/TSButton.vue'
import getCorrectImg from '~/mixins/getCorrectImg'
import {validateIdentity, getValidationState} from '~/services/profile'
export default {
    components: { TSButton },
    mixins:[getCorrectImg],
    data () {
        return {
            dragdrop: '',
            active: false,
            dragover:'dragover',
            dragleave:'dragleave',
            drop:'drop',
            file: '',
            thereIsImg: false,
            filesList:[],
            error: false,
            alertColor: '#63CA85',
            infoMessage: false,
            validationMessage: '',
            stateValidationNumber: null,
            loadedFile: []
        }
    },
    created() {
        this.getValidation()
        this.validationCurrentState()
    },

    methods: {
        over() {
            this.active = true
        },
        leave(){
           this.active = false
        },
        release(e) {

            console.log(e)
            this.active = false
            const files = Array.from(e.dataTransfer.files)
            console.log(files)
            if(files[0].type == 'image/png' || files[0].type == 'image/jpg' || files[0].type == 'image/jpeg'  ) {
                this.file = files[0]
                console.log(this.$refs.previewContainer)
                this.previewToUp()
            }
        },
        previewToUp () {
            let imgContainer = this.$refs.previewContainer
            let afterElement = this.$refs.upLoadImgBtn
            let reader = new FileReader()
            this.thereIsImg = true
            reader.readAsDataURL(this.file)

            if(document.getElementById('pi')) {
                console.log('Exist')
                imgContainer.removeChild(document.getElementById('pi'))
            }
            reader.onload = function() {
                let img = document.createElement('img')
                img.src = reader.result
                img.classList.add('w-50','preview-img')
                img.id = 'pi'
                imgContainer.insertBefore( img, afterElement)
            }
        },
        upLoadImgWithBtn(e) {
            let imgContainer = this.$refs.previewContainer
            let afterElement = this.$refs.upLoadImgBtn
            let reader = new FileReader()
            this.thereIsImg = true

            reader.readAsDataURL(e.target.files[0])
            this.file = e.target.files[0]
            if(document.getElementById('pi')) {
                console.log('Exist')
                imgContainer.removeChild(document.getElementById('pi'))
            }
            reader.onload = function() {
                let img = document.createElement('img')
                img.src = reader.result
                img.classList.add('w-50','preview-img')
                img.id = 'pi'
                imgContainer.insertBefore( img, afterElement)
            }
        },
        async addImg () {
            if(this.filesList.length == 2) {
                this.error = true
                setTimeout(() => {
                    this.error = false
                }, 5000)
            } else {
                let base64 = ''
                let reader = new FileReader()
                let that = this
                reader.readAsDataURL(this.file)
                reader.onload = function() {
                    base64 = reader.result
                    console.log(base64)
                    that.filesList.push({img: base64, file: that.file})
                }
                console.log(this.filesList)
                let imgContainer = this.$refs.previewContainer
                if(document.getElementById('pi')) {
                    console.log('Exist')
                    imgContainer.removeChild(document.getElementById('pi'))
                    this.thereIsImg = false
                }
            }
        },
        deleteImg(i) {
            this.filesList.splice(i, 1)
            console.log(this.filesList)
        },
        async sendFiles () {
            try {
                this.$store.dispatch('changeLoader', true)
                console.log(this.filesList)
                let userId = this.$store.getters.getUserId
                let token = this.$store.getters.getToken
                let archivos_img = [this.filesList[0].img, this.filesList[1].img]
                const {status, data} = await validateIdentity({archivos_a_validar: archivos_img}, userId, token)
                if(status === 200) {
                    console.log(data)
                    this.loadedFile = data.archivos_de_usuario
                    this.$store.dispatch('changeValidationNumber', 0)
                    this.$store.dispatch('addAlert', {visible: true, message: 'Tu cuenta esta pendiente de verificación', color: '#63CA85'})
                    this.validationCurrentState()
                }
            } catch (error) {
                console.log(error)
                this.$store.dispatch('addAlert', {visible: true, message: 'ERROR: No se pudo enviar los datos', color: '#FD5E5E'})
            } finally {
                    this.$store.dispatch('changeLoader', false)
            }
        },
        async getValidation () {
            try {
                this.$store.dispatch('changeLoader', true)
                let userId = this.$store.getters.getUserId
                let token = this.$store.getters.getToken
                const {status, data} = await getValidationState(userId, token)
                if(status === 200) {
                    console.log(data)
                    this.loadedFile = data.archivos_de_usuario
                    // this.$store.dispatch('addAlert', {visible: true, message: 'Tu cuenta esta pendiente de verificación', color: '#63CA85'})
                }
            } catch (error) {
                console.log(error)
                this.$store.dispatch('addAlert', {visible: true, message: 'Ha ocurrido un error al cargar los datos ERROR', color: '#FD5E5E'})
            } finally {
                    this.$store.dispatch('changeLoader', false)
            }
        },
        validationCurrentState() {
            this.stateValidationNumber = this.$store.getters.getValidacion

            if(this.stateValidationNumber == 0) {
                this.validationMessage = 'Su cuenta se encuentra pendiente de validación'
            } else if(this.stateValidationNumber == 1) {
                this.validationMessage = 'Su cuenta ha sido verificada'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.drag-n-drop {
    border: 2px dotted #9B9EAB;
    width: 100%;
    height: 272px;
    display: block;
}
.active {
    background: #0000007d;
}
.search-img {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 36px
}
.alerta {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999999999999;
}
.file-loaded {
    border: 2px solid #3D445E;
}
</style>