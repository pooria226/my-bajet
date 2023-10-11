import { Dropdown } from "antd";

import Styles from "./styles.module.scss";

import ArrowIcon from "@/public/assets/images/svgs/arrow-bottom.svg";
import { useState } from "react";

const DropdownItem = ({ items = [], text, active = false }) => {
  const [open, setState] = useState(false);

  return (
    <Dropdown
      rootClassName={Styles.dropdown}
      menu={{ items }}
      trigger={["hover"]}
      onOpenChange={(e) => setState(e)}
    >
      <a
        className={`${Styles.link} ${active && Styles.active}`}
        onClick={(e) => e.preventDefault()}
      >
        {!open ? (
          <span className="pe-3">
            <ArrowIcon />
          </span>
        ) : (
          <span className="ps-3" style={{ transform: "rotate(180deg)" }}>
            <ArrowIcon />
          </span>
        )}

        {text}
      </a>
    </Dropdown>
  );
};

export default DropdownItem;
