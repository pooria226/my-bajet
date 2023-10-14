import ImageProvider from "@/provider/ImageProvider";

import CallIcon from "@/public/assets/images/svgs/call.svg";

import Styles from "./styles.module.scss";
import Wrapper from "../Wrapper";
import Container from "../Container";

const Ask = ({}) => {
  return (
    <Container>
      <div>
        <div className="lg:block hidden">
          <div className={Styles.wrapper}>
            <Wrapper>
              <div>
                <div className="flex justify-center">
                  <p className={Styles.title}>هر سوالی داری بپرس</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className={Styles.paddingEnd}>
                    <div className={Styles.text}>
                      <p>
                        تیم پشتیبانی باجت، ۷ روز هفته از ساعت 8 الی 20 در کنار
                        توست.
                      </p>
                    </div>
                    <div className={Styles.wrapperColor}>
                      <div className="flex justify-between items-center">
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
                  <div>
                    <ImageProvider
                      aspectRatio={450 / 311}
                      width={450}
                      src={"/assets/images/svgs/ask.svg"}
                    />
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
        <div className="lg:hidden block">
          <div className={Styles.wrapper}>
            <Wrapper>
              <div>
                <div className="flex justify-center">
                  <p className={Styles.title}>هر سوالی داری بپرس</p>
                </div>
                <div className="flex justify-center">
                  <div className={Styles.text}>
                    <p className="text-center">
                      تیم پشتیبانی باجت، ۷ روز هفته از ساعت 8 الی 20 در کنار
                      توست.
                    </p>
                  </div>
                </div>
                <div>
                  <div className={Styles.wrapperColor}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="pe-2">
                          <CallIcon />
                        </span>
                        <p className={Styles.text}>شماره پشتیبانی باجت:</p>
                      </div>
                      <div>
                        <p className={Styles.phone}>021 - 25961300</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-14">
                  <div className="flex justify-center">
                    <ImageProvider
                      classes={"image-res"}
                      aspectRatio={450 / 311}
                      width={450}
                      src={"/assets/images/svgs/ask.svg"}
                    />
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ask;
