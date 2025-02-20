// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/mousewheel';
// import { Mousewheel } from 'swiper/modules';
// import { useState } from 'react';

// export default function Slider() {
//   const [backgroundImage, setBackgroundImage] = useState(0);
//   const [activeCard, setActiveCard] = useState(0);

//   const slides = [
//     { id: 1, image: '/images/home.jpg', card: "HOME" },
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
//         <div className='text-center w-full text-3xl font-bold mb-8'>
//           <p>DISCOVERING THE BEST FURNITURE TO YOUR...</p>
//         </div>
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={3.7}
//           spaceBetween={35}
//           loop={true}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           onSlideChange={handleSlideChange}
//           onActiveIndexChange={handleActiveIndexChange}
//           modules={[Mousewheel]}
//           mousewheel={true}
//           className="mySwiper w-full max-w-screen-xl"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={slide.id}>
//               <div 
//                 className={`relative flex flex-col items-center justify-center h-full  transition-transform duration-500 ${activeCard === index ? 'scale-125 border-2 border-white z-20' : 'scale-75'}`}
//               >
//                 <img
//                   src={slide.image}
//                   alt={`Slide ${slide.id}`}
//                   className="w-full h-full object-cover"
//                 />
//                 {activeCard === index && (
//                   <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
//                     <h3 className="text-5xl font-bold text-black">
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

//responsive

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
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 blur-sm"
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
                className={`relative flex flex-col items-center justify-center h-full transition-transform duration-500 ${activeCard === index ? 'scale-110 md:scale-125 border-2 border-white z-20' : 'scale-75 md:scale-90'}`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-60 h-full object-cover"
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