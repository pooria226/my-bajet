import { Swiper, SwiperSlide } from "swiper/react";
import Wrapper from "../Wrapper";
import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

import "swiper/css";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [swiper, setSwiper] = useState();
  const slideTo = () => swiper.slideTo(3, 400);

  useEffect(() => {
    if (swiper != null) slideTo();
  }, [swiper]);

  return (
    <Wrapper>
      <div className={Styles.wrapper}>
        <div>
          <p className={Styles.title}>خدمات غیرحضوری کارت</p>
        </div>
        <div style={{ height: 212 }} className="py-4 cursor-grabbing">
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={34}
            slidesPerView={7}
            centeredSlides={true}
            roundLengths={true}
            loop={false}
            breakpoints={{
              1440: {
                slidesPerView: 7,
                spaceBetween: 34,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 34,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 34,
              },
              968: {
                slidesPerView: 6,
                spaceBetween: 34,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <div className={`${Styles.item} item-swiper`}>
                  <ImageProvider
                    aspectRatio={56 / 56}
                    width={56}
                    height={56}
                    src={"/assets/images/svgs/add-card.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.text}>صدور مجدد کارت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={`${Styles.item} item-swiper`}>
                  <ImageProvider
                    aspectRatio={56 / 56}
                    width={56}
                    height={56}
                    src={"/assets/images/svgs/lock.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.text}>تغییر رمز اول کارت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={`${Styles.item} item-swiper`}>
                  <ImageProvider
                    aspectRatio={56 / 56}
                    width={56}
                    height={56}
                    src={"/assets/images/svgs/credit-card.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.text}>مسدود سازی کارت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={`${Styles.item} item-swiper`}>
                  <ImageProvider
                    aspectRatio={56 / 56}
                    width={56}
                    height={56}
                    src={"/assets/images/svgs/credit-score.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.text}>فعال سازی کارت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={`${Styles.item} item-swiper`}>
                  <ImageProvider
                    aspectRatio={56 / 56}
                    width={56}
                    height={56}
                    src={"/assets/images/svgs/sync.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.text}>نمایش موجودی</p>
                </div>
              </div>
            </SwiperSlide>
            {/* diactive */}
            <SwiperSlide>
              <div>
                <div className={Styles.itemDisabled}>
                  <ImageProvider
                    aspectRatio={56 / 56}
                    width={56}
                    height={56}
                    src={"/assets/images/svgs/approval-delegation.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.text}>وضعیت تحویل کارت</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className={Styles.itemDisabled}>
                  <ImageProvider
                    aspectRatio={56 / 56}
                    width={56}
                    height={56}
                    src={"/assets/images/svgs/timelapse.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.text}>فعال سازی رمز پویا</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Carousel;
