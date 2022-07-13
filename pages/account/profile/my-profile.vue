<template>
  <v-container fluid tag="main" class="align-self-strech pa-0">
    <AcountHeader
      :title="title"
      :crumb="crumb"
      :root="root"
      :end="end"
      :items="items"
      @action="changePassword"/>
    <section class="section-profile max-w mx-auto d-flex flex-column align-center py-5">

      <!-- PERSONAL DATA -->
      <div v-if="title == 'Mi perfil'">
        <PersonalData
          :name="userData.nombre"
          :lastName="userData.apellido"
          :numberDni="userData.dni"
          @onNombre="setNombre"
          @onApellido="setApellido"
          @onDni="setDni"
          @onTipoDoc="setTipoDoc"
        />
        <Contact
          @onTelefono="setTelefono"
          @onEmail="setEmail"
        />
        <Dir @click="changeDir()"/>
        <AcountData
          @onUsuario="setUsuario"
          userType="player"
          @click="changePassword()"
        />
        <Verify @click="verifyIdentity()"/>
        <div class="my-5">
          <div>
            <p v-if="formInvalid" class="f-body-2 color-error text-center text-bold"> <span class="x-error">x</span> Verifica que todos los campos esten correctos</p>
            <TSButton
              btnType="ts-btn-primary"
              class="d-flex justify-center mt-12"
              className="w-80"
              text="Guardar cambios"
              @click="sendUpdate()"
            />
          </div>
        </div>
      </div>


      <!-- CHANGE PASSWORD -->
      <div v-else-if="title == 'Contraseña'" class="w-100 pa-8">
        <Password/>
      </div>

    <!-- CHANGE ADDRESS DATA -->
    <div v-if="title == 'Dirección'" class="w-100">
      <ChangeDir/>
      <div class="my-5">
        <!-- <div>
          <TSButton
            btnType="ts-btn-primary"
            class="d-flex justify-center mt-12"
            className="w-80"
            text="Guardar cambios"
          />
        </div> -->
      </div>
    </div>

    </section>
    <section class="pa-4 max-w mx-auto" >
      <!-- CHANGE ADDRESS DATA -->
      <div v-if="title == 'Verificación de identidad'" class="w-100">
        <VerifyIdentity/>
      </div>
    </section>
  </v-container>

