import React from "react";

import { Button } from "antd";
import Container from "../shared/Container";
import ImageProvider from "@/provider/ImageProvider";

import CloudDownload from "@/public/assets/images/svgs/cloud-download.svg";
import VerifiedUser from "@/public/assets/images/svgs/verified-user.svg";
import BoltIcon from "@/public/assets/images/svgs/bolt.svg";
import BazarIcon from "@/public/assets/images/svgs/bazar.svg";
import MyKetIcon from "@/public/assets/images/svgs/my-ket.svg";
import BajeetIcon from "@/public/assets/images/svgs/bajeet.svg";

import Styles from "./styles.module.scss";
import Wrapper from "../shared/Wrapper";

const Services = () => {
  return (
    <Container>
      <Wrapper>
        <div className={Styles.wrapper}>
          <div className="grid grid-cols-12">
            <div className="col-span-6 flex flex-col justify-center items-end ">
              <div className={Styles.paddingContainerEnd}>
                <div style={{ maxWidth: 400, width: "100%" }}>
                  <div>
                    <p className={Styles.title}>امضای دیجیتال</p>
                  </div>
                  <div>
                    <p className={Styles.text}>
                      در هر مکانی که باشید می‌توانید فرآیند دریافت گواهی امضای
                      دیجیتال را به راحتی انجام دهید تا از اعتبار و امنیت
                      قرارداد‌های خود آسوده‌خاطر باشید. <br /> فرآیند دریافت
                      گواهی امضای دیجیتال نیازمند اطلاعات کارت ملی و بارگذاری
                      ویدئوی سلفی‌ست که مجهز به الگوریتم‌های تشخیص زنده بودن
                      تصویر و تشخیص چهره است.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <ImageProvider
                classes={"image-res"}
                width={400}
                aspectRatio={400 / 400}
                src={"/assets/images/svgs/signature.svg"}
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <div style={{ background: "#F9FAFA" }} className={Styles.wrapper}>
        <Wrapper>
          <div className="grid grid-cols-12">
            <div className="col-span-6 flex justify-end ">
              <div className={Styles.paddingContainerEnd}>
                <ImageProvider
                  width={400}
                  aspectRatio={400 / 400}
                  src={"/assets/images/svgs/banking.svg"}
                />
              </div>
            </div>
            <div className="col-span-6 flex flex-col justify-center items-start">
              <div style={{ maxWidth: 400, width: "100%" }}>
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
                <div className="mt-4">
                  <Button className="me-1">افتتاح حساب</Button>
                  <Button className="ms-1">خدمات کارت</Button>
                  <Button disabled={true} className="mt-4">
                    سفته الکترونیک (به زودی)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={Styles.wrapper}>
          <div className="grid grid-cols-12">
            <div
              style={{ paddingInlineEnd: 80 }}
              className="col-span-6 flex flex-col justify-center items-end"
            >
              <div className={Styles.paddingContainerEnd}>
                <div style={{ maxWidth: 468, width: "100%" }}>
                  <div>
                    <p className={Styles.title}>خدمات پرداختی</p>
                  </div>
                  <div>
                    <p className={Styles.text}>
                      خدمات پرداختی مانند شارژ سیم کارت، پرداخت قبوض، خرید بسته
                      اینترنت و پرداخت عوارض خودرو در باجت بدون نیاز به ثبت نام
                      قابل انجام هستند.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <ImageProvider
                width={400}
                aspectRatio={400 / 400}
                src={"/assets/images/svgs/payment.svg"}
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <div style={{ background: "#F9FAFA" }} className={Styles.wrapper}>
        <Wrapper>
          <div className="grid grid-cols-12">
            <div
              style={{ paddingInlineEnd: 80 }}
              className="col-span-6 flex justify-end"
            >
              <ImageProvider
                width={400}
                aspectRatio={400 / 400}
                src={"/assets/images/svgs/banking.svg"}
              />
            </div>
            <div className="col-span-6 flex flex-col justify-center items-start">
              <div style={{ maxWidth: 468, width: "100%" }}>
                <div>
                  <p className={Styles.title}>تسهیلات و اعتبارات</p>
                </div>
                <div>
                  <p className={Styles.text}>
                    مشتریان در باجت می‌توانند کلیه مراحل تسهیلات از درخواست تا
                    معرفی ضامن‌ها و دریافت را آنلاین طی کنند. حتی برای امضای
                    قرارداد نیازی به حضور شما و ضامن‌ها در شعبه نیست. مهم‌تر
                    آن‌که، آنقدر شرایط را آسان کرده‌ایم که تقریبا هر کسی
                    می‌تواند ضامن خود را پیدا کند.
                  </p>
                </div>
                <div className="mt-4">
                  <Button className="me-1">تسهیلات اسنوا</Button>
                  <Button className="ms-1">تسهیلات آسان باجت (تاب)</Button>
                  <br />
                  <Button className="me-1 mt-4">وام ازدواج</Button>
                  <Button className="ms-1 mt-4">
                    تسهیلات سازمانی (کارنو وام)
                  </Button>
                  <Button className="me-1 mt-4">خدمات اعتباری (BNPL)</Button>
                  <Button disabled={true} className="mt-4 ms-1">
                    سفته الکترونیک (به زودی)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className={Styles.wrapperDownload}>
          <div className="flex justify-center">
            <p className={Styles.title}>دانــلود اپلیکیشن باجــت</p>
          </div>
          <div className="grid grid-cols-12 items-center">
            <div className="lg:col-span-8  col-span-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className={Styles.blueCricle}>
                    <CloudDownload />
                  </div>
                  <div className="ps-2">
                    <p className={Styles.text}>
                      دانلود و افتتاح حساب آنلاین در کمتر از ده دقیقه
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={Styles.greenCricle}>
                    <VerifiedUser />
                  </div>
                  <div className="ps-2">
                    <p className={Styles.text}>
                      امنیت بیشتر با احراز هویت باجت
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={Styles.blueCricle}>
                    <BoltIcon />
                  </div>
                  <div className="ps-2">
                    <p className={Styles.text}>
                      دریافت تسهیلات به‌صورت آنلاین در کمترین زمان
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-6 flex items-center justify-between">
              <div className="flex flex-col justify-end items-end">
                <div>
                  <BazarIcon />
                </div>
                <div className="pt-2">
                  <MyKetIcon />
                </div>
                <div className="pt-2">
                  <BajeetIcon />
                </div>
              </div>
              <div className="lg:ps-14">
                <ImageProvider
                  aspectRatio={192 / 192}
                  src={"/assets/images/svgs/qrcode.svg"}
                  width={192}
                  height={192}
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
