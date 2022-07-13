<template>
  <div class="mx-3">
    <v-menu
      bottom
      :offset-y="true"
      rounded="lg"
    >
      <template v-slot:activator="{ on, attrs }">
        <div 
          v-bind="attrs"
          v-on="on"
        >
          <v-badge
            :content="messages"
            :value="messages"        
            overlap
            color="#EFAD2D"
          >
            <v-icon size="28" color="#ffffff" class="color-bg">mdi-bell-outline</v-icon>
          </v-badge>         
        </div>
      </template>
      <div class="globo-notifications">
        <div class="header-box d-flex bg-negro-4 pa-4">
          <div>
            <p class="f-body-1 my-0 mx-2">Notificaciones</p>
          </div>
        </div>
        <div class="">
          <NotificationItem
            v-for="n in 4"
            :key="n"
          />
          <p class="f-body-1 text-center ma-0 pt-2 pb-4 pointer" @click="() => $router.push({path:'/account/notifications'})">Ver todo</p>
        </div>
      </div>
    </v-menu> 
  </div>
</template>
<script>
import NotificationItem from './NotificationItem.vue'
export default {
  name: 'NotificationsButtonMenu',
  components: {
    NotificationItem
  },
  data() {
    return {
      messages: 5
    }
  },
}
</script>
<style lang="scss" scoped>
.globo-notifications {
  background-color: #ffffff;
  width: 336px ;
}
</style>
