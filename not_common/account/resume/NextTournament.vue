<template>
  <div>
    <v-row class="w-100 ma-0 pa-0">
      <v-col cols="2" class="pa-0">
        <div class="vertical pr-2">
          <p class="f-body-1 text-bold mb-1 text-right">16:22</p>
          <p class="f-caption color-negro-4 ma-0 text-right">18/02/2200</p>
        </div>

      </v-col>
      <v-col cols="9" class="pa-0">
        <p class="f-body-1 text-bold ma-0 pl-2">Torneo semanal</p>
        <p class="f-body-1  ma-0 pl-2">1 vs 1</p>
      </v-col>
      <v-col cols="1" class="d-flex justify-center align-center pa-0">
        <v-icon size="24" color="#272936">mdi-chevron-right</v-icon>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.vertical {
  border-right: 3px solid $acento1;
}
</style>
