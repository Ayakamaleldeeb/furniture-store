"use client";
// import React, { useRef, useState } from 'react';
import 'swiper/swiper-bundle.css';
// import  { Autoplay, EffectCoverflow } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Ourservices = () => {
  
//     const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
  return (
<>
<div className="min-h-screen flex flex-col items-center ">
      <div className="p-8 max-w-2xl w-full text-center flex flex-col">
        <h1 className="text-4xl  text-black mb-6 ">Our Services</h1>
        <div className=' flex justify-center'>
        <p className="text-black opacity-95 mb-4 text-left">
          Our Store Provides You With The Finest Types
          <br/>Of Furniture And All Models <br/>
               We Also Have The Best Interior Designers,
          <br/>Allowing You To Design Your Entire Home 
          <br/>By The Most Skilled Designers
        </p>
        </div>
  
        <button className="bg-black w-32 m-auto  text-white px-6 py-2 rounded-lg hover:bg-zinc-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>


    {/* <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.5}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768:{
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        1280: {
        slidesPerView: 4.5,
        spaceBetween: 35,
        },
    }}
    coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }}
    // onAutoplayTimeLeft={onAutoplayTimeLeft}
    className="mySwiper w-full max-w-screen-xl"
    >
      <SwiperSlide>
        <div className="relative flex flex-col items-center justify-center transition-transform duration-500">
          <img src="/images/room1.jpg" alt="slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex flex-col items-center justify-center transition-transform duration-500">
          <img src="/images/home.jpg" alt="slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex flex-col items-center justify-center transition-transform duration-500">
          <img src="/images/room1.jpg" alt="slide 3" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex flex-col items-center justify-center transition-transform duration-500">
          <img src="/images/room1.jpg" alt="slide 4" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex flex-col items-center justify-center transition-transform duration-500">
          <img src="/images/room1.jpg" alt="slide 5" />
        </div>
      </SwiperSlide>
    </Swiper>  */}

    </>

  );
};

export default Ourservices;