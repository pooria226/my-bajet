import Wrapper from "../Wrapper";
import Styles from "./styles.module.scss";

const AdvantagesCredit = ({ data = [], title }) => {
  return (
    <div className={Styles.wrapper}>
      <div>
        <p className={Styles.title}>{title}</p>
      </div>
      <div className="grid grid-cols-12 pt-10 md:gap-y-0 gap-8">
        {data.map((item, index) => {
          return (
            <div key={index} className="md:col-span-4 col-span-12">
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
