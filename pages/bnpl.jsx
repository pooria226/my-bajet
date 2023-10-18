import Link from "next/link";
import { useState } from "react";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
import Bnpl from "@/components/shared/Bnpl";

const BnplIndex = () => {
  const [inputs, setInputs] = useState({
    drawer: false,
  });
  return (
    <MainLayotus
      header={
        <Header
          onOpen={() =>
            setInputs((prev) => {
              return { ...prev, drawer: true };
            })
          }
          open={inputs.drawer}
          onClose={() =>
            setInputs((prev) => {
              return { ...prev, drawer: false };
            })
          }
        />
      }
      breadCrumb={
        <BreadCrumbItem
          items={[
            { title: <Link href={"/"}>خانه</Link> },
            { title: <Link href={"#"}>تسهیلات و اعتبارات</Link> },
            { title: "خدمات اعتباری (BNPL)" },
          ]}
        />
      }
      footer={<Footer />}
    >
      <Bnpl />
    </MainLayotus>
  );
};

export default BnplIndex;
