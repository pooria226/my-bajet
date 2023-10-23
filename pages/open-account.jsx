import Link from "next/link";
import { useState } from "react";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
import OpenAccount from "@/components/shared/OpenAccount";

const OpenAccountIndex = () => {
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
            { title: <Link href={"#"}>خدمات بانکی</Link> },
            { title: "افتتاح حساب" },
          ]}
        />
      }
      footer={<Footer />}
    >
      <OpenAccount />
    </MainLayotus>
  );
};

export default OpenAccountIndex;
