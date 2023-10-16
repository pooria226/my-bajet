import Container from "../Container";
import HeroCart from "../HeroCart";
import dynamic from "next/dynamic";

import Styles from "./styles.module.scss";

const CarouselItem = dynamic(() => import("../Carousel/index"), {
  ssr: false,
});

const Cart = ({}) => {
  return (
    <Container>
      <div className={Styles.wrapper}>
        <HeroCart />
      </div>
      <div>
        <CarouselItem />
      </div>
    </Container>
  );
};

export default Cart;
