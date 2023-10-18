import Image from "next/image";

import Styles from "./styles.module.scss";
import ImageProvider from "@/provider/ImageProvider";
import { Button } from "antd";

const HeroBnpl = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <div className="md:block hidden">
        <Image
          alt=""
          height={553}
          width={1440}
          src={"/assets/images/png/bnpl.png"}
        />
      </div>
      <div className="md:hidden block">
        <div>
          <ImageProvider
            classes={"image-res"}
            aspectRatio={360 / 574}
            width={"100%"}
            height={"574px"}
            src={"/assets/images/png/cart-mobile.png"}
          />
        </div>
      </div>
      <div className={Styles.footer}>
        <div>
          <p className={Styles.title}>
            الان خرید کن، <br /> بعداً پرداخت کن!
          </p>
          <p className={Styles.text}>
            با خدمت اعتباری باجت می‌توانید در زمان خرید، <br /> به جای پرداخت
            پول نقد از اعتبار باجت استفاده کنید.
          </p>
        </div>
        <div className={Styles.badge}>
          <p>
            <span>بدون پول نقد</span> از 200+ فروشگاه موجود در اکوسیستم همکاری
            ما خرید کنید.
          </p>
        </div>
        <div className={Styles.buttons}>
          <Button className={Styles.credit}>دریافت اعتبار از باجت</Button>
          <Button className={Styles.viewStore}>مشاهده صفحه فروشگاه‌ها</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBnpl;
