import Link from "next/link";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Cart from "@/components/shared/Cart";
import Footer from "@/components/shared/Footer";

const CartIndex = () => {
  return (
    <MainLayotus
      header={<Header />}
      breadCrumb={
        <BreadCrumbItem
          items={[
            { title: <Link href={"#"}>خانه</Link> },
            { title: <Link href={"#"}>خدمات بانکی</Link> },
            { title: "خدمات کارت" },
          ]}
        />
      }
      footer={<Footer />}
    >
      <Cart />
    </MainLayotus>
  );
};

export default CartIndex;
