import { Collapse, Drawer } from "antd";
import { useState } from "react";
import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

import HomeIcon from "@/public/assets/images/svgs/home.svg";
import HomeActiveIcon from "@/public/assets/images/svgs/home-active.svg";
import RequestIcon from "@/public/assets/images/svgs/request.svg";
import AccountIcon from "@/public/assets/images/svgs/account-balance.svg";
import TejartIcon from "@/public/assets/images/svgs/tejart-drawer.svg";
import SimorqIcon from "@/public/assets/images/svgs/simorq-drawer.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const DrawerItem = ({ onClose, open }) => {
  const router = useRouter();

  return (
    <Drawer
      styles={{ header: { display: "none" } }}
      onClose={onClose}
      open={open}
    >
      <div className="py-7 px-4">
        <ImageProvider
          width={95}
          aspectRatio={95 / 20}
          src={"/assets/images/svgs/logo-type.svg"}
        />
      </div>
      <div className="pt-10">
        <Link href={"/"}>
          <div className={router.route == "/" ? Styles.boxActive : Styles.box}>
            <div>{router.route == "/" ? <HomeActiveIcon /> : <HomeIcon />}</div>
            <div className="ps-3">
              <p>خانه</p>
            </div>
          </div>
        </Link>
        <div className={Styles.wrapperCollapse}>
          <div className={router.route == "/bnpl" ? Styles.activate : ""}>
            <Collapse
              expandIcon={() => {
                return <span></span>;
              }}
              expandIconPosition="end"
              items={[
                {
                  key: "1",
                  label: "تسهیلات و اعتبارات",
                  children: (
                    <div>
                      <div className={Styles.item}>
                        <p>وام ازدواج</p>
                      </div>

                      <Link href={"/bnpl"}>
                        <div
                          className={
                            router.route == "/bnpl"
                              ? Styles.itemActive
                              : Styles.item
                          }
                        >
                          <p>خدمات اعتباری (BNPL)</p>
                        </div>
                      </Link>
                    </div>
                  ),
                  extra: (
                    <span>
                      <RequestIcon />
                    </span>
                  ),
                },
              ]}
            />
          </div>
          <div className={router.route == "/cart" ? Styles.activate : ""}>
            <Collapse
              expandIcon={() => {
                return <span></span>;
              }}
              expandIconPosition="end"
              items={[
                {
                  key: "1",
                  label: "خدمات بانکی",
                  children: (
                    <div>
                      <Link href={"/cart"}>
                        <div
                          className={
                            router.route == "/open-account"
                              ? Styles.itemActive
                              : Styles.item
                          }
                        >
                          <p>افتتاح حساب</p>
                        </div>
                      </Link>
                      <Link href={"/cart"}>
                        <div
                          className={
                            router.route == "/cart"
                              ? Styles.itemActive
                              : Styles.item
                          }
                        >
                          <p>خدمات کارت</p>
                        </div>
                      </Link>
                    </div>
                  ),
                  extra: (
                    <span>
                      <AccountIcon />
                    </span>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className={`${Styles.footer} gap-10`}>
        <TejartIcon />
        <SimorqIcon />
      </div>
    </Drawer>
  );
};

export default DrawerItem;
