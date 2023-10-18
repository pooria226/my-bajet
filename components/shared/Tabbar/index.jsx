import { Button } from "antd";
import Styles from "./styles.module.scss";

const Tabbar = ({ data = [], activeTab, onChange }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.wrapperButton}>
        {data.map((item, index) => {
          return (
            <Button
              onClick={() => onChange(item.tab)}
              className={activeTab == item.tab ? Styles.activeBtn : ""}
              key={index}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
      <div className="pt-4">
        <div>
          {data.map((item, index) => {
            if (item.tab == activeTab) {
              return (
                <div key={index}>
                  <p className={Styles.body}>{item.body}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="pt-6">
        {data.map((item, index) => {
          if (item.tab == activeTab) {
            return item.footer;
          }
        })}
      </div>
    </div>
  );
};

export default Tabbar;
