

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
//         className="absolute inset-0 bg-cover bg-center transition-all duration-500"
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
//           modules={[Mousewheel]}
//           mousewheel={true}
//           className="mySwiper w-full max-w-screen-xl"
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

// ///////////////////////////////////////////////////////
// // "use client";
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// // import { EffectCoverflow, Mousewheel } from 'swiper/modules';
// // import { useState } from 'react';

// // export default function Slider() {
// //   const [backgroundImage, setBackgroundImage] = useState(0);
// //   const [activeCard, setActiveCard] = useState(0);

// //   const slides = [
// //     { id: 1, image: '/images/home.jpg', card: "LIVING" },
// //     { id: 2, image: '/images/room.jpg', card: "ROOM" },
// //     { id: 3, image: '/images/setting.jpg', card: "SETTING" },
// //     { id: 4, image: '/images/living.jpg', card: "LIVING" },
// //     { id: 5, image: '/images/kitchen.jpg', card: "KITCHEN" },
// //   ];

// //   const handleSlideChange = (swiper) => {
// //     setBackgroundImage(swiper.realIndex);
// //   };

// //   const handleActiveIndexChange = (swiper) => {
// //     setActiveCard(swiper.realIndex);
// //   };

// //   return (
// //     <div className="relative h-screen">
// //       <div
// //         className="absolute inset-0 bg-cover bg-center transition-all duration-500 blur-sm"
// //         style={{ backgroundImage: `url(${slides[backgroundImage].image})` }}
// //       />
// //       <div className="relative z-10 flex flex-col items-center justify-center h-full">
// //         <div className='text-center w-full text-xl md:text-3xl font-bold mb-4 md:mb-8'>
// //           <p>DISCOVERING THE BEST FURNITURE TO YOUR...</p>
// //         </div>
// //         <Swiper
// //           effect={'coverflow'}
// //           grabCursor={true}
// //           centeredSlides={true}
// //           slidesPerView={1.5}
// //           spaceBetween={10}
// //           loop={true}
// //           breakpoints={{
// //             640: {
// //               slidesPerView: 1.5,
// //               spaceBetween: 10,
// //             },
// //             768: {
// //               slidesPerView: 2.5,
// //               spaceBetween: 20,
// //             },
// //             1024: {
// //               slidesPerView: 3.5,
// //               spaceBetween: 30,
// //             },
// //             1280: {
// //               slidesPerView: 4.5,
// //               spaceBetween: 35,
// //             },
// //           }}
// //           coverflowEffect={{
// //             rotate: 50,
// //             stretch: 0,
// //             depth: 100,
// //             modifier: 1,
// //             slideShadows: true,
// //           }}
// //           onSlideChange={handleSlideChange}
// //           onActiveIndexChange={handleActiveIndexChange}
// //           modules={[EffectCoverflow, Mousewheel]}
// //           mousewheel={true}
// //           className="mySwiper w-full max-w-screen-xl px-4"
// //         >
// //           {slides.map((slide, index) => (
// //             <SwiperSlide key={slide.id}>
// //               <div 
// //                 className={`relative flex flex-col items-center justify-center transition-transform duration-500 ${activeCard === index ? ' border-4 border-white z-20' : ''}`}
// //               >
// //                 <img 
// //                   src={slide.image}
// //                   alt={`Slide ${slide.id}`}
// //                   className={`object-cover ${activeCard===index?'w-full h-full' :'w-60 h-60 m-12'}`}
// //                 />
// //                 {activeCard === index && (
// //                   <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
// //                     <h3 className="text-2xl md:text-5xl font-bold text-black">
// //                       {slide.card}
// //                     </h3>
// //                   </div>
// //                 )}
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>
// //     </div>
// //   );
// // }


// /////////////////////////////////////////////////////////////

"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "KITCHIN",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=2000",
    description: "DISCOVERING THE BEST FURNITURE TO YOUR KITCHEN"
  },
  {
    title: "ROOM",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2000",
    description: "DISCOVERING THE BEST FURNITURE TO YOUR BEDROOM"
  },
  {
    title: "LIVING",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=2000",
    description: "DISCOVERING THE BEST FURNITURE TO YOUR LIVING ROOM"
  }
];

const AUTOPLAY_INTERVAL = 5000;

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const autoplay = useCallback(() => {
    if (!emblaApi || !isAutoPlaying) return;
    
    const timeoutId = setTimeout(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, AUTOPLAY_INTERVAL);

    return () => clearTimeout(timeoutId);
  }, [emblaApi, isAutoPlaying]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    return autoplay();
  }, [autoplay, selectedIndex]);

  const scrollPrev = () => {
    if (emblaApi) {
      setIsAutoPlaying(false);
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      setIsAutoPlaying(false);
      emblaApi.scrollNext();
    }
  };

  return (
    <div 
      className="relative min-h-screen transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${slides[selectedIndex].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative h-screen flex items-center justify-center">
     
        <div className="max-w-6xl w-full mx-auto px-4">
          <div className="relative">
            {/* Main Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="relative flex-[0_0_100%] min-w-0"
                  >
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <h2 className="text-4xl font-bold mb-8 text-white tracking-wider">
                        {slide.description}
                      </h2>
                      
                      {/* Main Image Container */}
                      <div className="relative w-full max-w-2xl aspect-[16/9] overflow-hidden rounded-2xl">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <h3 className="text-6xl font-black text-white drop-shadow-lg tracking-widest">
                            {slide.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls Container */}
            <div className="flex items-center justify-center gap-8 mt-8">
              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Dots Navigation */}
              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === selectedIndex 
                        ? "bg-white w-8" 
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      emblaApi?.scrollTo(index);
                    }}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}