import Container from "../Container";
import HeroCart from "../HeroCart";
import dynamic from "next/dynamic";
import Faq from "../Faq";

import Styles from "./styles.module.scss";
import Help from "../Help";
import CartService from "../CartService";

const CarouselItem = dynamic(() => import("../Carousel/index"), {
  ssr: false,
});

const Cart = ({}) => {
  return (
    <Container>
      <div className={Styles.wrapper}>
        <HeroCart />
      </div>
      <div className="md:block hidden">
        <CarouselItem />
      </div>
      <div className="md:hidden block">
        <CartService />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Help text={"پشتیبانی کارت در کنار شماست"} />
      </div>
    </Container>
  );
};

export default Cart;
