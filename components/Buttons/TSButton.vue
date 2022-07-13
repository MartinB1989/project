<template>
    <div :class="boxClass">
      <NuxtLink
        v-if="link"
        :to="to"
        :class="[btnType, 'text-decoration-none','ts-btn', 'd-flex', 'justify-center','align-center', 'rounded-pill', 'text-center', {'py-1':(afterIcon != '' || beforeIcon != '')}, className]"
        :disabled="disabled"
      >
        <v-icon v-if="beforeIcon != ''" size="20" class="ma-0 color-icon">{{ beforeIcon }}</v-icon>

        <span :class="['ts-button--text f-caption text-center px-2',{'mb-1':(afterIcon != '' || beforeIcon != '')}]">{{ text }}</span>
        <v-icon v-if="afterIcon != ''" size="20" class="ma-0 color-icon">{{ afterIcon }}</v-icon>

      </NuxtLink>
      <button v-else
        type="button"
        :class="[btnType, 'ts-btn', 'd-flex', 'justify-center','align-center', 'rounded-pill', 'text-center',{'py-1':(afterIcon != '' || beforeIcon != '')}, className]"
        :disabled="disabled"
        @click.prevent="$emit('click')"
      >
        <v-icon v-if="beforeIcon != ''" size="20" class="ma-0 color-icon">{{ beforeIcon }}</v-icon>

        <span :class="['ts-button--text f-caption text-center px-2',{'mb-1':(afterIcon != '' || beforeIcon != '')}]">{{ text }}</span>
        <v-icon v-if="afterIcon != ''" size="20" class="ma-0 color-icon">{{ afterIcon }}</v-icon>

      </button>
    </div>

</template>
<script>
// import ArrowUp from '@/components/Icons/ArrowUp.vue'
export default {
  name:'TSButton',
  // components:{
  //   ArrowUp
  // },
  props:{
    text:{
      type: String,
      default: 'Button\'s text'
    },
    btnType: {
      type: String,
      default:'ts-btn-primary'
    },
    beforeIcon: {
      type: String,
      default: ''
    },
    afterIcon: {
      type: String,
      default: ''
    },
    disabled: {
      type:Boolean,
      default:false
    },
    to: {
      type:String,
      default:'/'
    },
    className:{
      type: String,
      default: ''
    },
    link: {
      type: Boolean,
      default: false
    },
    boxClass: {
      type: [String, Array],
      default: 'd-flex'
    }
  },
  methods: {

  }
  // TODO: Ver y eliminar si es necesario
  // computed: {
  //   arrowColor() {
  //     if(this.btnType === 'ts-btn-primary' ) {
  //       if(!this.disabled) {
  //         return '#FFFFFF'
  //       }
  //         return '#3D445E4D'
  //     } else if(this.btnType === 'ts-btn-light') {
  //         if(this.disabled) {
  //           return '#3D445E4D'
  //         }
  //         return '#3D445E'
  //     } else if(this.btnType === 'ts-btn-dark') {
  //         if(this.disabled) {
  //           return '#FBFBFB4D'
  //         }
  //         return '#F9F9F9'
  //     } else if(this.btnType === 'ts-btn-trans') {
  //         if(this.disabled) {
  //           return '#3D445E4D'
  //         }
  //         return '#3D445E'
  //     }
  //   }
  // }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 280px) {
  .large {
    width:100%;
  }
  .ts-btn {
    padding: 8px 16px;
    outline: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    // .ts-button--text {
    //   font-family: 'Mulish';
    //   font-weight: 600;
    //   font-style: normal;
    //   font-size: 14px;
    //   letter-spacing: 1.25px;
    //   color: #FFFFFF;

    // }
  }
  // PRIMARY
  .ts-btn-primary {
    background-color: $acento1;
    transition: .2s transform;
    .ts-button--text , .color-icon{
      color: $bg-white;
    }
  }
  .ts-btn-primary:hover {
    box-shadow: $shadow8;
    transform: scale(1.01);

  }
  .ts-btn-primary:disabled {
    background-color: $acento2;
    .ts-button--text, .color-icon {
      color: #3D445E4D;
    }
  }
  .ts-btn-primary:disabled:hover {
    box-shadow: none;
    transform: scale(1);
  }
  // NEGRO 2
  .ts-btn-negro-2 {
    background-color: $negro2;
    transition: .2s transform;
    .ts-button--text , .color-icon{
      color: $bg-white;
    }
  }
  .ts-btn-negro-2:hover {
    box-shadow: $shadow8;
    transform: scale(1.01);

  }
  .ts-btn-negro-2:disabled {
    background-color: $negro3;
    .ts-button--text, .color-icon {
      color: #3D445E4D;
    }
  }
  .ts-btn-negro-2:disabled:hover {
    box-shadow: none;
    transform: scale(1);
  }
  // RED
    .ts-btn-red {
    background-color: $error;
    transition: .2s transform;
    .ts-button--text , .color-icon{
      color: $bg-white;
    }
  }
  .ts-btn-red:hover {
    box-shadow: $shadow8;
    transform: scale(1.01);

  }
  .ts-btn-red:disabled {
    background-color: $acento2;
    .ts-button--text, .color-icon {
      color: #3D445E4D;
    }
  }
  .ts-btn-red:disabled:hover {
    box-shadow: none;
    transform: scale(1);
  }
  // LIGHT
  .ts-btn-light {
    background: none;
    border: 1px solid #3D445E;
    .ts-button--text, .color-icon {
      color: #3D445E;
    }
  }
  .ts-btn-light:hover {
    background-color: #3D445E14;
  }
  .ts-btn-light:disabled {
    // background-color: $bg-white;
    border: 1px solid #3D445E4D;
    .ts-button--text , .color-icon{
      color: #3D445E4D;
    }
  }
 .ts-btn-light:disabled:hover {
    box-shadow: none;
    background-color: $bg-white;
  }
  // DARK
  .ts-btn-dark {
    background: none;
    border: 1px solid $background;
    .ts-button--text, .color-icon {
      color: $background;
    }
  }
  .ts-btn-dark:hover {
    background-color: #ffffff21;
  }
  .ts-btn-dark:disabled {
    border: 1px solid #FBFBFB4D;
    .ts-button--text, .color-icon {
      color: #FBFBFB4D;
    }
  }
 .ts-btn-dark:disabled:hover {
    background-color: $negro2;
  }
  // TRANSPARENT
  .ts-btn-trans {
    background-color: #3D445E14;
    .ts-button--text, .color-icon {
      color: $negro2;
    }
  }
  .ts-btn-trans:hover {
    background-color: #3D445E40;
  }
  .ts-btn-trans:disabled {
    .ts-button--text, .color-icon {
      color: #3D445E4D;
    }
  }
 .ts-btn-trans:disabled:hover {
    background-color: #3D445E14;
  }
}
</style>
