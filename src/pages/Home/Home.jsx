//import Logements from 'src/data/data.json'
import './Home.scss'
import Banner from 'src/components/Banner/Banner.jsx'
import homeBannerImage from 'src/assets/Image-source-1.svg'

function Home() {
  return (
    <>
      <div className="Home">
        <Banner
          image={homeBannerImage}
          title="Chez vous, partout et ailleurs"
        />
      </div>
    </>
  )
}

export default Home
