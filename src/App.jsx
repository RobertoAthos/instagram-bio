import React from 'react'
import profile from './assets/foto12.jpg'
import background from './assets/wallpaper.webp'
import {FaSpotify,FaWhatsapp,FaSoundcloud} from 'react-icons/fa'
import { SlideCarroussel } from './Components/slide'
import freeBeat from './assets/free beat img.jpg'
import tue from './assets/tue.jpg'



function App() {

  return (
      <>
        <div className="header">
          <img src={background} alt='bakgound'/>
        </div>
        <div className="main-container">
            <div className="header-container">
              <div className="img"><img src={profile} alt="foto de perfil" /></div>
              <div className="text">
                <h2>RoberTnoBeat</h2>
                <span>beatmaker</span>
                <div className="btns">
                  <button id='active'><a href="https://www.instagram.com/robertnobeat_oficial/">Seguir +</a></button>
                  <button id='youtube'><a href="https://www.youtube.com/channel/UC-Xnqfp5_pJit2c1A55Fe6A">Youtube</a></button>
                </div>
              </div>
            </div>
            <section className="feature">
              <h3>features</h3>
              <div className="cards-container">
                <div className="card">
                 <a href="https://soundcloud.com/robertnobeat/sets/beat-tape-2-1">
                 <img src={freeBeat} alt="image1" />
                  <span>Beats 100% FREE</span>
                 </a>
                </div>
                <div className="card">
                <a href="https://soundcloud.com/robertnobeat/sets/beat-tape-1-50-de-desconto">
                <img src={tue} alt="image2" />
                <span>Beats promocionais</span>
                </a>
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
                     <a href="https://open.spotify.com/artist/2I4b92k4VhozkXpK6FG5L0">
                     <FaSpotify className='icon'/>
                      <div className="text-container"><p>Spotify</p></div>
                     </a>
                    </div>
                    <div className="option">
                        <a href="https://wa.me/73999335493">
                        <FaWhatsapp className='icon'/>
                      <div className="text-container"><p>WhatsApp</p></div>
                        </a>
                    </div>
                    <div className="option">
                          <a href="https://soundcloud.com/robertnobeat">
                          <FaSoundcloud className='icon'/>
                      <div className="text-container"><p>SoundCloud</p></div>
                          </a>
                    </div>
                </div>
              </section>
        </div>
        </>
  )
      
}

export default App
