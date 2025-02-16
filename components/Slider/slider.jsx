
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { Mousewheel } from 'swiper/modules';
import { useState } from 'react';

export default function Slider() {
  const [backgroundImage, setBackgroundImage] = useState(0);

  const slides = [
    { id: 1, image: '/images/home.jpg', card: "LIVING" },
    { id: 2, image: '/images/room.jpg', card: "ROOM" },
    { id: 3, image: '/images/setting.jpg', card: "SETTING" },
    { id: 4, image: '/images/living.jpg', card: "LIVING" },
    { id: 5, image: '/images/kitchen.jpg', card: "KITCHEN" },
  ];

  const handleSlideChange = (swiper) => {
    setBackgroundImage(swiper.realIndex);
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 blur-sm"
        style={{ backgroundImage: `url(${slides[backgroundImage].image})` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className='text-center w-full text-3xl font-bold mb-8'>
          <p>DISCOVERING THE BEST FURNITURE TO YOUR...</p>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3.7}
          spaceBetween={35}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={handleSlideChange}
          modules={[Mousewheel]}
          mousewheel={true}
          className="mySwiper w-full max-w-screen-xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
                
              <div className="flex flex-col items-center justify-center h-full p-1 bg-white">
              {/* <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{slide.card}</h3>
                </div> */}
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-max object-center"
                />
             
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


