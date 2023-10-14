import React from "react";

import Container from "../shared/Container";

import BajetIcon from "@/public/assets/images/svgs/bajet-brand.svg";
import SimorqIcon from "@/public/assets/images/svgs/simorq-brand.svg";
import TejartIcon from "@/public/assets/images/svgs/tejart-brand.svg";

import Styles from "./styles.module.scss";

const Brands = () => {
  return (
    <Container>
      <div className={Styles.wrapper}>
        <div className="grid grid-cols-12 py-4">
          <div className="col-span-12 flex justify-center items-center">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <p className={Styles.title}>
                  باجت، محصولی از سیمرغ تجارت به پشتوانه بانک تجارت
                </p>
              </div>
              <div className="col-span-4">
                <div style={{ filter: "grayscale(1)" }}>
                  <BajetIcon />
                </div>
              </div>
              <div className="col-span-4 flex justify-center">
                <SimorqIcon />
              </div>
              <div className="col-span-4 text-start flex justify-end">
                <TejartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Brands;
