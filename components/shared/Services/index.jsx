import React from "react";

import { Button } from "antd";
import Container from "../Container";
import ImageProvider from "@/provider/ImageProvider";

import CloudDownload from "@/public/assets/images/svgs/cloud-download.svg";
import VerifiedUser from "@/public/assets/images/svgs/verified-user.svg";
import BoltIcon from "@/public/assets/images/svgs/bolt.svg";

import Styles from "./styles.module.scss";
import Wrapper from "../Wrapper";
import Link from "next/link";
import { appConfig } from "@/app-config";
import { useRouter } from "next/router";

const Services = () => {
  const router = useRouter();
  return (
    <Container>
      <div className={Styles.wrapper}>
        <Wrapper>
          <div className="grid grid-cols-12">
            <div
              data-aos="fade-up"
              className="md:col-span-6 md:order-0 md:mt-0 mt-10 order-1 col-span-12 flex justify-end"
            >
              <div
                className={`${Styles.paddingContainerEnd} w-full flex md:justify-end justify-center`}
              >
                <ImageProvider
                  width={400}
                  aspectRatio={400 / 400}
                  src={"/assets/images/svgs/facilities.svg"}
                />
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="md:col-span-6 col-span-12 md:order-1 order-0 flex flex-col justify-center items-start"
            >
              <div className={Styles.wrapping}>
                <div>
                  <p className={Styles.title}>تسهیلات و اعتبارات</p>
                </div>
                <div>
                  <p className={Styles.text}>
                    مشتریان در باجت می‌توانند کلیه‌ی مراحل تسهیلات از درخواست تا
                    معرفی ضامن‌ها و دریافت آن را آنلاین طی کنند. حتی برای امضای
                    قرارداد نیازی به حضور متقاضی و ضامن‌ها در شعبه نیست. ما
                    آنقدر شرایط را آسان کرده‌ایم که اطمینان داریم هر متقاضی
                    می‌تواند ضامن خود را پیدا کند.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-2 gap-y-4">
                  <Button>تسهیلات اسنوا</Button>
                  <Button>تسهیلات آسان باجت (تاب)</Button>
                  <Button onClick={() => router.push("marriage")}>
                    وام ازدواج
                  </Button>
                  <Button>تسهیلات سازمانی (کارنو وام)</Button>
                  <Button onClick={() => router.push("/bnpl")}>
                    خدمات اعتباری (BNPL)
                  </Button>
                  <Button disabled={true}>سفته الکترونیک (به زودی)</Button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <div style={{ background: "#F9FAFA" }} className={Styles.wrapper}>
        <Wrapper>
          <div className="grid grid-cols-12">
            <div
              data-aos="fade-up"
              className={`${Styles.paddingContainerEnd} md:col-span-6 col-span-12 md:order-1 order-0 flex flex-col justify-center items-end`}
            >
              <div className={Styles.wrapping}>
                <div>
                  <p className={Styles.title}>خدمات بانکی</p>
                </div>
                <div>
                  <p className={Styles.text}>
                    خدمات پایه بانکی مانند افتتاح حساب و صدور کارت، خدمات
                    پرمخاطبی هستند که پیش‌نیاز سایر خدمات بانکی محسوب می‌شوند.
                    این خدمات پرتکرار و زمان‌بر در باجت، سریع، آسان و کاملا
                    آنلاین انجام می‌شوند.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap  gap-x-2 gap-y-4">
                  <Button onClick={() => router.push("/open-account")}>
                    افتتاح حساب
                  </Button>
                  <Button onClick={() => router.push("/cart")}>
                    خدمات کارت
                  </Button>
                  <Button disabled={true}>سفته الکترونیک (به زودی)</Button>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="md:col-span-6 md:pt-0 pt-10 md:order-0 order-1 col-span-12 flex justify-end"
            >
              <div className={` w-full flex md:justify-start justify-center`}>
                <ImageProvider
                  classes={"image-res"}
                  width={400}
                  aspectRatio={400 / 400}
                  src={"/assets/images/svgs/banking.svg"}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className={Styles.wrapper}>
          <div className="grid grid-cols-12">
            <div
              data-aos="fade-up"
              className={`${Styles.paddingContainerEnd} md:col-span-6 md:pt-0 pt-10 col-span-12 flex md:justify-end justify-center`}
            >
              <ImageProvider
                classes={"image-res"}
                width={400}
                aspectRatio={400 / 400}
                src={"/assets/images/svgs/signature.svg"}
              />
            </div>
            <div
              data-aos="fade-down"
              className="md:col-span-6 col-span-12 flex flex-col justify-center items-start "
            >
              <div>
                <div className={Styles.wrapping}>
                  <div>
                    <p className={Styles.title}>امضای دیجیتال</p>
                  </div>
                  <div>
                    <p className={Styles.text}>
                      در هر مکانی که باشید می‌توانید فرآیند دریافت گواهی امضای
                      دیجیتال را به راحتی انجام دهید تا از اعتبار و امنیت
                      قرارداد‌های خود آسوده‌خاطر باشید. <br /> فرآیند دریافت
                      گواهی امضای دیجیتال به اطلاعات کارت ملی و بارگذاری ویدئوی
                      سلفی نیاز دارد که مجهز به الگوریتم‌های تشخیص زنده بودن
                      تصویر و تشخیص چهره است.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <div style={{ background: "#F9FAFA" }} className={Styles.wrapper}>
        <Wrapper>
          <div className="grid grid-cols-12">
            <div
              data-aos="fade-up"
              className="md:col-span-6 col-span-12 flex flex-col justify-center items-end"
            >
              <div className={Styles.paddingContainerEnd}>
                <div className={Styles.wrapping}>
                  <div>
                    <p className={Styles.title}>خدمات پرداختی</p>
                  </div>
                  <div>
                    <p className={Styles.text}>
                      شارژ سیم کارت، پرداخت قبوض، خرید بسته اینترنت و پرداخت
                      عوارض خودرو از خدمات پرداختی پرکاربرد باجت محسوب می‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="md:col-span-6 md:pt-0 pt-10 col-span-12 flex md:justify-normal justify-center"
            >
              <ImageProvider
                classes={"image-res"}
                width={400}
                aspectRatio={400 / 400}
                src={"/assets/images/svgs/payment.svg"}
              />
            </div>
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className={Styles.wrapperDownload}>
          <div className="flex justify-center">
            <p className={Styles.title}>دانلود اپلیکیشن باجت</p>
          </div>
          <div className="grid grid-cols-12 items-center">
            <div className="lg:col-span-8 md:col-span-6 col-span-12">
              <div className="flex flex-col gap-4">
                <div className="flex md:flex-row flex-col items-center">
                  <div className={Styles.blueCricle}>
                    <CloudDownload />
                  </div>
                  <div className="ps-2 md:mt-0 mt-2">
                    <p className={Styles.text}>
                      دانلود و افتتاح حساب آنلاین در کمتر از ده دقیقه
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center">
                  <div className={Styles.greenCricle}>
                    <VerifiedUser />
                  </div>
                  <div className="ps-2 md:mt-0 mt-2">
                    <p className={Styles.text}>
                      امنیت بیشتر با احراز هویت باجت
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-center">
                  <div className={Styles.blueCricle}>
                    <BoltIcon />
                  </div>
                  <div className="ps-2 md:mt-0 mt-2">
                    <p className={Styles.text}>
                      دریافت انواع تسهیلات به‌صورت آنلاین در کمترین زمان
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex items-center justify-between md:pt-0 pt-14">
              <div className="flex flex-col justify-end md:items-end items-center w-full">
                <div>
                  <Link href={appConfig.cafebazaarAppUrl}>
                    <ImageProvider
                      height={"40px"}
                      width={135}
                      aspectRatio={135 / 40}
                      src={"/assets/images/svgs/bazar.svg"}
                    />
                  </Link>
                </div>
                <div className="pt-2">
                  <Link href={appConfig.myketAppUrl}>
                    <ImageProvider
                      height={"40px"}
                      width={135}
                      aspectRatio={135 / 135}
                      src={"/assets/images/svgs/my-ket.svg"}
                    />
                  </Link>
                </div>
                <div className="pt-2">
                  <Link href={appConfig.appUrl}>
                    <ImageProvider
                      width={135}
                      height={"40px"}
                      aspectRatio={135 / 40}
                      src={"/assets/images/svgs/bajeet.svg"}
                    />
                  </Link>
                </div>
              </div>
              <div className="md:ps-14 md:block hidden w-full">
                <ImageProvider
                  classes={"image-qr"}
                  aspectRatio={192 / 192}
                  src={"/assets/images/svgs/qrcode.svg"}
                  width={"100%"}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Services;
