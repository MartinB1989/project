<template>
  <div>
    <DialogModalBase
      :dialog="dialog"
      @hideModal="$emit('hideModal')"
    >
      <template slot="content">
        <div v-if="show === 'sign-in'" id="sign-in" class="pa-12">
          <SignIn
            @signIn="$emit('signIn')"
            @forgotPass="() => show = 'forget'"
          />
        </div>

        <div v-else-if="show === 'forget' " id="forget-password">
          <ForgotPassword
            @back="() => show = 'sign-in'"
            @finish="$emit('finish')"
          />
        </div>

        <div v-else-if="show === 'register'" id="register" class="py-2 px-12" >
          <Register @endRegister="$emit('endRegister')"/>
        </div>
      </template>

    </DialogModalBase>
  </div>
</template>
<script>
import DialogModalBase from '~/components/Modals/DialogModalBase.vue'
import SignIn from './SignIn.vue'
import ForgotPassword from './ForgotPassword.vue'
import Register from './Register.vue'
export default {
  name: 'Login',
  components: {
    DialogModalBase,
    SignIn,
    Register,
    ForgotPassword
  },
  props: {
    dialog: {
      type: Boolean,
      default: false  
    },
    show: {
      type: String,
      default: 'sign-in' 
    },
  },

}
</script>