import Link from "next/link";
import Container from "../Container";
import Wrapper from "../Wrapper";
import ContactUs from "../ContactUs";
import Social from "../Social";

import Styles from "./styles.module.scss";

import BazarIcon from "@/public/assets/images/svgs/bazar.svg";
import MyKetIcon from "@/public/assets/images/svgs/my-ket.svg";
import BajeetIcon from "@/public/assets/images/svgs/bajeet.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};

export default Footer;
