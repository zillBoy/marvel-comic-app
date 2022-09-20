/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import HeroHeader from "../HeroHeader/HeroHeader";
import heroCover0 from "../../assets/image/hero-header-0.jpg";
import heroCover1 from "../../assets/image/hero-header-1.jpg";

/**
 * External Dependencies
 */
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Header = () => {
  return (
    <Swiper
      className="swiper"
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
    >
      <SwiperSlide>
        <HeroHeader
          image={heroCover0}
          eyebrow={"New Release"}
          title={"The New 52! Wonder Woman"}
          btnText={"More Detail"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroHeader
          image={heroCover1}
          eyebrow={"New Release"}
          title={"New Side"}
          btnText={"More Detail"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
