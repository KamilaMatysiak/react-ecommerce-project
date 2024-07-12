import { redirect } from "react-router-dom"
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api"
import { CATEGORIES } from "../constants/categories"

export function productListLoader({
  params: { gender, category, subcategory },
  request,
}) {
  const foundCategory = CATEGORIES.find((c) => c.path === category)
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender]
  if (foundCategory && foundGender) {
    let url = `${BACKEND_URL}/products/?gender=${foundGender}&category=${category}`
    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories.find(
        (s) => s.path === subcategory
      )
      if (foundSubcategory) url = `${url}&subcategory=${subcategory}`
      else return redirect("/kobieta")
    }

    const pageUrl = new URL(request.url)
    const page = pageUrl.searchParams.get("page") || 1
    url = `${url}&_limit=8&_page=${page}`

    return fetch(url).then((res) => {
      const numberOfPages = Math.ceil(
        Number(res.headers.get("X-Total-Count")) / 8
      )

      return res.json().then((products) => {
        return {
          products: products,
          numberOfPages: numberOfPages,
        }
      })
    })
  } else return redirect("/kobieta")
}
