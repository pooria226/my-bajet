import ImageProvider from "@/provider/ImageProvider";
import Styles from "./styles.module.scss";

import Wrapper from "../Wrapper";
import { Button } from "antd";
import Tabbar from "../Tabbar";
import { useState } from "react";

const BnplStep = () => {
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
          <p className={Styles.title}>نحوه دریافت اعتبار باجت</p>
        </div>
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12">
            <div className="grid grid-cols-12 lg:gap-20 md:gap-5 gap-0 items-center">
              <div className="md:col-span-6 col-span-12 order-0 order-1 md:pt-0 pt-10 md:pb-0 pb-10 flex md:justify-end justify-center">
                <ImageProvider
                  src={"/assets/images/svgs/bnpl-step-1.svg"}
                  width={400}
                  aspectRatio={400 / 400}
                  height={"400px"}
                  classes={"images-responcive"}
                />
              </div>
              <div className="md:col-span-6 md:order-1 order-0 col-span-12">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله اول</p>
                  <p className={Styles.stepSubTitle}>تعریف و تخصیص اعتبار</p>
                  <div>
                    <Tabbar
                      activeTab={inputs.tab}
                      onChange={handleActiveTab}
                      data={[
                        {
                          tab: 1,
                          title: "شخصی",
                          body: "با بررسی رتبه اعتبارسنجی بانکی و میانگین موجودی حساب تجارتی شما، اعتباری تا سقف 50 و یا 100 میلیون ریال به شما تخصیص داده خواهد شد. با امضای قرارداد در اپلیکیشن باجت، امکان دریافت اعتبار را خواهید داشت.",
                          footer: (
                            <div className="flex md:flex-row flex-col justify-between items-center gap-2">
                              <Button className={Styles.btnDownload}>
                                <ImageProvider
                                  src={"/assets/images/svgs/logo.svg"}
                                  width={18}
                                  aspectRatio={18 / 18}
                                  height={18}
                                />
                                <p>دانلود باجت</p>
                              </Button>
                              <Button className={Styles.course}>
                                <ImageProvider
                                  src={"/assets/images/svgs/aparat.svg"}
                                  width={18}
                                  aspectRatio={18 / 18}
                                  height={18}
                                />
                                <p>آموزش ویدئویی</p>
                              </Button>
                            </div>
                          ),
                        },
                        {
                          tab: 2,
                          title: "سازمانی",
                          body: "اگر کد ملی شما در سیستم ما تعریف شده باشد، اعتباری متناسب با حقوق دریافتی‌تان به شما تخصیص داده خواهد شد. با امضای قرارداد در اپلیکیشن باجت، امکان دریافت اعتبار را خواهید داشت.",
                          footer: (
                            <div className="flex justify-end">
                              <Button className={Styles.btnDownload}>
                                <ImageProvider
                                  src={"/assets/images/svgs/logo.svg"}
                                  width={18}
                                  aspectRatio={18 / 18}
                                  height={18}
                                />
                                <p>دانلود باجت</p>
                              </Button>
                            </div>
                          ),
                        },
                      ]}
                    />
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
                  <p className={Styles.stepSubTitle}>خرید اعتباری</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        با انتخاب فروشگاه‌های طرف قرارداد ما می‌توانید فقط با
                        ورود شماره موبایلی که در باجت ثبت نام کرده‌اید، خرید
                        کنید.
                      </p>
                    </div>
                    <div className="md:pt-5 pt-4">
                      <div className="flex justify-between items-center gap-2">
                        <Button className={Styles.btnDownload}>
                          <p>صفحه فروشگاه‌ها</p>
                        </Button>
                        <Button className={Styles.course}>
                          <ImageProvider
                            src={"/assets/images/svgs/aparat.svg"}
                            width={18}
                            aspectRatio={18 / 18}
                            height={18}
                          />
                          <p>آموزش ویدئویی</p>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 flex md:justify-start justify-center md:pt-0 pt-10 md:pb-0 pb-10">
                <div>
                  <ImageProvider
                    classes={"images-responcive"}
                    src={"/assets/images/svgs/bnpl-step-2.svg"}
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
                    src={"/assets/images/svgs/bnpl-step-3.svg"}
                    width={"100%"}
                    aspectRatio={400 / 400}
                    height={"400px"}
                  />
                </div>
              </div>
              <div className="md:col-span-6 col-span-12  md:order-1 order-0 flex justify-start">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله سوم</p>
                  <p className={Styles.stepSubTitle}>پرداخت بدهی اعتباری</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        با ورود به ویجت خرید اعتباری می‌توانید از قسمت بازپرداخت
                        برای پرداخت صورت‌حساب خود تا انتهای ماه جاری اقدام کنید.
                        برای پرداخت بدهی، 5 روز زمان تنفس دارید. در صورت تسویه
                        تا انتهای روز پنجم هر ماه، اعتبار شما برای ماه بعد مجدد
                        شارژ خواهد شد.
                      </p>
                    </div>
                    <div className="md:pt-5 pt-4">
                      <div className="flex justify-end">
                        <Button className={Styles.course}>
                          <ImageProvider
                            src={"/assets/images/svgs/aparat.svg"}
                            width={18}
                            aspectRatio={18 / 18}
                            height={18}
                          />
                          <p>آموزش ویدئویی</p>
                        </Button>
                      </div>
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

export default BnplStep;
