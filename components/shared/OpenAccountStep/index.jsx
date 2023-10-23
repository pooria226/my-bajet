import ImageProvider from "@/provider/ImageProvider";
import Styles from "./styles.module.scss";

import Wrapper from "../Wrapper";
import { Button } from "antd";
import Tabbar from "../Tabbar";
import { useState } from "react";

const OpenAccountStep = () => {
  const [inputs, setInputs] = useState({
    tab: 1,
  });

  const handleActiveTab = (tab) =>
    setInputs((prev) => {
      return { ...prev, tab: tab };
    });

  return (
    <div className={Styles.wrapper}>
      <Wrapper>
        <div className="md:pb-0 pb-4">
          <p className={Styles.title}>افتتاح حساب آنلاین باجت</p>
        </div>
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12">
            <div className="grid grid-cols-12 lg:gap-20 md:gap-5 gap-0 items-center">
              <div className="md:col-span-6 col-span-12 order-0 order-1 md:pt-0 pt-10 md:pb-0 pb-10 flex md:justify-end justify-center">
                <ImageProvider
                  src={"/assets/images/png/open-step-1.png"}
                  width={400}
                  aspectRatio={400 / 400}
                  height={"400px"}
                  classes={"images-responcive"}
                />
              </div>
              <div className="md:col-span-6 md:order-1 order-0 col-span-12">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله اول</p>
                  <p className={Styles.stepSubTitle}>انتخاب نوع حساب</p>
                  <div>
                    <p className={Styles.textItem}>
                      در حال حاضر امکان افتتاح حساب کوتاه‌مدت، قرض‌الحسنه و ویژه
                      تسهیلات که فقط برای دریافت تسهیلات باجت امکان افتتاح حساب
                      دارد در باجت فراهم می‌باشد.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 lg:gap-20 md:gap-5 gap-0 items-center">
              <div className="md:col-span-6 col-span-12 flex justify-end">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله دوم</p>
                  <p className={Styles.stepSubTitle}>
                    تکمیل اطلاعات و انتخاب کارت
                  </p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        پس از پرداخت کارمزد اطلاعات مرتبط با تحصیلات، شغل و محل
                        سکونت خود را تکمیل کنید. و بعد طرح کارت خود را انتخاب
                        کنید.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 flex md:justify-start justify-center md:pt-0 pt-10 md:pb-0 pb-10">
                <div>
                  <ImageProvider
                    classes={"images-responcive"}
                    src={"/assets/images/png/open-step-2.png"}
                    width={"100%"}
                    aspectRatio={400 / 400}
                    height={"400px"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 lg:gap-20 md:gap-5 gap-0 items-center">
              <div className="md:col-span-6 col-span-12 md:order-0 order-1 flex md:justify-end justify-center md:pt-0 pt-10">
                <div>
                  <ImageProvider
                    classes={"images-responcive"}
                    src={"/assets/images/png/open-step-3.png"}
                    width={"100%"}
                    aspectRatio={400 / 400}
                    height={"400px"}
                  />
                </div>
              </div>
              <div className="md:col-span-6 col-span-12  md:order-1 order-0 flex justify-start">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله سوم</p>
                  <p className={Styles.stepSubTitle}>تائید و امضای قرارداد</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        بعد از مطالعه شرایط و قوانین افتتاح حساب و مشاهده
                        قرارداد خود، به وسیله امضای دیجیتال باجت، قرارداد افتتاح
                        حساب را امضا کنید.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OpenAccountStep;
