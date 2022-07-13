<template>
  <v-container fluid class="ma-0 pa-0">
    <account-header-two
      title="Agregar saldo"
    />
    <simple-breadcrumb
        link="/account/payments/"
        back="Pagos"
        actual="Agregar saldo"
        class="px-8 py-4"
    />
    <div class="w-100">
      <div v-if="step1" class="mx-auto mt-12 pa-8 br-8px bxs-8px bg-white box">
        <p class="headline-5 mb-10">Ingresa el importe a tu cuenta</p>
        <v-text-field
          label="Saldo a agregar"
          placeholder="1000"
          persistent-placeholder
        ></v-text-field>
        <div class="d-flex justify-end mt-12">
          <TSButton
            class="mx-2"
            btnType="ts-btn-light"
            text="Cancelar"
            @click="() => $router.push({path:'/account/payments'})"
          />
          <TSButton
            class="mx-2"
            btnType="ts-btn-primary"
            text="Continuar"
            @click="next()"
          />
        </div>
      </div>

      <div v-else class="mx-auto mt-8 pa-8">
        <v-row>
          <v-col cols="7" class="pa-4">
            <div class="bg-white br-8px bxs-8px">
              <p class="headline-5 pt-4 pb-2 px-4 addfunds-title">Selecciona un medio de pago</p>

              <div class="d-flex pb-12 px-5">
                <div class="tipo-pago d-flex flex-column align-center justify-center">
                  <img class="img-logo" src="/img/mercadopagologo.svg" alt="mercado-pago-img">
                  <p class="f-subtitle-1 my-2">Mercadopago</p>
                </div>
                <div class="tipo-pago d-flex flex-column align-center justify-center">
                  <img class="img-logo" src="/img/todopagologo.svg" alt="mercado-pago-img">
                  <p class="f-subtitle-1 my-2">Todo pago</p>
                </div>
                <div class="tipo-pago d-flex flex-column align-center justify-center">
                  <img class="img-logo" src="/img/linklogo.svg" alt="mercado-pago-img">
                  <p class="f-subtitle-1 my-2">Link</p>
                </div>                                
              </div>
            </div>
          </v-col>

          <v-col cols="5" class="pa-4">
            <div class="h-100 bg-white br-8px bxs-8px">
              <p class="headline-5 pt-4 pb-2 px-4 addfunds-title">Detalle de pago</p>
              <div class="d-flex justify-space-between px-4">
                <p class="f-subtitle-1">Total a pagar</p>
                  <p class="f-subtitle-1 text-bold">$4.000</p>
              </div>
              <div class="d-flex justify-space-between px-4">
                  <p class="f-subtitle-1">Medio de pago</p>
                  <p class="f-subtitle-1 text-bold">Mercadopago</p>
              </div>
              <div class="d-flex justify-end px-4">
                  <p class="f-subtitle-1 text-bold color-acento-1 pointer" @click="() => step1 = true">Cambiar importe</p>
              </div>
              <TSButton
                class="px-4 pt-8 pb-4"
                className="w-100"
                text="Agregar saldo"
                @click="showModal()"
              />
            </div>            
          </v-col>
        </v-row>
      </div>
    </div>

    <ProfileModal
      :dialog="dialog"
      text1="¡Agregaste fondos a tu cuenta!"
      text2="No pudimos agregar los fondos a tu cuenta"
      subtext1="Podrás ver el detalle de la operación en la sección Gestión de pagos"
      subtext2="Intentalo nuevamente en unos minutos."
      @hideModal="() => dialog = false"
      @continue="() => dialog = false"
      :ok="ok"
    />    
  </v-container>
</template>
<script>
import SimpleBreadcrumb from '~/components/Breadcrumb/SimpleBreadcrumb.vue'
import TSButton from '~/components/Buttons/TSButton.vue'
import AccountHeaderTwo from '~/components/Header/AccountHeaderTwo.vue'
import ProfileModal from '~/components/Profile/ProfileModal.vue'
export default {
  layout: 'account',
  components: { AccountHeaderTwo, SimpleBreadcrumb, TSButton, ProfileModal },
  data () {
    return {
      step1: true,
      dialog: false,
      ok: true
    }
  },
  methods: {
    next () {
      this.step1 = false
    },
    showModal () {
      this.dialog = true
      this.ok = !this.ok
    }
  }
  
}
</script>
<style lang="scss" scoped>
.box {
  max-width: 640px;
}
.tipo-pago {
  width: 134px;
  height: 134px;
  background-color: #F9F9F9;
  border: 1px solid #EFAD2D;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 10px;

  .img-logo {
    height: 50px;
  }
}
.addfunds-title {
  border-bottom:1px solid #DFDFDF ;
}
</style>