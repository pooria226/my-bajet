import Wrapper from "../Wrapper";
import Styles from "./styles.module.scss";

const AdvantagesCredit = ({ data = [], title, titleMobile, col = "four" }) => {
  return (
    <div className={Styles.wrapper}>
      <div>
        <div className="md:block hidden">
          <p className={Styles.title}>{title}</p>
        </div>
        <div className="md:hidden block">
          <p className={Styles.title}>{titleMobile}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 pt-10 md:gap-y-0 gap-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                col == "four"
                  ? "md:col-span-4"
                  : col == "three"
                  ? "md:col-span-3"
                  : null
              } col-span-12`}
            >
              <div className="flex justify-center flex-col items-center">
                <div className={Styles.cricle}>{item.icon}</div>
                <div>
                  <p className={Styles.text}>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvantagesCredit;
