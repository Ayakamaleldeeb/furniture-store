// app/components/Slider.js
"use client"; // لأننا نستخدم تفاعلية (useState و useEffect)
// import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useState} from 'react';

export default function Slider() {
  const [backgroundImage, setBackgroundImage] = useState('/images/slide1.jpg'); // صورة الخلفية الافتراضية

  const slides = [
    { id: 1, image:'https://www.kapwing.com/resources/content/images/2021/02/Image-URL-tutorial-4-1.jpeg' },
    { id: 2, image: 'https://www.kapwing.com/resources/content/images/2021/02/Image-URL-tutorial-4-1.jpeg' },
    { id: 3, image: 'https://www.kapwing.com/resources/content/images/2021/02/Image-URL-tutorial-4-1.jpeg' },
  ];

  const handleSlideChange = (swiper) => {
    const activeSlide = slides[swiper.activeIndex];
    setBackgroundImage(activeSlide.image); // تغيير الخلفية بناءً على الصورة النشطة
  };

  return (
    <div
      className="h-screen bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange} // تغيير الخلفية عند تغيير الشريحة
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-center h-full">
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