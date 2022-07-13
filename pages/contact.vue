<template>
  <div>
    <web-title
      title="Contacto"
    />
    <web-container class="my-12">
      <h5 class="headline-5 text-center">Encontrá el asesoramiento que necesitás</h5>

      <div class="contact-container mx-auto my-8 py-8 px-16 bg-white bxs-8px br-8px">
        <v-select
          :items="items"
          label="Categoría"
          height="50"
          color="#9B9EAB"
        ></v-select>

        <v-text-field
          label="Nombre y apellido"
          height="50"
          color="#9B9EAB"            
        ></v-text-field>

        <v-text-field
          label="E-mail"
          height="50"
          color="#9B9EAB"          
        ></v-text-field>

        <v-text-field
          label="Asunto"
          height="50"
          color="#9B9EAB"          
        ></v-text-field>   

        <v-textarea
          name="input-7-1"
          label="Mensaje"
          no-resize
          rows="12"
          color="#9B9EAB"          
        ></v-textarea> 

        <p class="f-caption color-negro-3">
          Por favor no ingreses los datos de tu tarjeta ni datos personales en este campo. 
          <br><br>
          Todos los campos son obligatorios.
        </p>              
      </div>
      <TSButton
        boxClass="d-flex justify-center"
        btnType="ts-btn-primary"
        text="Enviar mensaje"
        @click="() => dialog = true"
      />
    </web-container>

    <dialog-modal-base :dialog="dialog" @hideModal="cerrar()">
      <template slot="content">
        
        <div v-if="vof" class="modal-success py-8">
          <div class="d-flex justify-center">
          <v-icon size="128" color="#2EC891">mdi-check-circle-outline</v-icon>
          </div>
          <h4 class="headline-4 text-center my-10">
            ¡Tu mensaje ha sido enviado con éxito!
          </h4>
          <p class="f-body-1 text-center">
            Recibirás un e-mail cuando tengas una respuesta.
          </p>
        </div>

        <div v-else class="modal-success py-8">
          <div class="d-flex justify-center">
          <v-icon size="128" color="#FF4560">mdi-information-outline</v-icon>
          </div>
          <h4 class="headline-4 text-center my-10">
            Tu mensaje no ha podido enviarse
          </h4>
          <p class="f-body-1 text-center">
            Intentalo nuevamente en unos minutos.
          </p>
        </div>
        <TSButton
          boxClass="d-flex justify-center my-8"
          btnType="ts-btn-primary"
          text="Continuar"
          className="w-70"
          @click="cerrar()"
        />
      </template>
    </dialog-modal-base>

  </div>
</template>
<script>
import TSButton from '~/components/Buttons/TSButton.vue'
import WebTitle from '~/components/Header/WebTitle.vue'
import DialogModalBase from '~/components/Modals/DialogModalBase.vue'
import WebContainer from '~/components/WebContainer.vue'
export default {
  layout:'landing-page',
  components: {
    WebTitle,
    WebContainer,
    TSButton,
    DialogModalBase
  },
  data () {
    return {
      items: ['Item-1', 'Item-2', 'Item-3'],
      dialog: false,
      vof: true
    }
  },
  methods: {
    cerrar() {
      this.dialog = false
      setTimeout(() => {
        this.vof = !this.vof
      },1000)
    }
  }

}
</script>
<style lang="scss" scoped>
.contact-container {
  width:100%;
  max-width: 544px;
}
</style>