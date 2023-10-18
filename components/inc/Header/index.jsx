import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Link from "next/link";

import Container from "@/components/shared/Container";
import DropdownItem from "@/components/shared/Dropdown";
import Wrapper from "@/components/shared/Wrapper";
import DrawerItem from "@/components/shared/Drawer";

import LogoIcon from "@/public/assets/images/svgs/logo.svg";
import BajetIcon from "@/public/assets/images/svgs/bajet.svg";
import MenuIcon from "@/public/assets/images/svgs/menu.svg";
import BajetTypeIcon from "@/public/assets/images/svgs/bajet-type.svg";

import Styles from "./styles.module.scss";

const Header = ({ onOpen, open, onClose }) => {
  const [inputs, setInputs] = useState({
    classes: "",
  });

  useEffect(() => {
    if (window != undefined) {
      document.addEventListener("scroll", (e) => {
        if (window.scrollY > 200) {
          setInputs((prev) => {
            return { ...prev, classes: "fixed-header" };
          });
        } else {
          setInputs((prev) => {
            return { ...prev, classes: "" };
          });
        }
      });
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <div className="md:block hidden">
          <div className={`${Styles.wrapper} ${inputs.classes}`}>
            <div className="flex justify-between">
              <div className="flex items-center">
                <Link href={"/"}>
                  <div className="flex">
                    <div>
                      <LogoIcon />
                    </div>
                    <div className="ps-3">
                      <BajetIcon />
                    </div>
                  </div>
                </Link>
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
                          label: <Link href="/bnpl">خدمات اعتباری (BNPL)</Link>,
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
                          label: <Link href="/cart">خدمات کارت</Link>,
                          key: "1",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className={`${Styles.wrapperMobile} ${inputs.classes}`}>
            <div className="flex">
              <Button onClick={onOpen}>
                <MenuIcon />
              </Button>
            </div>
            <div>
              <BajetTypeIcon />
            </div>
          </div>
        </div>
      </Wrapper>
      <DrawerItem open={open} onClose={onClose} />
    </Container>
  );
};

export default Header;
