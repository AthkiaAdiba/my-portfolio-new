/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const SwiperCard = ({ images }: any) => {
  // console.log(images);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images?.map((img: string, idx: number) => (
        <SwiperSlide key={idx}>
          <Image
            src={img}
            width={1900}
            height={1900}
            alt="project img"
            className="w-full h-[600px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCard;
