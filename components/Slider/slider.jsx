// app/components/Slider.js
"use client"; // لأننا نستخدم تفاعلية (useState و useEffect)
// import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
import { Navigation, Pagination } from 'swiper/modules';
import { useState} from 'react';

export default function Slider() {
  const [backgroundImage, setBackgroundImage] = useState(0); // صورة الخلفية الافتراضية
console.log(backgroundImage)
  const slides = [
    { id: 1, image:'https://www.kapwing.com/resources/content/images/2021/02/Image-URL-tutorial-4-1.jpeg' , card:"1" },
    { id: 2, image: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' , card:"2"  },
    { id: 3, image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'  , card:"3" },
    { id: 4, image: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' , card:"2"  },
    { id: 5, image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'  , card:"3" },
  ];

  const handleSlideChange = (swiper) => {
    // const activeSlide = slides[swiper.realIndex];
// console.log(activeSlide)

    setBackgroundImage(swiper.realIndex); // تغيير الخلفية بناءً على الصورة النشطة
  };

  return (
    <div
      className="h-screen bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${slides[backgroundImage].image})` }}
    >
      {/* <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={500}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        onSlideChange={handleSlideChange} // تغيير الخلفية عند تغيير الشريحة
        loop={true}
        centeredSlides={true}
        defaultValue={0}
        className="h-full text-black"
      > */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSlideChange={handleSlideChange}
        
        pagination={true}
        modules={[, Pagination,Navigation]}
        navigation
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-center h-full p-5 mx-5">
              <img  
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}