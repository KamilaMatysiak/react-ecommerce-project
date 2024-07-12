import { CenteredContent } from "../CenteredContent/CenteredContent"
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct"
import styles from "./FavouritesList.module.css"

export const FavouritesList = ({ favourites }) => {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        {favourites.map((favourite) => (
          <FavouriteProduct key={favourite.id} favourite={favourite} />
        ))}
      </div>
    </CenteredContent>
  )
}
