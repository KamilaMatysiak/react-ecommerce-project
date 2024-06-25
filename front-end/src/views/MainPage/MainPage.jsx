import { Hero } from '../../components/Hero/Hero'
import { Layout } from '../../components/Layout/Layout'
import COVER_IMG from '../../assets/img/cover.jfif'

export const MainPage = () => {
  return (
    <Layout>
      <Hero heroImg={COVER_IMG} />
    </Layout>
  )
}
