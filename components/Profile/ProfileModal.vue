<template>
    <dialog-modal-base :dialog="dialog" @hideModal="$emit('hideModal')">
        <template slot="content">
        <div v-if="ok">
            <div class="d-flex justify-center my-12">
            <v-icon size="120" color="#2EC891">mdi-check-circle-outline</v-icon>
            </div>
            <p class="headline-4 text-center mb-8">{{text1}}</p>
            <p class="f-body-1 text-center"> {{subtext1}}</p>
            <TSButton
            btnType="ts-btn-primary"
            class="d-flex justify-center mt-12 mb-8" 
            className="w-80"
            text="Continuar"
            @click="$emit('continue')"
            />            
        </div>
        <div v-else>
            <div class="d-flex justify-center my-12">
                <v-icon size="120" color="#FF4560">mdi-information-outline</v-icon>
            </div>
            <p class="headline-4 text-center">{{text2}}</p>
            <p class="f-body-1 text-center">{{subtext2}}</p>
            <TSButton
                btnType="ts-btn-primary"
                class="d-flex justify-center mt-12 mb-8"
                className="w-80"
                text="Continuar"
                @click="$emit('continue')"
            />            
        </div>            
        </template>

    </dialog-modal-base>
</template>
<script>
import DialogModalBase from '~/components/Modals/DialogModalBase.vue'
import TSButton from '~/components/Buttons/TSButton.vue'
export default {
    name: 'ProfileModal',
    components: {
        DialogModalBase,
        TSButton
    },
    props: {
        dialog: {
            type: Boolean,
            default: false
        },
        ok: {
            type: Boolean,
            default: false
        },
        text1: {
            type: String,
            default: 'Texto-1'
        },
        text2: {
            type: String,
            default: 'Texto-2'
        },
        subtext1: {
            type: String,
            default: 'SubTexto-1'
        },
        subtext2: {
            type: String,
            default: 'SubTexto-2'
        }
    }
}
</script>