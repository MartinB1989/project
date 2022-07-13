<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" :md="colsSearch" class="d-flex align-center">
        <h1 v-if="isSearch" class="headline-6 color-negro-2">{{title}}</h1>
        <slot v-if="isSearch" name="nextTitle"></slot>
        <div v-else class="w-50">
          <v-text-field
            dense
            v-model="localSearch"
            prepend-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            :color="color_negro2"
          >
            <template slot="append-outer">
              <v-icon @click="closeSearch()">mdi-close</v-icon>
            </template>
          </v-text-field>
        </div>
      </v-col>
      <slot name="chips"></slot>
      <v-col cols="4" class="d-flex justify-end align-center">
        <v-icon class="mx-1 pointer" v-if="canSearch" :color="color_negro2" size="24" @click="wantSearch">mdi-magnify</v-icon>
        <v-icon class="mx-1 pointer" v-if="canDownload" :color="color_negro2" size="24" @click="$emit('onDownload')">mdi-download</v-icon>
        <v-icon class="mx-1 pointer" v-if="canPrint" :color="color_negro2" size="24">mdi-printer</v-icon>
        <div v-if="canFilter" class="box-icons d-flex justify-center">
          <v-icon class="mx-1 pointer " :color="color_negro2" size="24" @click="$emit('onFilter')">mdi-filter-variant</v-icon>
          <slot name="filters"></slot>
<!--           <div v-show="isFiltering" class="filters-box bxs-8px br-8px">
            <FiltersBox
              :selectDateDisable="filterByDate"
              @close="showFilters"
            >
            </FiltersBox>
          </div> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import variables from '@/mixins/variables.js'
import FiltersBox from '~/components/Tables/FiltersBox.vue'
export default {
  name: 'TopTable',
  mixins: [variables],
  components: {
    FiltersBox
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    search: '',
    canSearch : {
      type:Boolean,
      default: true
    },
    canPrint : {
      type:Boolean,
      default: true
    },
    canDownload : {
      type:Boolean,
      default: true
    },
    canFilter : {
      type:Boolean,
      default: true
    },
    colsSearch: {
      type: String,
      default: '8'
    },
    filterByDate: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      localSearch: this.search,
      isSearch: true,
      isFiltering: false
    }
  },
  methods: {
    wantSearch() {
      this.isSearch = !this.isSearch
    },
    showFilters() {
      this.isFiltering = !this.isFiltering
    },
    closeSearch() {
      this.isSearch = true
      this.localSearch = ''
    }
  },
  watch: {
    localSearch (newValue) {
      this.$emit('input', newValue)
    },
    search (newValue) {
      this.localValue = newValue
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width:280px) {
  .box-icons {
    position: relative;
  }
  .filters-box {
    background-color: #ffffff;
    position: absolute;
    top:-1;
    right: 0;
    width:60vw;
    z-index: 99;
  }
}
</style>