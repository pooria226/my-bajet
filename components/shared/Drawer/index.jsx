import { Button, Collapse, Drawer } from "antd";
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
import { appConfig } from "@/app-config";

const DrawerItem = ({ onClose, open }) => {
  const router = useRouter();

  return (
    <Drawer
      styles={{ header: { display: "none" } }}
      onClose={onClose}
      open={open}
      rootClassName="drawer-menu"
    >
      <div className="py-7 px-4">
        <Link href={"/"}>
          <ImageProvider
            width={95}
            aspectRatio={95 / 20}
            src={"/assets/images/svgs/logo-type.svg"}
          />
        </Link>
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
          <div
            className={
              router.route == "/bnpl" || router.route == "/marriage"
                ? Styles.activate
                : ""
            }
          >
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
                      <Link href={"/marriage"}>
                        <div
                          className={
                            router.route == "/marriage"
                              ? Styles.itemActive
                              : Styles.item
                          }
                        >
                          <p>وام ازدواج</p>
                        </div>
                      </Link>
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
                      <Link href={"/credit-loan"}>
                        <div
                          className={
                            router.route == "/credit-loan"
                              ? Styles.itemActive
                              : Styles.item
                          }
                        >
                          <p>اعتبار اقساطی پاکشوما</p>
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
          <div
            className={
              router.route == "/cart" || router.route == "/open-account"
                ? Styles.activate
                : ""
            }
          >
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
                      <Link href={"/open-account"}>
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
      <div className={`${Styles.footer} flex-col items-center`}>
        <div className="pb-2 w-full">
          <Link href={appConfig.appUrl}>
            <Button className={Styles.btnDownload}>دانلود باجت</Button>
          </Link>
        </div>
        <div className="pb-4">
          <p className={Styles.version}>ورژن: {appConfig.appVersion}</p>
        </div>
        <div
          style={{
            height: 40,
          }}
          className="flex items-center gap-10 pb-2"
        >
          <TejartIcon />
          <SimorqIcon />
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerItem;
