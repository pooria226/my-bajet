import Container from "../Container";
import HeroCart from "../HeroCart";
import Styles from "./styles.module.scss";

const Cart = ({}) => {
  return (
    <Container>
      <div className={Styles.wrapper}>
        <HeroCart />
      </div>
    </Container>
  );
};

export default Cart;
