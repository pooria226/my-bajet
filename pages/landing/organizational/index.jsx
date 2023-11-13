import React from "react";
import ImageProvider from "@/provider/ImageProvider";
import { Button } from "antd";
import Link from "next/link";
import { appConfig } from "@/app-config";

import Styles from "./styles.module.scss";
import Head from "next/head";

export default function Organizational() {
  return (
    <div className={Styles.wrapper}>
      <Head>
        <title>{`اپلیکیشن باجت | ارائه دهنده خرید اعتباری bnpl، تسهیلات خرد و تسهیلات غیر حضوری ازدواج بانک تجارت`}</title>
      </Head>
      <div className={Styles.header}>
        <div className="flex lg:flex-row flex-col justify-between items-center px-4">
          <div>
            <ImageProvider
              classes={"image-res"}
              src={"/assets/images/png/bajet-landing-hero.png"}
              width={500}
              height={"308px"}
              aspectRatio={500 / 308}
            />
          </div>
          <div className="lg:pt-0 pt-4">
            <div>
              <p className={Styles.title}>
                چیزی که دوس داری رو الان بخـر، پولش رو بعدا بده!
              </p>
            </div>
            <div className="pt-6 flex justify-center">
              <Link href={appConfig.appUrl}>
                <Button className={Styles.download}>دانلود باجت</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.main}>
        <div className="flex justify-between items-center pt-10 lg:px-0 px-4">
          <div>
            <ImageProvider
              src={"/assets/images/svgs/cama-bottom.svg"}
              width={40}
              height={40}
              aspectRatio={40 / 40}
            />
          </div>
          <div>
            <p className={Styles.title}>
              همین الان تا 50 میلیون تومان اعتبار خرید یک ماهه تجارت دریافت کن
            </p>
          </div>
          <div>
            <ImageProvider
              src={"/assets/images/svgs/cama-top.svg"}
              width={40}
              height={40}
              aspectRatio={40 / 40}
            />
          </div>
        </div>
        <div className="pt-6 flex justify-center items-center">
          <div>
            <ImageProvider
              classes={"image-res-chart"}
              width={500}
              height={500}
              aspectRatio={500 / 500}
              src={"/assets/images/png/bajet-chart.png"}
            />
          </div>
        </div>
        <div className="py-10 lg:px-0 px-4">
          <div>
            <p className={Styles.text}>چطوری از باجت اعتبار بگیرم وخرید کنم؟</p>
          </div>
        </div>
        <div className="lg:flex hidden justify-center">
          <ImageProvider
            width={700}
            height={250}
            aspectRatio={700 / 250}
            src={"/assets/images/png/bajet-steps.png"}
          />
        </div>
        <div className="lg:hidden flex justify-center">
          <ImageProvider
            width={351}
            height={728}
            aspectRatio={351 / 728}
            src={"/assets/images/png/bajet-steps-vertical.png"}
          />
        </div>
      </div>
      <div className="pt-28">
        <div className={Styles.footer}>
          <div>
            <p className={Styles.text}>
              پشتیبانی در ٧روز هفته از ساعت 8 الی 20
            </p>
          </div>
          <div className="lg:pt-0 pt-2">
            <a className={Styles.text} href="tel:02125961300">
              021 - 25961300
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
