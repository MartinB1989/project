import axios from "./instance";

const configToken = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

async function getAllLocation() {
    try {
        const res = await axios.get('/paises/provincias/localidades')
        return res
    } catch (err) {
        throw err.response
    }
}

export { getAllLocation }