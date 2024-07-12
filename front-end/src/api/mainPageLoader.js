import { redirect } from "react-router-dom"
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api"

export function mainPageLoader({ params }) {
  const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender]
  if (backEndPath) {
    return fetch(`${BACKEND_URL}/${backEndPath}`)
  } else return redirect("/kobieta")
}
