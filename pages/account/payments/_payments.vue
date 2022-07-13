<template>
    <v-container fluid class="ma-0 pa-0">
        <account-header-two
          title="Pagos"
        />

        <div class="max-w2 mx-auto">
            <v-row class="ma-0 pa-0 w-100">
                <v-col cols="7" class="pa-4" >
                    <v-row class="ma-0 pa-4 br-8px bg-exito-2 w-100">
                        <v-col cols="6" class="pa-0 ma-0">
                            <p class="headline-6">
                                Saldo en tu cuenta
                            </p>
                            <TSButton
                                btnType="ts-btn-negro-2"
                                text="Agregar saldo"
                                :link="true"
                                to="/account/payments/add-funds"
                            />
                        </v-col>
                        <v-col cols="6" class="pa-0 ma-0 d-flex align-center justify-end">
                            <p class="headline-4">
                                $ 3.700,00
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="5" class="pa-4">
                    <div class="bg-white pa-4 h-100 br-8px">
                        <p class="headline-6">
                            Tarjeta de crédito/débito
                        </p>
                        <TSButton
                            btnType="ts-btn-primary"
                            text="Gestionar"
                            :disabled="true"
                        />
                    </div>

                </v-col>

                <v-col cols="12">
                    <MovementTable/>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
import TSButton from '~/components/Buttons/TSButton.vue'
import AccountHeaderTwo from '~/components/Header/AccountHeaderTwo.vue'
import MovementTable from '~/not_common/account/payments/MovementTable.vue'

export default {
    layout: 'account',
    components: {
        AccountHeaderTwo,
        TSButton,
        MovementTable
    }
}
</script>