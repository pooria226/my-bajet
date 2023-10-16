import { Collapse } from "antd";

import Styles from "./styles.module.scss";

const CollapseItem = ({ items, defaultActiveKey }) => {
  return (
    <div className={Styles.wrapper}>
      <Collapse
        expandIconPosition="end"
        items={items}
        defaultActiveKey={defaultActiveKey}
        expandIcon={() => {
          return <span></span>;
        }}
      />
    </div>
  );
};

export default CollapseItem;
