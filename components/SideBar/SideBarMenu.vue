<template>
  <div class="sidebar-container">
    <div class="sidebarmenu bg-negro-2 d-none d-md-block">
      <ul class="first-list w-100">
        <template v-for="item in items" >
          <NuxtLink v-if="!item.collapse" :to="item.pathName" :key="item.name" class="main-li d-block py-4 w-100 px-5 f-body-2 text-decoration-none my-nuxt-link color-bg">
            <li class="d-flex aling-center d-block w-100" :class="[{'nuxt-link-exact-active': item.pathName === $route.path}]">
              <component :is="item.icon" :color="'#ffffff'" class="d-inline mr-3"></component> <p class="ma-0">{{ item.name }}</p>
            </li>
          </NuxtLink>
          <li v-else :key="item.name" class="d-block w-100" :class="[{'nuxt-link-exact-active': item.pathName === $route.path}]">
            <div  class="main-li d-flex justify-space-between align-center py-4 w-100 px-5 f-body-2 text-decoration-none my-nuxt-link color-bg" @click="showItems(item.collapseId, item.name)">
              <p class="ma-0 d-flex aling-center"><component :is="item.icon" :color="'#ffffff'" class="d-inline mr-3"></component>
              {{ item.name }}</p>
              <span class="" :ref='item.name'><v-icon color="#FFFFFF" size="24">mdi-chevron-down</v-icon></span>
            </div>
            <div v-if="item.collapse" :ref="item.collapseId" class="w-100 none">
              <ul class="list-unstyled w-100">
                <NuxtLink v-for="subitem in item.subitems" :key="subitem.name" :to="subitem.pathName" class="main-li-collapse subitem-link d-block w-100 text-decoration-none my-nuxt-link color-bg">
                <li class=" d-block py-4 w-100 f-body-2 my-nuxt-link color-bg" :class="[{'nuxt-link-exact-active': subitem.pathName === $route.path}]">
                  {{ subitem.name }}
                </li></NuxtLink>
              </ul>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <slot></slot>
  </div>

</template>
<script>
import Billete from '@/components/Icons/Billete'
import Configuracion from '@/components/Icons/Configuracion'
import Reporte from '@/components/Icons/Reporte'
import Grafico from '@/components/Icons/Grafico'
import Historial from '@/components/Icons/Historial'
import Megafono from '@/components/Icons/Megafono'
import Usuario from '@/components/Icons/Usuario'
import Usuario2 from '@/components/Icons/Usuario2'
import Denuncia from '@/components/Icons/Denuncia'

export default {
  name: 'SideBarMenu',
  data() {
    return {
      items: [],
      userAdmin: [
        {icon:Usuario,name:'Mi perfil', pathName:'/admin/profile', collapse:false},
        {icon:Usuario2,name:'Usuarios', pathName:'/admin/users/users', collapse:false},
        {icon:Reporte,name:'Reportes', pathName:'/admin/reports/reports', collapse:false},
        {icon:Configuracion,name:'Configuración', collapse: true, collapseId:"collapse-1", subitems: [{name:'Partidas', pathName:'/admin/config/games'},{name:'Torneos', pathName:'/admin/tournament'},{name:'Comisiones', pathName:'/admin/commissions'}]},
        {icon:Megafono,name:'Publicidad', pathName:'/admin/advertasing', collapse:false},
        {icon:Denuncia,name:'Asistencia al cliente', pathName:'/admin/customer-support/customer-support', collapse:false},
      ],
      userMenu: [
        {icon:Grafico,name:'Resumen', pathName:'/account/resume', collapse:false},
        {icon:Usuario,name:'Mi perfil', pathName:'/account/profile/my-profile', collapse:false},
        {icon:Historial,name:'Historial', pathName:'/account/record', collapse:false},
        {icon:Billete,name:'Pagos', pathName:'/account/payments', collapse:false},
        {icon:Megafono,name:'Publicidad', pathName:'/account/advertasing', collapse:false},
        {icon:Usuario2,name:'Sponsors', pathName:'/account/sponsors', collapse:false},
        {icon:Denuncia,name:'Reclamos', pathName:'/account/claims', collapse:false},
      ],
      userType: 'player'
    }
  },
  created() {
    if(this.userType === 'player') {
      this.items = this.userMenu
    }
    else if(this.userType === 'admin') {
      this.items = this.userAdmin
    }
  },
  methods: {
    showItems(id, name) {
      console.log(this.$refs[name])
      if(this.$refs[id][0].classList.contains('none')) {
        this.$refs[id][0].classList.remove('none')
        this.$refs[name][0].classList.add('turn')
      } else {
        this.$refs[id][0].classList.add('none')
        this.$refs[name][0].classList.remove('turn')
      }


    }
  }

}
</script>
<style lang="scss" scoped>
@media screen and (min-width:280px) {
  ul {
    list-style: none;
    padding: 0;
  }
  p {
    line-height: 2.5rem;
  }
  .sidebar-container {
    display: flex;
    align-items: stretch;
    min-height: 100vh;
    .sidebarmenu {
      width: 280px;
      padding-top: 5rem;
      align-self: stretch;
      ul{
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: flex-start;
        .main-li {
          border-left: .8rem solid $negro2 ;
          cursor:pointer;
        }
        .main-li:hover {
          border-left: .8rem solid $acento1 ;
        }
        .nuxt-link-active {
          border-color: $acento1 ;
          background-color: $acento1;
          font-weight: 700;
        }
        .nuxt-link-exact-active {
          border-color: $acento1 ;
          background-color: $acento1;
          font-weight: 700;

          li {
            color: $background;
          }
        }
      }
    }
  }

  .bold {
    font-weight: 700;
  }
  .subitem-link {
    padding-left: 7.5rem;
  }
  .subitem-link li:hover {
    color: $acento1;
  }
  .none {
    display: none !important;
  }
  .turn {
    transform: rotateZ(180deg);
  }

}
</style>
