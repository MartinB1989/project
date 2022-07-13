import axios from "./instance";

async function register(params) {
  try {
    const res = await axios.post('/registro', {
      nombre: params.nombre,
      apellido: params.apellido,
      usuario: params.usuario,
      contraseña: params.contrasena,
      email: params.email,
      id_pais: params.id_pais,
      id_provincia: params.id_provincia,
      avatar_img_perfil: params.avatar_img_perfil
    })
    return res
  } catch (err) {
    throw err.response
  }
}

export { register }