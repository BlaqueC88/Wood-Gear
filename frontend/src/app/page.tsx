
import Banner from "@src/features/home/Banner/Banner"
import { FeaturedProducts } from "@src/features/home/FeaturedProducts/FeaturedProducts"
import { TopCategories } from "@src/features/home/TopCategories/TopCategories"

export default function Home() {
  return (
    <div>
      <Banner />
      <TopCategories />
      <FeaturedProducts title={"Best Deals for You"} />
      <FeaturedProducts title={"Most Selling Products"} />
      <FeaturedProducts title={"Trending Products"} />
    </div>
  )
}
