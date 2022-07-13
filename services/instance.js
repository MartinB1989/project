import axios from 'axios'

axios.defaults.baseURL = 'http://api-dev.trucostars.bet/api'

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  if (error.response.status === 401){
    localStorage.removeItem('authToken')
    alert('Su sesión ha expirado')
    // TODO: Cambiar la dirección por una variable de entorno
    window.location.href = "http://localhost:3000"
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axios