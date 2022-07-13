export default function ({store, redirect}) {
  const isLogged = window.localStorage.getItem('authToken')
  if(!isLogged) {
    console.log(isLogged)
    return redirect('/')
  }
}
