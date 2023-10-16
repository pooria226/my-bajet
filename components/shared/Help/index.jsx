import ImageProvider from "@/provider/ImageProvider";
import Wrapper from "../Wrapper";

import Stlyes from "./styles.module.scss";

const Help = () => {
  return (
    <Wrapper>
      <div className="py-10">
        <div className="md:block hidden">
          <div className={Stlyes.wrapper}>
            <div className="flex justify-between items-center pe-10 ps-14">
              <div>
                <p className={Stlyes.title}>نیاز به کمک داری؟</p>
                <p className={Stlyes.subTitle}>پشتیبانی کارت در کنار شماست</p>
              </div>
              <div className="flex items-center">
                <div>
                  <p className={Stlyes.text}>تلفن :</p>
                  <p className={Stlyes.text}>021 - 25961300</p>
                </div>
                <div className="ps-8 pt-1 pb-1">
                  <ImageProvider
                    width={146}
                    height={146}
                    aspectRatio={146 / 146}
                    src={"/assets/images/svgs/headset.svg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className={Stlyes.wrapper}>
            <div className="flex justify-between pt-4 ps-8 pe-4">
              <div>
                <p className={Stlyes.title}>نیاز به کمک داری؟</p>
                <p className={Stlyes.subTitle}>پشتیبانی کارت در کنار شماست</p>
              </div>
              <div>
                <ImageProvider
                  width={88}
                  height={88}
                  aspectRatio={88 / 88}
                  src={"/assets/images/svgs/headset.svg"}
                />
              </div>
            </div>
            <div className="flex justify-between px-8 pb-5 pt-0.5">
              <div>
                <p className={Stlyes.text}>تلفن :</p>
              </div>
              <div>
                <p className={Stlyes.text}>021 - 25961300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Help;
