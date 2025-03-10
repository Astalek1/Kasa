import Housing from 'src/data/data.json'
import HousingCard from 'src/components/Cards/Cards.jsx'
import './Home.scss'
import Banner from 'src/components/Banner/Banner.jsx'
import HomeBannerImage from 'src/assets/Image-source-1.webp'

function Home() {
  return (
    <>
      <div className="Home">
        <Banner
          image={HomeBannerImage}
          title="Chez vous, partout et ailleurs"
        />
      </div>
      <div className="Card-container">
        {Housing.map((Housing) => (
          <HousingCard
            key={Housing.id}
            id={Housing.id}
            title={Housing.title}
            cover={Housing.cover}
          />
        ))}
      </div>
    </>
  )
}

export default Home
