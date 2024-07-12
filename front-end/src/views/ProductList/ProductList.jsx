import { FlexContainer } from "../../components/FlexContainer/FlexContainer"
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu"
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { Products } from "../../components/Products/Products"
import { Pagination } from "../../components/Pagination/Pagination"
import { useLoaderData, useParams } from "react-router-dom"
import { CATEGORIES } from "../../constants/categories"

export const ProductList = () => {
  const { products, numberOfPages } = useLoaderData()
  const params = useParams()
  const foundCategory = CATEGORIES.find((c) => c.path === params.category)
  let foundSubcategory
  if (params.subcategory) {
    foundSubcategory = foundCategory.subcategories.find(
      (s) => s.path === params.subcategory
    )
  }
  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products
          products={products}
          headerText={
            foundSubcategory ? foundSubcategory.name : foundCategory.name
          }
        />
        <Pagination numberOfPages={numberOfPages} />
      </div>
    </FlexContainer>
  )
}
