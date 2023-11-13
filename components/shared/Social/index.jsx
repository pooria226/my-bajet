import Link from "next/link";

import Styles from "./styles.module.scss";

import LogoIcon from "@/public/assets/images/svgs/logo.svg";
import BajetIcon from "@/public/assets/images/svgs/bajet.svg";
import InstagramIcon from "@/public/assets/images/svgs/instagram.svg";
import LinkedinIcon from "@/public/assets/images/svgs/linkedin.svg";
import BaleIcon from "@/public/assets/images/svgs/bale.svg";
import AparatIcon from "@/public/assets/images/svgs/aparat-footer.svg";
import TelegramIcon from "@/public/assets/images/svgs/telegram.svg";
import TwitterIcon from "@/public/assets/images/svgs/twitter.svg";
import SimorqIcon from "@/public/assets/images/svgs/simorq.svg";
import TejartLogoIcon from "@/public/assets/images/svgs/tejart-logo.svg";
import { appConfig } from "@/app-config";

const Social = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <div className="flex">
              <div>
                <LogoIcon />
              </div>
              <div className="ps-3">
                <BajetIcon />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link
            target="_blank"
            className={Styles.link}
            href={"https://Instagram.com/mybajet"}
          >
            <InstagramIcon />
          </Link>
          <Link
            target="_blank"
            className={Styles.link}
            href={"https://linkedin.com/company/mybajet"}
          >
            <LinkedinIcon />
          </Link>
          <Link
            target="_blank"
            className={Styles.link}
            href={"https://ble.ir/mybajet"}
          >
            <BaleIcon />
          </Link>{" "}
          <Link
            target="_blank"
            className={Styles.link}
            href={"https://www.aparat.com/mybajet"}
          >
            <AparatIcon />
          </Link>
          <Link
            target="_blank"
            className={Styles.link}
            href={"https://t.me/mybajet"}
          >
            <TelegramIcon />
          </Link>
          <Link
            target="_blank"
            className={Styles.link}
            href={"https://Twitter.com/mybajet_ir"}
          >
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
        <div className="flex gap-4">
          <div className="flex justify-center items-center pe-2">
            <p className={Styles.version}>ورژن: {appConfig.appVersion}</p>
          </div>
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
