<template>
  <div id="step-5" class="py-6">
    <div class="d-flex justify-center">
      <v-avatar size="150">
        <img :src="srcAvatar" alt="avatar" class="final-avatar">
      </v-avatar>
    </div>
   
    <h4 class="headline-4 text-center my-12">¡Exelente!</h4>
    <p class="my-6 f-body-1 text-center">
      Tu cuenta ha sido creada con éxito. <br>
      ¡Comensá a jugar!
    </p>
      <TSButton 
        btnType="ts-btn-primary"
        text="Continuar"
        :boxClass="['d-flex justify-center mt-12']"
        :className="'w-75'"
        @click="$emit('click')"
      />
    

  </div>
</template>
<script>
import TSButton from '~/components/Buttons/TSButton.vue'
export default {
  name: 'Step5',
  components: {
    TSButton
  },
  props: {
    srcAvatar: {
      type: String,
      default:''
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .v-avatar .final-avatar {
  object-fit: cover;
  object-position: center;
}
</style>