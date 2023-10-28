import ImageProvider from "@/provider/ImageProvider";
import Wrapper from "../Wrapper";
import Container from "../Container";
import Image from "next/image";

import CallIcon from "@/public/assets/images/svgs/call.svg";

import Styles from "./styles.module.scss";

const Ask = ({}) => {
  return (
    <Container>
      <div>
        <div className="md:block hidden">
          <div className={Styles.wrapper}>
            <div>
              <Image
                alt=""
                height={553}
                width={1440}
                src={"/assets/images/svgs/bg-question.svg"}
              />
            </div>
            <div className={Styles.overBg}>
              <div>
                <div className="flex justify-start">
                  <p className={Styles.title}>هر سوالی داری بپرس</p>
                </div>
                <div className="flex justify-start items-center">
                  <div>
                    <div className={Styles.text}>
                      <p>
                        تیم پشتیبانی باجت، ۷ روز هفته از ساعت 8 الی 20 در کنار
                        توست.
                      </p>
                    </div>
                    <div className={Styles.wrapperColor}>
                      <div className="flex justify-between items-center pe-5 ps-3 w-full">
                        <div className="flex items-center">
                          <span className="pe-2">
                            <CallIcon />
                          </span>
                          <p className={Styles.text}>شماره پشتیبانی باجت:</p>
                        </div>
                        <div>
                          <p className={Styles.phone}>۰۲۱ - 25961300</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className={Styles.wrapper}>
            <div>
              <ImageProvider
                classes={"image-res"}
                aspectRatio={1 / 1}
                width={"100%"}
                height={"554px"}
                src={"/assets/images/svgs/bg-question-mobile.svg"}
              />
            </div>
            <div className={Styles.overBg}>
              <div>
                <div className="flex justify-center">
                  <p className={Styles.title}>هر سوالی داری بپرس</p>
                </div>
                <div className="flex justify-center items-center">
                  <div>
                    <div className={Styles.text}>
                      <p>
                        تیم پشتیبانی باجت، ۷ روز هفته از ساعت 8 الی 20 در کنار
                        توست.
                      </p>
                    </div>
                    <div className={Styles.wrapperColor}>
                      <div className="flex justify-between items-center pe-5 ps-3 w-full">
                        <div className="flex items-center">
                          <span className="pe-2">
                            <CallIcon />
                          </span>
                          <p className={Styles.text}>شماره پشتیبانی باجت:</p>
                        </div>
                        <div>
                          <p className={Styles.phone}>۰۲۱ - 25961300</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ask;
