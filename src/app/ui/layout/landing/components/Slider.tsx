"use client";

import { A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

const desktopImgs = [
  { name: "slide-1", href: "/slide-1.jpg" },
  { name: "slide-1", href: "/slide-2.jpg" },
  { name: "slide-3", href: "/slide-3.jpg" },
  { name: "slide-4", href: "/slide-4.jpg" },
];

const mobileImgs = [
  { name: "mobile-slide-1", title: "shop for gamers", href: "/mobile-slide-1.jpg" },
  { name: "mobile-slide-2",title: "gifts under $25", href: "/mobile-slide-2.jpg" },
  { name: "mobile-slide-3",title: "all things beauty", href: "/mobile-slide-3.jpg" },
  { name: "mobile-slide-4",title: "toys for little ones", href: "/mobile-slide-4.jpg" },
];

export default function Slider() {
  return (
    <>
      {/* large screen slider */}
      <div className="hidden md:block">
        <Swiper
          className="w-screen h-screen !absolute right-0 top-16"
          modules={[A11y, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {desktopImgs.map((img) => {
            return (
              <SwiperSlide key={img.href}>
                <Image src={img.href} width={1920} height={1080} alt="slide" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* small screen slider */}
      <div className="block md:hidden">
        <Swiper
          className="w-screen h-screen !absolute right-0 top-16"
          modules={[A11y, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {mobileImgs.map((img) => {
            return (
              <SwiperSlide key={img.name}>
                <h1 className="absolute text-3xl capitalize p-2 font-bold ">
                  {img.title}
                </h1>

                <div className="relative w-full h-[70vh] -z-10">
                  <Image
                    src={img.href}
                    fill
                    className="object-cover"
                    alt="slide"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
