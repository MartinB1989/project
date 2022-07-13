<template>
  <v-container fluid>
    <div class="mb-6 py-8 px-6">
      <simple-breadcrumb
        link="/account/resume/"
        back="Resumen"
        actual="Ganancias"
      />
    </div>
    <v-row>
      <v-col cols="4">
        <ProfitsCard
          title="Saldo"
          text="$ 100.000"
          bgColor="#ffffff"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <GainTable/>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
import ProfitsCard from '@/components/Cards/ProfitsCard.vue'
import GainTable from '~/not_common/account/resume/GainTable.vue'
import SimpleBreadcrumb from '~/components/Breadcrumb/SimpleBreadcrumb.vue'
export default {
  layout:'account',
  components: {
    ProfitsCard,
    GainTable,
    SimpleBreadcrumb
  }
}
</script>
