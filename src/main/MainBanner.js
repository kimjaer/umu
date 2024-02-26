import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

export default function MainBanner({uudata}) {
  // props.uudata가 없거나 props.uudata.mainBanner가 없는 경우 빈 배열로 초기화
  // const mainBannerData = props.uudata.mainBanner || [];

  return (
    <>
      <Swiper
        centeredSlides={true}
        loop={true}
        effect={'fade'}
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper umuswiper"
      >
        {/* mainBannerData가 빈 배열인 경우에도 에러 방지를 위해 추가적인 처리 */}
        {uudata.map((e, i) => (
          <SwiperSlide key={i} className='w-1440'>
            <div className=' umubi d-flex justify-content-center'>
              <img src={e.bimg} alt=""/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
