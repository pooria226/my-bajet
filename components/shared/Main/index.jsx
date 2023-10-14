import { Button } from "antd";

import Container from "../Container";
import ImageProvider from "@/provider/ImageProvider";

import BajetIcon from "@/public/assets/images/svgs/bajet.svg";
import BajetMiniIcon from "@/public/assets/images/svgs/bajet-mini.svg";

import Styles from "./styles.module.scss";

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
                  راهکاری نـــــو، برای نیاز تـــــو
                </p>
              </div>
              <div className="pt-10 md:px-0 px-4 text-center mt-4 flex flex-col justify-center items-center">
                <p className={Styles.text}>
                  ارائه آسان و سریع تسهیلات بدون حضور در شعبه
                </p>
                <p className={Styles.text}>
                  صدور سفته به عنوان وثیقه بدون کاغذبازی
                </p>
                <p className={Styles.text}>
                  و بسیاری خدمات بانکی دیگر که شما را از مراجعه به شعبه، بی‌نیاز
                  می‌کند.
                </p>
              </div>
              <div className="pt-10 mt-4 flex justify-center items-center">
                <Button className={Styles.btns}>دانلود اپلیکیشن باجت</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.wrapperBook}>
            <div className="md:inline-block hidden">
              <ImageProvider
                aspectRatio={104 / 104}
                width={104}
                src={"/assets/images/svgs/book.svg"}
              />
            </div>
            <div className="md:hidden inline-block">
              <ImageProvider
                aspectRatio={48 / 48}
                width={48}
                src={"/assets/images/svgs/book-mobile.svg"}
              />
            </div>
          </div>
          <div className={Styles.wrapperDollar}>
            <div className="md:inline-block hidden">
              <ImageProvider
                aspectRatio={80 / 80}
                width={80}
                src={"/assets/images/svgs/dollar.svg"}
              />
            </div>
            <div className="md:hidden inline-block">
              <ImageProvider
                aspectRatio={80 / 80}
                width={80}
                src={"/assets/images/svgs/dollar-mobile.svg"}
              />
            </div>
          </div>
          <div className={Styles.wrapperWhitehouse}>
            <div className="md:block hidden">
              <ImageProvider
                aspectRatio={144 / 144}
                width={144}
                src={"/assets/images/svgs/white-house.svg"}
              />
            </div>
            <div className="md:hidden block">
              <ImageProvider
                aspectRatio={80 / 80}
                width={80}
                src={"/assets/images/svgs/white-house-mobile.svg"}
              />
            </div>
          </div>
          <div className={Styles.wrapperCart}>
            <div className="md:inline-block hidden">
              <ImageProvider
                aspectRatio={80 / 65}
                width={80}
                src={"/assets/images/svgs/cart.svg"}
              />
            </div>
            <div className="md:hidden inline-block">
              <ImageProvider
                aspectRatio={56 / 45}
                width={56}
                src={"/assets/images/svgs/cart-mobile.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
