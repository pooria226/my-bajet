import Link from "next/link";
import { useState } from "react";
import Container from "../Container";
import Wrapper from "../Wrapper";
import ContactUs from "../ContactUs";
import Social from "../Social";
import { Collapse } from "antd";
import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

import BazarIcon from "@/public/assets/images/svgs/bazar.svg";
import MyKetIcon from "@/public/assets/images/svgs/my-ket.svg";
import BajeetIcon from "@/public/assets/images/svgs/bajeet.svg";
import MinesIcon from "@/public/assets/images/svgs/mines.svg";
import PlusIcon from "@/public/assets/images/svgs/plus.svg";
import LocationIcon from "@/public/assets/images/svgs/location.svg";
import InstagramIcon from "@/public/assets/images/svgs/instagram.svg";
import LinkedinIcon from "@/public/assets/images/svgs/linkedin.svg";
import BaleIcon from "@/public/assets/images/svgs/bale.svg";
import TelegramIcon from "@/public/assets/images/svgs/telegram.svg";
import TwitterIcon from "@/public/assets/images/svgs/twitter.svg";
import LogoTypeIcon from "@/public/assets/images/svgs/logo-type.svg";
import SimorqTejartIcon from "@/public/assets/images/svgs/simorq-tejart.svg";

const Footer = () => {
  const [inputs, setInputs] = useState({
    acc1: [],
    acc2: [],
  });
  return (
    <Container>
      <Wrapper>
        <div className="md:block hidden">
          <div className={Styles.wrapper}>
            <div className="grid grid-cols-12">
              <div className="col-span-10">
                <div className="grid grid-cols-12">
                  <div className="lg:col-span-3 md:col-span-4">
                    <div>
                      <div>
                        <p className={Styles.title}>تسهیلات و اعتبارات</p>
                      </div>
                      <div>
                        <div className="flex flex-col">
                          <div className="flex justify-center">
                            <Link className={Styles.link} href={"#"}>
                              وام ازدواج
                            </Link>
                          </div>
                          <div className="flex justify-center">
                            <Link className={Styles.link} href={"#"}>
                              خدمات اعتباری (BNPL)
                            </Link>
                          </div>
                          <div className="flex justify-center">
                            <Link className={Styles.link} href={"#"}>
                              تسهیلات آسان باجت (تاب)
                            </Link>
                          </div>
                          <div className="flex justify-center">
                            <Link className={Styles.link} href={"#"}>
                              تسهیلات سازمانی (کارنو وام){" "}
                            </Link>
                          </div>
                          <div className="flex justify-center">
                            <Link className={Styles.link} href={"#"}>
                              تسهیلات اسنوا
                            </Link>
                          </div>
                          <div className={Styles.link}>
                            اعتبار اقساطی اسنوا
                            <span className="ms-3"> به زودی </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 md:col-span-4">
                    <div>
                      <div>
                        <p className={Styles.title}>خدمات بانکی</p>
                      </div>
                      <div>
                        <div className="flex flex-col">
                          <div className="flex justify-center">
                            <Link className={Styles.link} href={"#"}>
                              افتتاح حساب
                            </Link>
                          </div>
                          <div className="flex justify-center">
                            <Link className={Styles.link} href={"#"}>
                              خدمات کارت
                            </Link>
                          </div>
                          <div className={Styles.link}>
                            صدور و ضمانت سفته الکترونیک
                            <span className="ms-3"> به زودی </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
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
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className={Styles.seprator}></div>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <ContactUs />
              </div>
            </div>
            <div className="grid grid-cols-12 pt-6">
              <div className="col-span-12">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="md:hidden block">
        <div className={Styles.wrapperMobile}>
          <Collapse
            onChange={(e) =>
              setInputs((prev) => {
                return { ...prev, acc1: e };
              })
            }
            expandIcon={() => {
              return null;
            }}
            items={[
              {
                key: "1",
                label: "تسهیلات و اعتبارات",
                children: (
                  <div>
                    <div className="box">
                      <p className="text-acc">خدمات اعتباری (BNPL)</p>
                    </div>
                    <div className="box">
                      <p className="text-acc">تسهیلات آسان باجت (تاب)</p>
                    </div>
                    <div className="box">
                      <p className="text-acc">تسهیلات سازمانی (کارنو وام)</p>
                    </div>
                    <div className="box">
                      <p className="text-acc">تسهیلات اسنوا</p>
                    </div>
                    <div className="box">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-acc">تسهیلات کالانو</p>
                        </div>
                        <div>
                          <p className="badge"> به زودی</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                extra: inputs.acc1.length > 0 ? <MinesIcon /> : <PlusIcon />,
              },
            ]}
          />
          <Collapse
            onChange={(e) =>
              setInputs((prev) => {
                return { ...prev, acc2: e };
              })
            }
            expandIcon={() => {
              return null;
            }}
            items={[
              {
                key: "1",
                label: "خدمات بانکی",
                children: (
                  <div>
                    <div className="box">
                      <p>افتتاح حساب</p>
                    </div>
                    <div className="box">
                      <p>خدمات کارت</p>
                    </div>
                    <div className="box">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-acc">
                            صدور و ضمانت سفته الکترونیک
                          </p>
                        </div>
                        <div>
                          <p className="badge"> به زودی</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                extra: inputs.acc2.length > 0 ? <MinesIcon /> : <PlusIcon />,
              },
            ]}
          />
          <div>
            <div className="flex flex-col justify-center items-center py-4">
              <div>
                <ImageProvider
                  aspectRatio={135 / 40}
                  src={"/assets/images/svgs/bazar.svg"}
                  width={135}
                  height={40}
                />
              </div>
              <div className="pt-2">
                <ImageProvider
                  aspectRatio={135 / 40}
                  src={"/assets/images/svgs/my-ket.svg"}
                  width={135}
                  height={40}
                />
              </div>
              <div className="pt-2">
                <ImageProvider
                  aspectRatio={135 / 40}
                  src={"/assets/images/svgs/bajeet.svg"}
                  width={135}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className={Styles.textContact}>ارتباط با ما</p>
            <p className={Styles.textAddress}>
              <span className="pe-2">
                <LocationIcon />
              </span>{" "}
              خیابان استاد نجات الهی، خیابان اراک، پلاک 48
            </p>
          </div>
          <div
            style={{ maxWidth: "328px", width: "100%" }}
            className="py-2 flex justify-between px-16 gap-0 mx-auto mb-4"
          >
            <Link className={Styles.linkMobile} href={"#"}>
              <InstagramIcon />
            </Link>
            <Link className={Styles.linkMobile} href={"#"}>
              <LinkedinIcon />
            </Link>
            <Link className={Styles.linkMobile} href={"#"}>
              <BaleIcon />
            </Link>
            <Link className={Styles.linkMobile} href={"#"}>
              <TelegramIcon />
            </Link>
            <Link className={Styles.linkMobile} href={"#"}>
              <TwitterIcon />
            </Link>
          </div>
          <div>
            <div className="flex justify-center items-center gap-4">
              <div>
                <ImageProvider
                  width={80}
                  aspectRatio={80 / 80}
                  src={"/assets/images/svgs/samandhi.svg"}
                />
              </div>
              <div>
                <ImageProvider
                  width={80}
                  aspectRatio={80 / 80}
                  src={"/assets/images/svgs/samandhi.svg"}
                />
              </div>
            </div>
          </div>
          <div className="px-4 pt-4">
            <div className="flex justify-between">
              <div>
                <LogoTypeIcon />
              </div>
              <div>
                <SimorqTejartIcon />
              </div>
            </div>
            <div className={Styles.sepratorMobile}></div>
          </div>
          <div className="pb-4 px-4">
            <p className={Styles.textFooter}>
              کلیه حقوق این سایت متعلق به شرکت سامانه‌های یکپارچه سیمرغ تجارت
              است.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
