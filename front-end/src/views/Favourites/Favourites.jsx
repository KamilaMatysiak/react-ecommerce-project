import { useLoaderData } from "react-router-dom"
import { FavouritesList } from "../../components/FavouritesList/FavouritesList"

export const Favourites = () => {
  const favourites = useLoaderData()
  return <FavouritesList favourites={favourites} />
}
