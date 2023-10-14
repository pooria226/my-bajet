import React from "react";
import { Button } from "antd";

import Container from "@/components/shared/Container";
import DropdownItem from "@/components/shared/Dropdown";
import Wrapper from "@/components/shared/Wrapper";

import LogoIcon from "@/public/assets/images/svgs/logo.svg";
import BajetIcon from "@/public/assets/images/svgs/bajet.svg";

import Styles from "./styles.module.scss";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <div className="md:block hidden">
          <div className={Styles.wrapper}>
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="flex">
                  <div>
                    <LogoIcon />
                  </div>
                  <div className="ps-3">
                    <BajetIcon />
                  </div>
                </div>
                <div className={Styles.wrapperMenu}>
                  <div>
                    <DropdownItem
                      active={true}
                      text={"تسهیلات و اعتبارات"}
                      items={[
                        {
                          label: <a href="#">وام ازدواج</a>,
                          key: "0",
                        },
                        {
                          label: <a href="#">خدمات اعتباری (BNPL)</a>,
                          key: "1",
                        },
                      ]}
                    />
                  </div>
                  <div className="ps-4">
                    <DropdownItem
                      text={"خدمات بانکی"}
                      items={[
                        {
                          label: <a href="#">افتتاح حساب</a>,
                          key: "0",
                        },
                        {
                          label: <a href="#">خدمات کارت</a>,
                          key: "1",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Button className={Styles.buttons}>ورود به باجت</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className={Styles.wrapperMobile}></div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
