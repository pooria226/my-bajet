import Link from "next/link";
import { useState } from "react";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
import Store from "@/components/shared/Store";

const StoreIndex = () => {
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
            { title: <Link href={"/bnpl"}>خدمات اعتباری (BNPL)</Link> },
            { title: "فروشگاه‌ها" },
          ]}
        />
      }
      footer={<Footer />}
    >
      <Store />
    </MainLayotus>
  );
};

export default StoreIndex;
