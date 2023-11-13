import Container from "@/components/shared/Container";
import { FloatButton } from "antd";

import ArrowIcon from "@/public/assets/images/svgs/arrow-duble.svg";
import Head from "next/head";

const MainLayotus = ({ header, children, footer, breadCrumb, title }) => {
  return (
    <div>
      <div className="relative">
        <Head>
          <title>{title}</title>
        </Head>
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
