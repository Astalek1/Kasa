import Housing from 'src/data/data.json'
import HousingCard from 'src/components/Cards/Cards.jsx'
import './Home.scss'
import Banner from 'src/components/Banner/Banner.jsx'
import HomeBannerImage from 'src/assets/Image-source-1.svg'

function Home() {
  return (
    <>
      <main>
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
      </main>
    </>
  )
}

export default Home
