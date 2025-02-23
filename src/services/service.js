import { VITE_API_URL } from '../config'

export const create = async ({ url }) => {

  const result = await fetch(`${VITE_API_URL}/api/new`, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({ url })
  })

  return result.json()

}

export const findSnip = async ({ id }) => {
  const result = await fetch(`${VITE_API_URL}/api/${id}`, {
    method: 'GET',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return result.json()
}