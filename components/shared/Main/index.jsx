import { Button } from "antd";

import Container from "../Container";

import BajetIcon from "@/public/assets/images/svgs/bajet.svg";
import CartIcon from "@/public/assets/images/svgs/cart.svg";

import Styles from "./styles.module.scss";
import ImageProvider from "@/provider/ImageProvider";

const Main = ({}) => {
  return (
    <Container>
      <div className={Styles.wrapper}>
        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="flex justify-center">
                <BajetIcon />
              </div>
              <div className="pt-2 flex justify-center">
                <p className={Styles.title}>
                  راهکاری نـــــو، برای نیاز تـــــو
                </p>
              </div>
              <div className="pt-10 mt-4 flex flex-col justify-center items-center">
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
            <ImageProvider
              aspectRatio={104 / 104}
              width={104}
              src={"/assets/images/svgs/book.svg"}
            />
          </div>
          <div className={Styles.wrapperDollar}>
            <ImageProvider
              aspectRatio={80 / 80}
              width={80}
              src={"/assets/images/svgs/dollar.svg"}
            />
          </div>
          <div className={Styles.wrapperWhitehouse}>
            <ImageProvider
              aspectRatio={144 / 144}
              width={144}
              src={"/assets/images/svgs/white-house.svg"}
            />
          </div>
          <div className={Styles.wrapperCart}>
            <ImageProvider
              aspectRatio={80 / 65}
              width={80}
              src={"/assets/images/svgs/cart.svg"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
