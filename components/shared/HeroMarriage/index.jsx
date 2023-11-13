import Image from "next/image";

import Styles from "./styles.module.scss";
import ImageProvider from "@/provider/ImageProvider";
import { useRouter } from "next/router";

const HeroMarriage = ({}) => {
  const router = useRouter();

  return (
    <div className={Styles.wrapper}>
      <div className="md:block hidden">
        <Image
          priority={true}
          alt=""
          height={553}
          width={1440}
          src={"/assets/images/svgs/marriage.svg"}
        />
      </div>
      <div className="md:hidden block">
        <div>
          <ImageProvider
            priority={true}
            classes={"image-res"}
            aspectRatio={360 / 510}
            width={"100%"}
            height={"510px"}
            src={"/assets/images/svgs/marriage-mobile.svg"}
          />
        </div>
      </div>
      <div className={Styles.footer}>
        <div>
          <p className={Styles.title}>
            وام ازدواجت رو <br /> آنلایـــن بگیـــر!
          </p>
          <div className="md:pt-6 pt-2">
            <p className={Styles.text}>
              برای اولین بار در شبکه بانکی؛ <br /> از ضـمانـت تا دریـافــت وام
              در باجـت انجام می‌شه.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMarriage;
