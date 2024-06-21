
import './HomePage.css'
import Static from '../../Components/Static/Static'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer.jsx'
import NavBar from '../../Components/NavBar/NavBar'
export default function HomePage() {

  return (
  
    <div className="main">
    <Header></Header>
    <NavBar></NavBar>
    <div className="bgVid">
      <video style={{width:'100vw'}} loop={true} autoPlay={true} id="vid" src="K23AU08165_HeroGreenVideo2_HAL_16x9.mp4" >
      </video>
      <div className="content">
        <a id="content-head">Forever in Color</a>
        <p>
          With our friends at Flamingo Estate, we’re celebrating the revival
          of three nature-inspired shades of green.
        </p>
        <a href="">Explore the Partnership</a>
        <a href="">Shop the Colors</a>
      </div>
    </div>
    
    <Static />
      <Footer />
    </div>
  )
}
