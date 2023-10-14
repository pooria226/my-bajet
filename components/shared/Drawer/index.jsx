import { Collapse, Drawer } from "antd";
import { useState } from "react";
import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

import HomeIcon from "@/public/assets/images/svgs/home-active.svg";
import ArrowBottom from "@/public/assets/images/svgs/arrow-bottom.svg";
import RequestIcon from "@/public/assets/images/svgs/request.svg";
import AccountIcon from "@/public/assets/images/svgs/account-balance.svg";
import TejartIcon from "@/public/assets/images/svgs/tejart-drawer.svg";
import SimorqIcon from "@/public/assets/images/svgs/simorq-drawer.svg";

const DrawerItem = ({ onClose, open }) => {
  const [inputs, setInputs] = useState({
    acc1: [],
  });
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
        <div className={Styles.box}>
          <div>
            <HomeIcon />
          </div>
          <div className="ps-3">
            <p>خانه</p>
          </div>
        </div>
        <div className={Styles.wrapperCollapse}>
          <Collapse
            onChange={(e) =>
              setInputs((prev) => {
                return { ...prev, acc1: e };
              })
            }
            expandIcon={() => {
              return <RequestIcon />;
            }}
            items={[
              {
                key: "1",
                label: "تسهیلات و اعتبارات",
                children: (
                  <div>
                    <div className={Styles.item}>
                      <p>وام ازدواج</p>
                    </div>
                    <div className={Styles.item}>
                      <p>خدمات اعتباری (BNPL)</p>
                    </div>
                  </div>
                ),
                extra:
                  inputs.acc1.length > 0 ? (
                    <span className="mox">
                      <ArrowBottom />
                    </span>
                  ) : (
                    <ArrowBottom />
                  ),
              },
            ]}
          />
          <Collapse
            onChange={(e) =>
              setInputs((prev) => {
                return { ...prev, acc1: e };
              })
            }
            expandIcon={() => {
              return <AccountIcon />;
            }}
            items={[
              {
                key: "1",
                label: "خدمات بانکی",
                children: (
                  <div>
                    <div className={Styles.item}>
                      <p>افتتاح حساب</p>
                    </div>
                    <div className={Styles.item}>
                      <p>خدمات کارت</p>
                    </div>
                  </div>
                ),
                extra:
                  inputs.acc1.length > 0 ? (
                    <span className="mox">
                      <ArrowBottom />
                    </span>
                  ) : (
                    <ArrowBottom />
                  ),
              },
            ]}
          />
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
