import axios from "./instance";

const configToken = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}
async function getUserDataProfile(id, userToken) {
  try {
    const res = await axios.get(`usuarios/${id}`, configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function getValidationState(userId, userToken) {
  try {
    const res = await axios.get(`usuarios/archivos_validacion/${userId}`, configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function updateProfile(params, userId ,userToken) {
  try {
    const res = await axios.put(`usuarios/${userId}`, params, configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function updatePassword(params, userId, userToken) {
  try {
    const res = await axios.post(`usuarios/${userId}/actualizar_password`, {
      'contraseña_actual': params.contrasena,
      'nueva_contraseña': params.newContrasena,
      'confirmar_contraseña': params.repeatContrasena
    } ,configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function updateAvatar(userId, userToken, avatar) {
  try {
    const res = await axios.post(`usuarios/actualizar_avatar_perfil/${userId}`, {
      avatar_img_perfil: avatar
    } ,configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function validateIdentity(params, userId, userToken) {
  try {
    const res = await axios.post(`usuarios/validar_identidad/${userId}`, params ,configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function updateDirection(params, userId, userToken) {
  try {
    const res = await axios.post(`/usuarios/actualizar_direccion/${userId}`, params ,configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

export {
  updateProfile,
  getUserDataProfile,
  updatePassword,
  updateAvatar,
  updateDirection,
  validateIdentity,
  getValidationState
}