export function showAlert(type = null) {
  createAlertContent()
  const div = document.getElementById('alerts')
  const fondo = document.createElement('div')
  fondo.className = 'w-[100vw] h-[100dvh] absolute z-10 bg-black/50'

  div.className = 'w-[100vw] h-[100dvh] absolute z-10 bg-black/50'
}

function createAlertContent() {
  if (document.getElementById('alerts')) {
    return
  }

  const body = document.body

  const div = document.createElement('div')
  div.id = 'alerts'

  body.appendChild(div)
}
