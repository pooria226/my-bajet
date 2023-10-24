import Image from "next/image";

import Styles from "./styles.module.scss";
import ImageProvider from "@/provider/ImageProvider";
import { useRouter } from "next/router";
import CountUp from "react-countup";

const HeroMarriage = ({}) => {
  const router = useRouter();

  return (
    <div className={Styles.wrapper}>
      <div className="lg:block hidden">
        <Image
          alt=""
          height={553}
          width={1440}
          src={"/assets/images/png/open-account.png"}
        />
      </div>
      <div className="lg:hidden block">
        <div>
          <ImageProvider
            classes={"image-res"}
            aspectRatio={360 / 638}
            width={"100%"}
            height={"638px"}
            src={"/assets/images/png/marriage-mobile.png"}
          />
        </div>
      </div>
      <div className={Styles.footer}>
        <div>
          <p className={Styles.title}>
            وام ازدواجت رو <br /> آنلایـــن بگیـــر!
          </p>
          <div className="lg:pt-6 md:pt-4 pt-2">
            <p className={Styles.text}>
              برای اولین بار در شبکه بانکی؛ <br /> از ضـمانـت تا دریـافــت وام
              در باجـت انجام می‌شه.
            </p>
          </div>
        </div>
        <div>
          <div className="md:block hidden">
            <div className={`${Styles.badge}`}>
              <div className="flex justify-between items-center w-full px-6">
                <div>
                  <p className={Styles.titleBadge}>تعداد وام‌های اعطا شده</p>
                </div>
                <div>
                  <p className={Styles.textBadge}>
                    <CountUp end={7551} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden block">
            <div className={`${Styles.badge}`}>
              <div className="flex justify-between items-center w-full px-6">
                <div>
                  <p className={Styles.titleBadge}>تعداد وام‌های اعطا شده</p>
                </div>
                <div>
                  <p className={Styles.textBadge}>
                    <CountUp end={15000} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:block hidden">
            <div className={`${Styles.badgePrice}`}>
              <div className="flex justify-between items-center w-full px-6">
                <div>
                  <p className={Styles.titleBadge}>مبلغ اعطا شده تا کنون</p>
                </div>
                <div>
                  <p className={Styles.textBadge}>
                    <CountUp end={14759158000000} />
                    <span className="riyal">ریال</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden block">
            <div className={`${Styles.badgePrice}`}>
              <div className="flex justify-between flex-col  w-full px-6">
                <div className="flex justify-start">
                  <p className={Styles.titleBadge}>مبلغ اعطا شده تا کنون</p>
                </div>
                <div className="flex justify-end pt-4">
                  <p className={Styles.textBadge}>
                    <CountUp end={14759158000000} />
                    <span className="riyal">ریال</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMarriage;
