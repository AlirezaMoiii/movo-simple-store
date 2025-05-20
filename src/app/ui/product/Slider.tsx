"use client"
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { Swiper, SwiperSlide } from "swiper/react";
import {A11y, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

const mobileImgs = [
  { name: "slide-1", href: "/products/slide-0.jpg" },
  { name: "slide-2", href: "/products/slide-1.jpg" },
  { name: "slide-3", href: "/products/slide-2.jpg" },
];

function Slider() {
  return (
    <div>
      {/* small screen slider */}
      <div className="block">
        <Swiper
          className="w-[90vw] right-0 my-4"
          modules={[A11y, Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {mobileImgs.map((img) => {
            return (
              <SwiperSlide key={img.name}>
                <PhotoProvider>
                  <div className="relative w-full h-[30vh] -z-10">
                    <PhotoView src={img.href}>
                         <Image
                    src={img.href}
                    fill
                    className="object-contain"
                    alt="slide"
                  />
                    </PhotoView>
               
                </div>
                </PhotoProvider>
                
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
