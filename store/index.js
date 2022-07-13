export const state = () => ({
  userType: 'player',
  userId:'',
  userData:{},
  token:'',
  loader: false,
  alert: {
    visible: false,
    message: '',
    color: ''
  },
  claims_category: ''
})
export const mutations = {
  setUserType(state, currentUserType) {
    state.userType = currentUserType
  },
  setToken(state, token) {
    state.token = token
  },
  setLoader(state, loader) {
    state.loader = loader
  },
  setAlert(state, alertObj) {
    state.alert = alertObj
  },
  setUserId(state, id) {
    state.userId = id
  },
  setUserData(state, data){
    state.userData = data
  },
  setClamsCategory(state, category) {
    state.claims_category = category
  },
  /*####################################################
    DATOS DE USUARIO
  #######################################################*/
  setName(state, value) {
    state.userData.usuario.nombre = value
  },
  setLastName(state, value) {
    state.userData.usuario.apellido = value
  },
  setDni(state, value) {
    state.userData.usuario.dni = value
  },
  setPhone(state, value) {
    state.userData.usuario.telefono = value
  },
  setEmail(state, value) {
    state.userData.usuario.email = value
  },
  setUsuario(state, value) {
    state.userData.usuario.usuario = value
  },
  /*setTodoLoDeArribaAlMismoTiempo()*/
  setBasicDataProfile(state, value) {
    state.userData.usuario.nombre = value.nombre
    state.userData.usuario.apellido = value.apellido
    state.userData.usuario.dni = value.dni
    state.userData.usuario.telefono = value.telefono
    state.userData.usuario.email = value.email
    state.userData.usuario.usuario = value.usuario
    state.userData.usuario.codigo_pais = value.codigo_pais
  },
  setAddress(state, value) {
    state.userData.usuario.calle = value.calle
    state.userData.usuario.numero = value.numero
    state.userData.usuario.piso_depto = value.piso_depto
    state.userData.usuario.id_pais = value.id_pais
    state.userData.usuario.id_provincia = value.id_provincia
    state.userData.usuario.id_localidad = value.id_localidad
  },
  setLocationData(state, value) {
    state.userData.usuario.pais.nombre = value.pais
    state.userData.usuario.provincia.nombre = value.provincia
    state.userData.usuario.localidad.localidad = value.localidad
  },
  setProfileImg(state, img) {
    state.userData.usuario.avatar_img_perfil = img
  },
  setValidation(state, value) {
    state.userData.usuario.validacion = value
  },
  /*####################################################
    FIN DATOS DE USUARIO
  #######################################################*/
  resetState(state) {
    state.token = ''
    state.alert = { visible: false, message: '', color: '' }
    state.userData = {}
  }
}

export const actions = {
  signOut({commit}) {
    commit('resetState')
  },
  addToken({commit}, token) {
    commit('setToken', token)
  },
  addAlert({commit}, obj) {
    commit('setAlert', obj)
    setTimeout(() => {
      commit('setAlert', {visible: false, message: '', color: ''})
    },5000)
  },
  addUserId({commit}, id) {
    commit('setUserId', id)
  },
  addUserData({commit}, data) {
    commit('setUserData', data)
  },
  addClaimsCategory({commit, value}){
    commit('setClaimsCategory', value)
  },
  changeUserType({commit}, currentUserType) {
    commit('setUserType', currentUserType)
  },
  changeAddress({commit}, value) {
    commit('setAddress', value)
  },
  changeLoader({commit}, loader) {
    commit('setLoader', loader)
  },
  changeProfileImg({commit}, newImg) {
    commit('setProfileImg', newImg)
  },
  changeBasicDataProfile({commit}, data) {
    commit('setBasicDataProfile', data)
  },
  changeValidationNumber({commit}, data) {
    commit('setValidation', data)
  },
  changeLocation({commit}, data) {
    commit('setLocationData', data)
  },
  removeToken({commit}, token) {
    commit('setToken', token)
  },
}

export const getters = {
  getUserType: (state) => state.userType,

  getToken: (state) => state.token,

  getLoader: (state) => state.loader,

  getAlert: (state) => state.alert,

  getUserId: state => state.userId,

  getUserName: state => state.userData.usuario.nombre,

  getUserLastName: state => state.userData.usuario.apellido,

  getUserDni: state => state.userData.usuario.dni,

  getTipoDoc: state => state.userData.usuario.id_tipo_documento,

  getUsuario: state => state.userData.usuario.usuario,

  getPhone: state => state.userData.usuario.telefono,

  getEmail: state => state.userData.usuario.email,

  getProfileImg: state => state.userData.usuario.avatar_img_perfil,

  getClaimsCategory: state => state.claims_category,

  getCodigoPais: state => state.userData.usuario.codigo_pais,

  getPaisId: state => state.userData.usuario.id_pais,

  getProvinciaId: state => state.userData.usuario.id_provincia,

  getLocalidadId: state => state.userData.usuario.id_localidad,

  getCalle: state => state.userData.usuario.calle,

  getNumero: state => state.userData.usuario.numero,

  getPisoDepto: state => state.userData.usuario.piso_depto,

  getValidacion: state => state.userData.usuario.validacion,

  getNombrePais: state => state.userData.usuario.pais.nombre,

  getNombreProvincia: state => state.userData.usuario.provincia.nombre,

  getNombreLocalidad: state => {
    if(state.userData.usuario.localidad != null) {
      return state.userData.usuario.localidad.localidad
    }
    return null
  }


}
