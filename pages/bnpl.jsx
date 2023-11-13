import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
import Bnpl from "@/components/shared/Bnpl";
import { bnplFaqData } from "@/utils/data";

import ShoppingCartIcon from "@/public/assets/images/svgs/shopping-cart.svg";
import ReceitLongIcon from "@/public/assets/images/svgs/receipt-long.svg";
import RedeemIcon from "@/public/assets/images/svgs/redeem.svg";

const BnplIndex = () => {
  const [inputs, setInputs] = useState({
    drawer: false,
    faq: null,
    advantagesCredit: [
      {
        icon: <ShoppingCartIcon />,
        text: (
          <span>
            دسترسی به تعداد زیادی فروشگاه و <br /> تعداد متنوعی محصول برای خرید
          </span>
        ),
      },
      {
        icon: <ReceitLongIcon />,
        text: (
          <span>
            بدون نیاز به فیش حقوقی، گواهی کسر از حقوق، <br /> چک و سفته برای
            اشخاص
          </span>
        ),
      },
      {
        icon: <RedeemIcon />,
        text: (
          <span>
            تقویت برند کارفرمایی سازمان‌ها <br /> با تعریف اعتبار برای کارمندان
          </span>
        ),
      },
    ],
  });

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, faq: bnplFaqData };
    });
  }, []);

  return (
    <MainLayotus
      title={"اپلیکیشن باجت | خرید اعتباری BNPL"}
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
      <Bnpl advantagesCredit={inputs.advantagesCredit} faqData={inputs.faq} />
    </MainLayotus>
  );
};

export default BnplIndex;
