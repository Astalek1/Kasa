import './About.scss'
import AboutBannerImage from 'src/assets/Image-source-2.svg'
import Banner from 'src/components/Banner/Banner.jsx'
import AboutList from 'src/data/AboutList.json'
import Collapse from 'src/components/Collapse/Collapse.jsx'

function About() {
  return (
    <main>
      <>
        <div className="About">
          <Banner image={AboutBannerImage} />
        </div>

        {
          <div>
            {AboutList.map((item, index) => (
              <Collapse key={index} title={item.title} content={item.content} />
            ))}
          </div>
        }
      </>
    </main>
  )
}

export default About
