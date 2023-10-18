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
        <div>
          <p className={Styles.title}>نحوه دریافت اعتبار باجت</p>
        </div>
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-20 items-center">
              <div className="col-span-6 flex justify-end">
                <ImageProvider
                  src={"/assets/images/png/bnpl-step-1.png"}
                  width={400}
                  aspectRatio={400 / 400}
                  height={"400px"}
                />
              </div>
              <div className="col-span-6">
                <div style={{ width: "100%", maxWidth: 400 }}>
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
                          body: "بر اساس بررسی رتبه اعتبارسنجی بانکی و میانگین موجودی ماه گذشته حساب تجارت شما، اعتباری تا سقف 50 و 100 میلیون ریال به شما تخصیص داده خواهد شد. با امضای قرارداد در اپلیکیشن باجت، امکان دریافت اعتبار را خواهید داشت.",
                          footer: (
                            <div className="flex justify-between items-center gap-2">
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
            <div className="grid grid-cols-12 gap-20 items-center">
              <div className="col-span-6 flex justify-end">
                <div style={{ width: "100%", maxWidth: 400 }}>
                  <p className={Styles.stepTitle}>مرحله دوم</p>
                  <p className={Styles.stepSubTitle}>خرید اعتباری</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        با ورود به فروشگاه‌های طرف قرارداد ما، می‌توانید فقط با
                        ورود شماره موبایلی که در باجت ثبت نام کرده‌اید، خرید
                        کنید.
                      </p>
                    </div>
                    <div className="pt-5">
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
              <div className="col-span-6 flex justify-start">
                <div>
                  <ImageProvider
                    src={"/assets/images/png/bnpl-step-2.png"}
                    width={"100%"}
                    aspectRatio={400 / 400}
                    height={"400px"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-20 items-center">
              <div className="col-span-6 flex justify-end">
                <div>
                  <ImageProvider
                    src={"/assets/images/png/bnpl-step-2.png"}
                    width={"100%"}
                    aspectRatio={400 / 400}
                    height={"400px"}
                  />
                </div>
              </div>
              <div className="col-span-6 flex justify-start">
                <div style={{ width: "100%", maxWidth: 400 }}>
                  <p className={Styles.stepTitle}>مرحله سوم</p>
                  <p className={Styles.stepSubTitle}>پرداخت بدهی اعتباری</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        پس از ورود به ویجت خرید اعتباری می‌توانید از قسمت
                        بازپرداخت برای پرداخت صورت‌حساب خود تا انتهای ماه جاری
                        اقدام کنید. برای پرداخت بدهی، 5 روز زمان تنفس دارید و پس
                        از آن، اعتبار شما به عقد تسهیلاتی تبدیل می‌شود. در هر
                        ماه در صورت تسویه تا انتهای روز پنجم، اعتبار شما برای
                        ماه بعد مجدد شارژ خواهد شد.
                      </p>
                    </div>
                    <div className="pt-5">
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
