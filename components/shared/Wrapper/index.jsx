import Styles from "./styles.module.scss";

const Wrapper = ({ children }) => {
  return <div className={Styles.wrapper}>{children}</div>;
};

export default Wrapper;
