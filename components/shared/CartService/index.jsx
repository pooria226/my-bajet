import ImageProvider from "@/provider/ImageProvider";
import Wrapper from "../Wrapper";
import Styles from "./styles.module.scss";

const CartService = () => {
  return (
    <Wrapper>
      <div className={Styles.wrapper}>
        <div>
          <p className={Styles.title}>خدمات غیرحضوری کارت</p>
        </div>
        <div className="grid grid-cols-12 pt-5 gap-5">
          <div className="col-span-12 flex justify-center">
            <div className={Styles.item}>
              <div className={Styles.circle}>
                <ImageProvider
                  width={56}
                  height={56}
                  aspectRatio={1}
                  src={"/assets/images/svgs/sync.svg"}
                />
              </div>
              <p>نمایش موجودی</p>
            </div>
            <div className={Styles.item}>
              <div className={Styles.circle}>
                <ImageProvider
                  width={56}
                  height={56}
                  aspectRatio={1}
                  src={"/assets/images/svgs/credit-score.svg"}
                />
              </div>
              <p>فعال‌سازی کارت</p>
            </div>
          </div>
          <div className="col-span-12 flex justify-center">
            <div className={Styles.item}>
              <div className={Styles.circle}>
                <ImageProvider
                  width={56}
                  height={56}
                  aspectRatio={1}
                  src={"/assets/images/svgs/credit-card.svg"}
                />
              </div>
              <p>مسدودسازی کارت</p>
            </div>
            <div className={Styles.item}>
              <div className={Styles.circle}>
                <ImageProvider
                  width={56}
                  height={56}
                  aspectRatio={1}
                  src={"/assets/images/svgs/add-card.svg"}
                />
              </div>
              <p>صدور مجدد کارت</p>
            </div>
          </div>
          <div className="col-span-12 flex justify-center">
            <div className={Styles.item}>
              <div className={Styles.circle}>
                <ImageProvider
                  width={56}
                  height={56}
                  aspectRatio={1}
                  src={"/assets/images/svgs/lock.svg"}
                />
              </div>
              <p>تغییر رمز اول کارت</p>
            </div>
            <div className={Styles.item}>
              <div className={Styles.circleDiactive}>
                <ImageProvider
                  width={56}
                  height={56}
                  aspectRatio={1}
                  src={"/assets/images/svgs/approval-delegation.svg"}
                />
              </div>
              <p>وضعیت تحویل کارت</p>
            </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <div style={{ width: "100%" }} className={`${Styles.item}`}>
              <div className={Styles.circleDiactive}>
                <ImageProvider
                  width={56}
                  height={56}
                  aspectRatio={1}
                  src={"/assets/images/svgs/timelapse.svg"}
                />
              </div>
              <p>فعال‌سازی رمز پویا</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartService;

{
  /* <SwiperSlide>
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
 diactive 
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
      src={"/assets/images/svgs/approval-delegation.svg"}
    />
  </div>
  <div>
    <p className={Styles.text}>فعال سازی رمز پویا</p>
  </div>
</div>
</SwiperSlide> */
}
