import Container from "@/components/shared/Container";
import { FloatButton } from "antd";

import ArrowIcon from "@/public/assets/images/svgs/arrow-duble.svg";

const MainLayotus = ({ header, children, footer, breadCrumb }) => {
  return (
    <div>
      <div className="relative">
        <div>{header}</div>
        <div>{breadCrumb}</div>
      </div>
      <div>{children}</div>
      <div>{footer}</div>
      <FloatButton.BackTop icon={<ArrowIcon />} />
    </div>
  );
};

export default MainLayotus;
