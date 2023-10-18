import { Breadcrumb } from "antd";
import Container from "../Container";
import Wrapper from "../Wrapper";
import { useEffect, useState } from "react";

import ChevronLeft from "@/public/assets/images/svgs/chevron-left.svg";

import Styles from "./styles.module.scss";

const BreadCrumbItem = ({ items = [] }) => {
  const [inputs, setInputs] = useState({
    fixed: "",
  });
  var lastScrollTop = 0;
  useEffect(() => {
    if (window != undefined) {
      document.addEventListener("scroll", (e) => {
        var st = window.screenY || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          // downscroll code
          setInputs((prev) => {
            return { ...prev, fixed: false };
          });
        } else if (st < lastScrollTop) {
          console.log("dssss");
          if (window.scrollY > 200) {
            setInputs((prev) => {
              return { ...prev, fixed: true };
            });
          } else {
            setInputs((prev) => {
              return { ...prev, fixed: false };
            });
          }
        }
        lastScrollTop = st <= 0 ? 0 : st;
      });
    }
  }, []);

  return (
    <Container>
      <div className={`${Styles.wrapper} ${inputs.fixed ? Styles.fixed : ""}`}>
        <Wrapper>
          <div>
            <Breadcrumb
              separator={
                <span className="px-2 flex">
                  <ChevronLeft />
                </span>
              }
              items={items}
            />
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};

export default BreadCrumbItem;
