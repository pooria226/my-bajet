import Image from "next/image";

import Styles from "./styles.module.scss";
import ImageProvider from "@/provider/ImageProvider";
import { Button } from "antd";
import { useRouter } from "next/router";

const HeroOpenAccount = ({}) => {
  const router = useRouter();

  return (
    <div className={Styles.wrapper}>
      <div className="md:block hidden">
        <Image
          alt=""
          height={553}
          width={1440}
          src={"/assets/images/png/open-account.png"}
        />
      </div>
      <div className="md:hidden block">
        <div>
          <ImageProvider
            classes={"image-res"}
            aspectRatio={360 / 880}
            width={"100%"}
            height={"880px"}
            src={"/assets/images/png/open-account-mobile.png"}
          />
        </div>
      </div>
      <div className={Styles.footer}>
        <div>
          <p className={Styles.title}>
            آنلاین و سریع <br /> افتتاح حساب کن!
          </p>
          <div className="pt-6">
            <p className={Styles.text}>افتتاح حساب هوشمند و سریع باجت</p>
            <p className={Styles.text}>مدیریت سایر حساب‌های باجت و تجارت</p>
            <p className={Styles.text}>فرآیندی راحت با امضای دیجیتال باجت</p>
          </div>
        </div>
        <div className="md:block hidden">
          <div className={`${Styles.badge}`}>
            <div className="flex justify-between items-center w-full px-6">
              <div>
                <p className={Styles.titleBadge}>تعداد افتتاح حساب</p>
              </div>
              <div>
                <p className={Styles.textBadge}>15,327</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className={`${Styles.badge}`}>
            <p>
              <span>بدون پول نقد</span> از 200+ فروشگاه موجود <br /> در اکوسیستم
              همکاری ما خرید کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOpenAccount;
