import Styles from "./styles.module.scss";

const Container = ({ children }) => {
  return <div className={Styles.wrapper}>{children}</div>;
};

export default Container;
