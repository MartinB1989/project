import axios from "./instance";

const configToken = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

async function signIn(params) {
  try {
    const res = await axios.post('login', {
      usuario: params.usuario,
      password: params.contrasena
    })
    return res
  } catch (err) {
    throw err.response
  }
}

async function signOut(userToken) {
  try {
    const res = await axios.post('/logout', {}, configToken(userToken))
    return res
  } catch (err) {
    throw err.response
  }
}

export {signIn, signOut}