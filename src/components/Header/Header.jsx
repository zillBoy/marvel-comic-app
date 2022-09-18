/**
 * React Dependencies
 */
import React from "react";

/**
 * External Dependencies
 */
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroHeader from "../HeroHeader/HeroHeader";

const Header = () => {
  return <HeroHeader />;
  // return (
  //   <Swiper
  //     className="swiper"
  //     modules={[Pagination, Navigation]}
  //     spaceBetween={30}
  //     slidesPerView={1}
  //     pagination={{
  //       clickable: true,
  //     }}
  //     navigation={true}
  //     loop={true}
  //   >
  //     <SwiperSlide>
  //       <HeroHeader />
  //     </SwiperSlide>
  //     <SwiperSlide>
  //       <HeroHeader />
  //     </SwiperSlide>
  //   </Swiper>
  // );
};

export default Header;
