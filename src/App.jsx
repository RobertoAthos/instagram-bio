import React from 'react'
import profile from './assets/foto12.jpg'
import {FaSpotify,FaWhatsapp,FaSoundcloud} from 'react-icons/fa'
import { SlideCarroussel } from './Components/slide'



function App() {

  return (
      <>
        <div className="header"></div>
        <div className="main-container">
            <div className="header-container">
              <div className="img"><img src={profile} alt="foto de perfil" /></div>
              <div className="text">
                <h2>RoberTnoBeat</h2>
                <span>beatmaker</span>
                <div className="btns">
                  <button id='active'><a href="#">Seguir +</a></button>
                  <button id='youtube'><a href="#">Youtube</a></button>
                </div>
              </div>
            </div>
            <section className="feature">
              <h3>features</h3>
              <div className="cards-container">
                <div className="card">
                  <label>Beats 100% FREE</label>
                </div>
                <div className="card">
                <label>Beats 100% FREE V2</label>
                  </div>
              </div>
            </section>

            <section className='services'>
              <h3>Services</h3>
              <div className="services-container">
              <SlideCarroussel/>
              </div>
            </section>

            <section className="more">
                <h3>More</h3>
                <div className="more-container">
                    <div className="option">
                      <FaSpotify className='icon'/>
                      <div className="text-container"><p>Spotify</p></div>
                    </div>
                    <div className="option">
                      <FaWhatsapp className='icon'/>
                      <div className="text-container"><p>WhatsApp</p></div>
                    </div>
                    <div className="option">
                      <FaSoundcloud className='icon'/>
                      <div className="text-container"><p>SoundCloud</p></div>
                    </div>
                </div>
              </section>
        </div>
        </>
  )
      
}

export default App
