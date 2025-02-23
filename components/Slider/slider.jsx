

"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Mousewheel } from 'swiper/modules';
import { useState } from 'react';

export default function Slider() {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

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

  const handleActiveIndexChange = (swiper) => {
    setActiveCard(swiper.realIndex);
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${slides[backgroundImage].image})` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className='text-center w-full text-xl md:text-3xl font-bold mb-4 md:mb-8'>
          <p>DISCOVERING THE BEST FURNITURE TO YOUR...</p>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
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
          onSlideChange={handleSlideChange}
          onActiveIndexChange={handleActiveIndexChange}
          modules={[Mousewheel]}
          mousewheel={true}
          className="mySwiper w-full max-w-screen-xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div 
                className={`relative flex flex-col items-center justify-center transition-transform duration-500 ${activeCard === index ? ' border-4 border-white z-20' : ''}`}
              >
                <img 
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className={`object-cover ${activeCard===index?'w-full h-full' :'w-60 h-60 m-12'}`}
                />
                {activeCard === index && (
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
                    <h3 className="text-2xl md:text-5xl font-bold text-black">
                      {slide.card}
                    </h3>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

///////////////////////////////////////////////////////
// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import { EffectCoverflow, Mousewheel } from 'swiper/modules';
// import { useState } from 'react';

// export default function Slider() {
//   const [backgroundImage, setBackgroundImage] = useState(0);
//   const [activeCard, setActiveCard] = useState(0);

//   const slides = [
//     { id: 1, image: '/images/home.jpg', card: "LIVING" },
//     { id: 2, image: '/images/room.jpg', card: "ROOM" },
//     { id: 3, image: '/images/setting.jpg', card: "SETTING" },
//     { id: 4, image: '/images/living.jpg', card: "LIVING" },
//     { id: 5, image: '/images/kitchen.jpg', card: "KITCHEN" },
//   ];

//   const handleSlideChange = (swiper) => {
//     setBackgroundImage(swiper.realIndex);
//   };

//   const handleActiveIndexChange = (swiper) => {
//     setActiveCard(swiper.realIndex);
//   };

//   return (
//     <div className="relative h-screen">
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-all duration-500 blur-sm"
//         style={{ backgroundImage: `url(${slides[backgroundImage].image})` }}
//       />
//       <div className="relative z-10 flex flex-col items-center justify-center h-full">
//         <div className='text-center w-full text-xl md:text-3xl font-bold mb-4 md:mb-8'>
//           <p>DISCOVERING THE BEST FURNITURE TO YOUR...</p>
//         </div>
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={1.5}
//           spaceBetween={10}
//           loop={true}
//           breakpoints={{
//             640: {
//               slidesPerView: 1.5,
//               spaceBetween: 10,
//             },
//             768: {
//               slidesPerView: 2.5,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 3.5,
//               spaceBetween: 30,
//             },
//             1280: {
//               slidesPerView: 4.5,
//               spaceBetween: 35,
//             },
//           }}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           onSlideChange={handleSlideChange}
//           onActiveIndexChange={handleActiveIndexChange}
//           modules={[EffectCoverflow, Mousewheel]}
//           mousewheel={true}
//           className="mySwiper w-full max-w-screen-xl px-4"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={slide.id}>
//               <div 
//                 className={`relative flex flex-col items-center justify-center transition-transform duration-500 ${activeCard === index ? ' border-4 border-white z-20' : ''}`}
//               >
//                 <img 
//                   src={slide.image}
//                   alt={`Slide ${slide.id}`}
//                   className={`object-cover ${activeCard===index?'w-full h-full' :'w-60 h-60 m-12'}`}
//                 />
//                 {activeCard === index && (
//                   <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
//                     <h3 className="text-2xl md:text-5xl font-bold text-black">
//                       {slide.card}
//                     </h3>
//                   </div>
//                 )}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }


/////////////////////////////////////////////////////////////