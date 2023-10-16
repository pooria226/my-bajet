import React from "react";

import Container from "../shared/Container";
import ImageProvider from "@/provider/ImageProvider";

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
                <div
                  className="md:block hidden"
                  style={{ filter: "grayscale(1)" }}
                >
                  <ImageProvider
                    aspectRatio={54 / 48}
                    width={54}
                    height={48}
                    src={"/assets/images/svgs/bajet-brand.svg"}
                  />
                </div>
                <div
                  className="md:hidden block"
                  style={{ filter: "grayscale(1)" }}
                >
                  <ImageProvider
                    aspectRatio={23 / 32}
                    width={23}
                    height={32}
                    src={"/assets/images/svgs/bajet-brand.svg"}
                  />
                </div>
              </div>
              <div className="col-span-4 flex justify-center">
                <div className="md:block hidden">
                  <ImageProvider
                    aspectRatio={40 / 48}
                    width={40}
                    height={48}
                    src={"/assets/images/svgs/simorq-brand.svg"}
                  />
                </div>
                <div className="md:hidden block">
                  <ImageProvider
                    aspectRatio={26 / 32}
                    width={26}
                    height={32}
                    src={"/assets/images/svgs/simorq-brand.svg"}
                  />
                </div>
              </div>
              <div className="col-span-4 text-start flex justify-end">
                <div className="md:block hidden">
                  <ImageProvider
                    aspectRatio={35 / 48}
                    width={35}
                    height={48}
                    src={"/assets/images/svgs/tejart-brand.svg"}
                  />
                </div>
                <div className="md:hidden block">
                  <ImageProvider
                    aspectRatio={23 / 32}
                    width={23}
                    height={32}
                    src={"/assets/images/svgs/tejart-brand.svg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Brands;
