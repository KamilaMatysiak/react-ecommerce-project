import { BACKEND_URL } from "../constants/api"

export function productDetailsLoader({ params: { productId } }) {
  return fetch(`${BACKEND_URL}/products/${productId}`)
}
