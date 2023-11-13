import { useState } from "react";
import ImageProvider from "@/provider/ImageProvider";

import Wrapper from "../Wrapper";
import { Button } from "antd";

import Styles from "./styles.module.scss";

import BankIcon from "@/public/assets/images/svgs/bank-markazi.svg";
import { appConfig } from "@/app-config";
import { useRouter } from "next/router";
import Link from "next/link";

const CreditLoanStep = () => {
  const router = useRouter();
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
                  src={"/assets/images/png/loan-step-1.png"}
                  width={400}
                  aspectRatio={400 / 400}
                  height={"400px"}
                  classes={"images-responcive"}
                />
              </div>
              <div className="md:col-span-6 md:order-1 order-0 col-span-12">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله اول</p>
                  <p className={Styles.stepSubTitle}>
                    اعتبارسنجی و انتخاب مبلغ طرح
                  </p>
                  <div>
                    <p className={Styles.textItem}>
                      {" "}
                      وارد ویجت اعتبار خرید کالا در اپلیکیشن باجت شوید و طرح
                      پاکشوما را انتخاب کنید. در حال حاضر، امکان انصراف وجود
                      ندارد؛ پس در انتخاب مبلغ اعتبار (20، 50 و یا 100 میلیون
                      تومان) دقت کنید.
                    </p>
                  </div>
                  <div className="md:pt-6 pt-4">
                    <Link href={appConfig.appUrl}>
                      <Button className={Styles.btnBank}>
                        <span className="pe-2">
                          <ImageProvider
                            src={"/assets/images/svgs/logo.svg"}
                            width={18}
                            height={"18px"}
                            aspectRatio={18 / 18}
                          />
                        </span>
                        دانلود باجت
                      </Button>
                    </Link>
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
                  <p className={Styles.stepSubTitle}>صدورسفته الکترونیک</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        برای ادامه فرایند باید حساب کوتاه مدت باجتی افتتاح کنید.
                        پس از افتتاح حساب کافی است آدرس محل اقامت خود را تائید و
                        سفته الکترونیک به میزان 1/2 برابر مبلغ اعتبار صادر کنید.
                        باتوجه به رتبه اعتباری‌تان ممکن است به ضمانت سفته نیاز
                        داشته باشید.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 flex md:justify-start justify-center md:pt-0 pt-10 md:pb-0 pb-10">
                <div>
                  <ImageProvider
                    classes={"images-responcive"}
                    src={"/assets/images/png/loan-step-2.png"}
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
                    src={"/assets/images/png/loan-step-3.png"}
                    width={"100%"}
                    aspectRatio={400 / 400}
                    height={"400px"}
                  />
                </div>
              </div>
              <div className="md:col-span-6 col-span-12  md:order-1 order-0 flex justify-start">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله سوم</p>
                  <p className={Styles.stepSubTitle}>صدور ضمانت‌نامه</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        برای صدور ضمانت‌نامه لازم است به میزان 5 درصد مبلغ طرح
                        انتخابی، سپرده نقدی داشته باشید. مبلغ این سپرده پس از
                        بازپرداخت 12 قسط اول، به حساب شما بازگشت داده خواهد شد.
                        همچنین کارمزدهای مرتبط با صدور ضمانت‌نامه بایستی در حساب
                        شما وجود داشته باشد.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 lg:gap-20 md:gap-5 gap-0 items-center">
              <div className="md:col-span-6 col-span-12 flex justify-end">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله چهارم</p>
                  <p className={Styles.stepSubTitle}>
                    امضای قرارداد و دریافت اعتبار
                  </p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        در این مرحله کافی‌ست قرارداد اعتباری خود را امضا کنید تا
                        مبلغ انتخابی در کوتاه‌ترین زمان ممکن برای شما فعال شود.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 flex md:justify-start justify-center md:pt-0 pt-10 md:pb-0 pb-10">
                <div>
                  <ImageProvider
                    classes={"images-responcive"}
                    src={"/assets/images/png/loan-step-4.png"}
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
                    src={"/assets/images/png/loan-step-5.png"}
                    width={"100%"}
                    aspectRatio={400 / 400}
                    height={"400px"}
                  />
                </div>
              </div>
              <div className="md:col-span-6 col-span-12  md:order-1 order-0 flex justify-start">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله پنجم</p>
                  <p className={Styles.stepSubTitle}>
                    خرید کالا از نمایندگی‌های پاکشوما
                  </p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        می‌توانید در وبسایت پاکشوما، دسته‌بندی محصولات را مشاهده
                        و جزئیات کالای موردنظر خود را بررسی کنید. سپس برای خرید
                        به نمایندگی‌های مرتبط مراجعه کنید.
                      </p>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col justify-between items-center gap-x-2 gap-y-4 pt-6">
                    <Button className={Styles.course}>
                      <Link
                        className="flex px-12 py-3"
                        href={"https://pakshoma.com/"}
                        target="_blank"
                      >
                        <p className="ps-2">وبسایت پاکشوما</p>
                      </Link>
                    </Button>
                    <Button className={Styles.btnDownload}>
                      <Link
                        className="flex px-12 py-3"
                        href={"https://pakshoma.com/credit-agents"}
                      >
                        <p className="ps-2">نمایندگی‌های پاکشوما</p>
                      </Link>
                    </Button>
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

export default CreditLoanStep;
