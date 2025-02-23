import { createPortal } from 'react-dom'

export const Show = () => {
  return createPortal(
    <>hello 3</>,
    document.getElementById('alerts')
  )
}

export const Alerts = () => {
  return createPortal(
    <>hello 2</>,
    document.getElementById('alerts')
  )
}