</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, numeric, minValue, email } from 'vuelidate/lib/validators'
import TSButton from '@/components/Buttons/TSButton.vue'
import AcountHeader from '@/components/Header/AcountHeader.vue'
import PersonalData from '@/components/Profile/PersonalData.vue'
import Contact from '@/components/Profile/Contact.vue'
import AcountData from '@/components/Profile/AcountData.vue'
import Password from '@/components/Profile/Password.vue'
import Dir from '@/components/Profile/Dir.vue'
import ChangeDir from '~/components/Profile/ChangeDir.vue'
import ProfileModal from '~/components/Profile/ProfileModal.vue'
import Verify from '~/components/Profile/Verify.vue'
import VerifyIdentity from '~/components/Profile/VerifyIdentity.vue'
import { updateProfile } from '~/services/profile'
export default {
  layout: 'account',
  name: 'AdminProfile',
  mixins:[validationMixin],
  components: {
    AcountHeader,
    PersonalData,
    Contact,
    AcountData,
    TSButton,
    Password,
    Dir,
    ChangeDir,
    ProfileModal,
    Verify,
    VerifyIdentity
  },
  data() {
  return {
      userData:{
        nombre:this.$store.getters.getUserName,
        apellido: this.$store.getters.getUserLastName,
        dni:this.$store.getters.getUserDni,
        telefono:this.$store.getters.getPhone,
        email:this.$store.getters.getEmail,
        usuario:this.$store.getters.getUsuario,
        id_tipo_documento: this.$store.getters.getTipoDoc === null ? 1 : this.$store.getters.getTipoDoc,
        codigo_pais: this.$store.getters.getCodigoPais,
      },
      formInvalid: false,
      err:{},
      title: 'Mi perfil',
      // BREADCRUMB'S ITEMS
      root: {
        name:'Mi perfil',
        action: this.changePassword()
      },
      end: 'Contraseña',
      items: [
        // SOLO DE EJEMPLO
        // {
        //   name:'Item-1',
        //   path:'/'
        // },
        // {
        //   name:'Item-2',
        //   path:'/'
        // }
      ],
      crumb: false,
      dialog: false,
      ok:true
    }
  },
  validations: {
    userData: {
      nombre: {required, maxLength: maxLength(50), minLength: minLength(3)},
      apellido: {required, maxLength: maxLength(50), minLength: minLength(3)},
      dni: {required, numeric, maxLength: maxLength(8), minLength: minLength(8), minValue: minValue(0)},
      telefono: {required, maxLength:maxLength(24), minLength:minLength(6), numeric},
      email: {required, minLength:minLength(5), email},
      usuario: {required, minLength: minLength(3), maxLength:maxLength(50)}
    }
  },
  methods: {
    changePassword() {
      if(this.title === 'Mi perfil') {
        this.title = 'Contraseña'
        this.end = 'Contraseña'
        this.crumb = true
      } else {
        this.title = 'Mi perfil'
        this.crumb = false
      }
    },
    changeDir() {
      if(this.title === 'Mi perfil') {
        this.title = 'Dirección'
        this.end = 'Dirección'
        this.crumb = true
      } else {
        this.title = 'Mi perfil'
        this.crumb = false
      }
    },
    verifyIdentity() {
      if(this.title === 'Mi perfil') {
        this.title = 'Verificación de identidad'
        this.end = 'Verificación de identidad'
        this.crumb = true
      } else {
        this.title = 'Mi perfil'
        this.crumb = false
      }
    },
    async update() {
      let token = localStorage.getItem('authToken')
    },
    showModal() {
      this.dialog = true
      this.ok_password = !this.ok_password
    },
    setNombre(newValue) {
      this.userData.nombre = newValue
    },
    setApellido(newValue) {
      this.userData.apellido = newValue
    },
    setDni(newValue) {
      this.userData.dni = newValue
    },
    setTelefono(newValue) {
      this.userData.codigo_pais = newValue.codigoPais
      this.userData.telefono = newValue.telefono
    },
    setEmail(newValue) {
      this.userData.email = newValue
    },
    setUsuario(newValue) {
      this.userData.usuario = newValue
    },
    setTipoDoc(newValue) {
      this.userData.id_tipo_documento = newValue
    },
    async update() {
      try {
        this.$store.dispatch('changeLoader', true)
        console.log(this.userData)
        let userId = this.$store.getters.getUserId
        let token = this.$store.getters.getToken
        const {status, data} = await updateProfile(this.userData, userId, token)
        if(status === 200) {
          console.log(data)
          this.$store.dispatch('changeBasicDataProfile', this.userData)
          this.$store.dispatch('addAlert', {visible: true, message: 'Datos actualizados con éxito', color: '#63CA85'})
        }
        console.log('si si')
      } catch (error) {
        console.log(error)
        this.$store.dispatch('addAlert', {visible: true, message: error.data.message, color: '#FD5E5E'})
      } finally {
          this.$store.dispatch('changeLoader', false)
      }
    },
    async sendUpdate() {
      this.$v.$touch()
      let errors = this.$v.$anyError
      console.log(errors)
      if(!errors) {
        await this.update()
      } else {
        console.log(this.userData)
        this.formInvalid = true
        setTimeout(() => {
          this.formInvalid = false
        }, 3000)
      }
    }
  },
  watch: {
    validation: function() {
      console.log(this.validation)
    },
    err: function() {
      console.log(this.err)
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width:280px) {
  .section-profile {
    max-width: 640px;
  }
}
::v-deep .submit-btn {
  background: none;
}
::v-deep .error {
  border-color: red;
}
</style>
