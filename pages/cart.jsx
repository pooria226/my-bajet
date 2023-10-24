import Link from "next/link";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Cart from "@/components/shared/Cart";
import Footer from "@/components/shared/Footer";
import { useEffect, useState } from "react";
import { cardFaqData } from "@/utils/data";

const CartIndex = () => {
  const [inputs, setInputs] = useState({
    drawer: false,
    faq: null,
  });

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, faq: cardFaqData };
    });
  }, []);

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
            { title: "خدمات کارت" },
          ]}
        />
      }
      footer={<Footer />}
    >
      <Cart faqData={inputs.faq} />
    </MainLayotus>
  );
};

export default CartIndex;
