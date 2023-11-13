import { Button } from "antd";

import Container from "../Container";
import ImageProvider from "@/provider/ImageProvider";

import BajetIcon from "@/public/assets/images/svgs/bajet-blue.svg";
import BajetMiniIcon from "@/public/assets/images/svgs/bajet-mini-blue.svg";

import Styles from "./styles.module.scss";
import Link from "next/link";
import { appConfig } from "@/app-config";

const Main = ({}) => {
  return (
    <Container>
      <div className={Styles.wrapper}>
        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="flex justify-center z-10 relative">
                <div className="md:block hidden">
                  <BajetIcon />
                </div>
                <div className="md:hidden block">
                  <BajetMiniIcon />
                </div>
              </div>
              <div className="md:pt-2 pt-4 flex justify-center">
                <p className={Styles.title}>
                  راهکاری نـــــو، <br /> برای نیاز تـــــو
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
