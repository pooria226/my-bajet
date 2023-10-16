import { Swiper, SwiperSlide } from "swiper/react";
import Wrapper from "../Wrapper";

import AddCardIcon from "@/public/assets/images/svgs/add-card.svg";

import Styles from "./styles.module.scss";

import "swiper/css";

const Carousel = () => {
  return (
    <Wrapper>
      <div className={Styles.wrapper}>
        <div>
          <p className={Styles.title}>خدمات غیرحضوری کارت</p>
        </div>
        <Swiper
          spaceBetween={34}
          slidesPerView={7}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides={true}
          roundLengths={true}
          loop={true}
        >
          <SwiperSlide>
            <div>
              <div className={Styles.item}>
                <AddCardIcon />
              </div>
              <div>
                <p className={Styles.text}>تغییر رمز اول کارت</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className={Styles.item}>
                <AddCardIcon />
              </div>
              <div>
                <p className={Styles.text}>تغییر رمز اول کارت</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className={Styles.item}>
                <AddCardIcon />
              </div>
              <div>
                <p className={Styles.text}>تغییر رمز اول کارت</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className={Styles.item}>
                <AddCardIcon />
              </div>
              <div>
                <p className={Styles.text}>تغییر رمز اول کارت</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className={Styles.item}>
                <AddCardIcon />
              </div>
              <div>
                <p className={Styles.text}>تغییر رمز اول کارت</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className={Styles.item}>
                <AddCardIcon />
              </div>
              <div>
                <p className={Styles.text}>تغییر رمز اول کارت</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Carousel;
