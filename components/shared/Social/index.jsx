import Link from "next/link";

import Styles from "./styles.module.scss";

import LogoIcon from "@/public/assets/images/svgs/logo.svg";
import BajetIcon from "@/public/assets/images/svgs/bajet.svg";
import InstagramIcon from "@/public/assets/images/svgs/instagram.svg";
import LinkedinIcon from "@/public/assets/images/svgs/linkedin.svg";
import BaleIcon from "@/public/assets/images/svgs/bale.svg";
import TelegramIcon from "@/public/assets/images/svgs/telegram.svg";
import TwitterIcon from "@/public/assets/images/svgs/twitter.svg";
import SimorqIcon from "@/public/assets/images/svgs/simorq.svg";
import TejartLogoIcon from "@/public/assets/images/svgs/tejart-logo.svg";

const Social = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex">
            <div>
              <LogoIcon />
            </div>
            <div className="ps-3">
              <BajetIcon />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link className={Styles.link} href={"#"}>
            <InstagramIcon />
          </Link>
          <Link className={Styles.link} href={"#"}>
            <LinkedinIcon />
          </Link>
          <Link className={Styles.link} href={"#"}>
            <BaleIcon />
          </Link>
          <Link className={Styles.link} href={"#"}>
            <TelegramIcon />
          </Link>
          <Link className={Styles.link} href={"#"}>
            <TwitterIcon />
          </Link>
        </div>
      </div>
      <div className={Styles.seprator}></div>
      <div className="flex justify-between items-center">
        <div>
          <p className={Styles.text}>
            کلیه حقوق این سایت متعلق به شرکت سامانه‌های یکپارچه سیمرغ تجارت است.
          </p>
        </div>
        <div className="flex gap-5">
          <div>
            <TejartLogoIcon />
          </div>
          <div>
            <SimorqIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
