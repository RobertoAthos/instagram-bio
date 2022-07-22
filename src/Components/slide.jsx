import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import './styles.css'
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        <SwiperSlide><div className='boxSlider'>1</div></SwiperSlide>
        <SwiperSlide><div className='boxSlider'>2</div></SwiperSlide>
        <SwiperSlide><div className='boxSlider'>3</div></SwiperSlide>
        <SwiperSlide><div className='boxSlider'>4</div></SwiperSlide>
      </Swiper>
    );
  };