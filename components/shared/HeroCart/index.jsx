import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";
import Image from "next/image";

const HeroCart = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <Image height={553} width={1440} src={"/assets/images/png/cart.png"} />
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
