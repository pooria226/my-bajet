import { useState } from "react";
import ImageProvider from "@/provider/ImageProvider";

import Wrapper from "../Wrapper";
import { Button } from "antd";

import Styles from "./styles.module.scss";

import BankIcon from "@/public/assets/images/svgs/bank-markazi.svg";
import { appConfig } from "@/app-config";
import { useRouter } from "next/router";
import Link from "next/link";

const MarriageStep = () => {
  const router = useRouter();
  return (
    <div className={Styles.wrapper}>
      <Wrapper>
        <div className="md:pb-0 pb-4">
          <p className={Styles.title}>مراحل دریافت وام ازدواج</p>
        </div>
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12">
            <div className="grid grid-cols-12 lg:gap-20 md:gap-5 gap-0 items-center">
              <div className="md:col-span-6 col-span-12 order-0 order-1 md:pt-0 pt-10 md:pb-0 pb-10 flex md:justify-end justify-center">
                <ImageProvider
                  src={"/assets/images/png/marriage-step-1.png"}
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
                    ثبت نام در سامانه وام ازدواج بانک مرکزی و انتخاب شعبه
                    غیرحضوری بانک تجارت
                  </p>
                  <div>
                    <p className={Styles.textItem}>
                      ابتدا وارد سامانه وام قرض الحسنه ازدواج بانک مرکزی به آدرس
                      ve.cbi.ir شوید و از منوی سمت راست گزینه ثبت نام جدید را
                      انتخاب و با انتخاب شعبه غیرحضوری بانک تجارت ثبت نام خود را
                      به اتمام رسانید.
                    </p>
                  </div>
                  <div className="md:pt-6 pt-4">
                    <Link target="_blank" href={appConfig.centeralBankUrl}>
                      <Button className={Styles.btnBank}>
                        <span className="pe-2">
                          <BankIcon />
                        </span>
                        سامانه وام ازدواج بانک مرکزی
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
                  <p className={Styles.stepSubTitle}>بررسی و تائید وام</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        با ورود به ویجت وام ازدواج در اپلیکیشن باجت با کلیک بر
                        روی گزینه درخواست وام، مراحل دریافت وام را مشاهده
                        می‌کنید و پس از مطالعه اطلاعات وام، گزینه تائید را کلیک
                        کنید.
                      </p>
                    </div>
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
              <div className="md:col-span-6 col-span-12 flex md:justify-start justify-center md:pt-0 pt-10 md:pb-0 pb-10">
                <div>
                  <ImageProvider
                    classes={"images-responcive"}
                    src={"/assets/images/png/marriage-step-2.png"}
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
                    src={"/assets/images/png/marriage-step-3.png"}
                    width={"100%"}
                    aspectRatio={400 / 400}
                    height={"400px"}
                  />
                </div>
              </div>
              <div className="md:col-span-6 col-span-12  md:order-1 order-0 flex justify-start">
                <div className={Styles.wrapping}>
                  <p className={Styles.stepTitle}>مرحله سوم</p>
                  <p className={Styles.stepSubTitle}>اعتبارسنجی و تائید حساب</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        پس از استعلام از سامانه بانک مرکزی و نیز پرداخت
                        کارمزدهای پرونده تسهیلاتی، رتبه اعتباری شما در شبکه
                        بانکی نمایش داده می‌شود. این رتبه اعتباری، ملاک تعداد
                        ضامن‌های مورد نیاز برای معرفی و شرایط آنهاست. در ادامه
                        باید بر روی حساب مورد نظر کلیک کرده و اگر حساب قرض
                        الحسنه باجتی نداشته باشید با کلیک بر روی افتتاح حساب
                        ادامه فرآیند را انجام دهید.
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
                  <p className={Styles.stepSubTitle}>معرفی ضامن‌ها</p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        لازم است برای دریافت رتبه اعتباری ضامن، اطلاعات هویتی
                        ایشان را وارد کنید. ما براساس این اطلاعات، رتبه اعتباری
                        ضامن شما را در شبکه بانکی تشخیص می‌دهیم. از ضامن‌ها
                        درخواست کنید برنامه باجت را نصب و به بخش {'"'}وام ازدواج
                        {'"'} و سپس {'"'}ضمانت‌های من{'"'} مراجعه و قرارداد شما
                        را امضا کنند.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 flex md:justify-start justify-center md:pt-0 pt-10 md:pb-0 pb-10">
                <div>
                  <ImageProvider
                    classes={"images-responcive"}
                    src={"/assets/images/png/marriage-step-4.png"}
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
                    src={"/assets/images/png/marriage-step-5.png"}
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
                    امضای قرارداد و دریافت وام
                  </p>
                  <div>
                    <div>
                      <p className={Styles.textItem}>
                        پس از امضای ضامن‌ها، قرارداد وام ازدواج آماده امضا توسط
                        شماست. پس از آن، وام در۷۲ ساعت کاری برای شما واریز خواهد
                        شد، پس از واریز، از ویجت “پرداخت اقساط” وام خود را تسویه
                        کنید.
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

export default MarriageStep;
