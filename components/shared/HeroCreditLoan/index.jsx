import Image from "next/image";

import Styles from "./styles.module.scss";
import ImageProvider from "@/provider/ImageProvider";
import { Button } from "antd";
import { useRouter } from "next/router";

const HeroCreditLoan = ({}) => {
  const router = useRouter();

  return (
    <div className={Styles.wrapper}>
      <div className="md:block hidden">
        <Image
          priority={true}
          alt=""
          height={553}
          width={1440}
          src={"/assets/images/png/loan-hero.png"}
        />
      </div>
      <div className="md:hidden block">
        <div>
          <ImageProvider
            priority={true}
            classes={"image-res"}
            aspectRatio={360 / 650}
            width={"100%"}
            height={"650px"}
            src={"/assets/images/png/loan-hero-mobile.png"}
          />
        </div>
      </div>
      <div className={Styles.footer}>
        <div>
          <p className={Styles.title}>از پاکشوما قسطی بخر!</p>
          <p className={Styles.text}>
            خرید قسطی لوازم خانگی پاکشوما تا سقف 100 میلیون تومان
          </p>
        </div>
        <div className="md:block hidden">
          <div className={`${Styles.badge}`}>
            <p>
              <span> بدون چک، </span> فقط با رتبه اعتباری و با بازپرداخت 24 ماهه
            </p>
          </div>
        </div>
        <div className="md:hidden block">
          <div className={`${Styles.badge}`}>
            <p>
              <span> بدون چک،</span> فقط با رتبه اعتباری و با بازپرداخت 24 ماهه
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCreditLoan;
