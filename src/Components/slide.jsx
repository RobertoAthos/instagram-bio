import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import './styles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {CgPiano} from 'react-icons/cg'
import {BiHeadphone} from 'react-icons/bi'

export const SlideCarroussel = () => {
    return (
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <div className='boxSlider'>
                <div className="icon"><CgPiano/></div>
                <div className="text">
                    <h3>Beats Exclusivos</h3>
                    <p>Tenha o beat do seu jeito, busque a referência que quiser.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='boxSlider'>
            <div className="icon"><BiHeadphone/></div>
                <div className="text">
                    <h3>Mixagem/Masterização</h3>
                    <p>mixagem e masterização da mais alta qualidade</p>
                </div>
            </div>
            </SwiperSlide>
      </Swiper>
    );
  };