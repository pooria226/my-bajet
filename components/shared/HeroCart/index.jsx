import Image from "next/image";

import Styles from "./styles.module.scss";
import ImageProvider from "@/provider/ImageProvider";

const HeroCart = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <div className="md:block hidden">
        <Image
          alt=""
          height={553}
          width={1440}
          src={"/assets/images/svgs/cart-hero.svg"}
        />
      </div>
      <div className="md:hidden block">
        <div>
          <ImageProvider
            classes={"image-res"}
            aspectRatio={360 / 574}
            width={"100%"}
            height={"574px"}
            src={"/assets/images/svgs/cart-hero-mobile.svg"}
          />
        </div>
      </div>
      <div className={Styles.footer}>
        <p className={Styles.title}>کارتت همیشه باهاته!</p>
        <p className={Styles.text}>
          در باجت خدمات کارتت رو در لحظه انجام بده...
        </p>
      </div>
    </div>
  );
};

export default HeroCart;
