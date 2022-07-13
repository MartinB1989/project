<template>
  <div class="d-flex align-center justify-center">
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="34" y="34" width="12" height="12" rx="2" :fill="lvl[0]"/>
      <rect x="17" y="34" width="12" height="12" rx="2" :fill="lvl[1]"/>
      <rect y="34" width="12" height="12" rx="2" fill="#EFAD2D"/>
      <rect x="34" y="17" width="12" height="12" rx="2" :fill="lvl[3]"/>
      <rect x="17" y="17" width="12" height="12" rx="2" :fill="lvl[4]"/>
      <rect x="34" width="12" height="12" rx="2" fill="#9B9EAB"/>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'Levels',
  props: {
    level: {
      type:String,
      default: 'easy'
      // Can be 'easy', 'normal' and 'expert'
    }
  },
  data () {
    return {
      lvl: []
    }
  },
  created () {
    if(this.level == 'easy') {
      this.lvl = ['#9B9EAB', '#9B9EAB','#EFAD2D','#9B9EAB','#9B9EAB', '#9B9EAB']
    }
    else if(this.level == 'normal') {
      this.lvl = ['#9B9EAB', '#EFAD2D','#EFAD2D','#EFAD2D','#9B9EAB', '#9B9EAB']
    }
    else {
      this.lvl = ['#EFAD2D','#EFAD2D','#EFAD2D','#EFAD2D','#EFAD2D','#EFAD2D']
    }
  }
}
</script>