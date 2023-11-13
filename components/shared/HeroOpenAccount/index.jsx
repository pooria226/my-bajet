import Image from "next/image";

import Styles from "./styles.module.scss";
import ImageProvider from "@/provider/ImageProvider";
import { useRouter } from "next/router";
import CountUp from "react-countup";

const HeroOpenAccount = ({}) => {
  const router = useRouter();

  return (
    <div className={Styles.wrapper}>
      <div className="md:block hidden">
        <Image
          priority={true}
          alt=""
          height={553}
          width={1440}
          src={"/assets/images/svgs/open-account.svg"}
        />
      </div>
      <div className="md:hidden block">
        <div>
          <ImageProvider
            priority={true}
            classes={"image-res"}
            aspectRatio={360 / 638}
            width={"100%"}
            height={"638px"}
            src={"/assets/images/svgs/open-account-mobile.svg"}
          />
        </div>
      </div>
      <div className={Styles.footer}>
        <div>
          <div>
            <p className={Styles.title}>
              آنلاین و سریع <br /> افتتاح حساب کن!
            </p>
          </div>
          <div className="lg:pt-6 md:pt-4 pt-2">
            <p className={Styles.text}>افتتاح حساب هوشمند و سریع باجت</p>
            <p className={Styles.text}>مدیریت سایر حساب‌های باجت و تجارت</p>
            <p className={Styles.text}>فرآیندی راحت با امضای دیجیتال باجت</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOpenAccount;
