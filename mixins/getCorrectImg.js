export default {
  methods:{
    getCorrectImg(img) {
      if(img != '' && img != null) {
        return `http://api-dev.trucostars.bet${img}`
      } else {
        return 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
      }
    }
  }
}