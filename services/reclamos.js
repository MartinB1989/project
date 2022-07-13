import axios from "./instance";

const configToken = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

async function getAllClaims(userToken, userId) {
  try {
    const res = await axios.get(`/reclamos/usuario/${userId}`, configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function getClaim(userToken, claimId) {
  try {
    const res = await axios.get(`/reclamos/mensajes/${claimId}`, configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function changeClaimState(userId, userToken, idState) {
  try {
    const res = await axios.post(`/reclamos/cambiar_estado/${userId}`, {id_estado: idState} ,configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function addMessage(claimId, userToken, data) {
  try {
    const res = await axios.post(`/reclamo_mensaje/${claimId}`, data ,configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

async function newClaim(category, userId, userToken) {
  try {
    const res = await axios.post(`/reclamos`, {
      id_categoria: category,
      id_usuario: userId
    } ,configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}






export { getAllClaims, changeClaimState, addMessage, getClaim, newClaim }