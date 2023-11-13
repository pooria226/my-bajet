import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
import Marriage from "@/components/shared/Marriage";
import { CreditLoanData, creditLoanData, marriageFaqData } from "@/utils/data";
import CreditLoan from "@/components/shared/CreditLoan";

import AcuteIcon from "@/public/assets/images/svgs/acute.svg";
import PaymentIcon from "@/public/assets/images/svgs/payments.svg";
import ReceiptLongIcon from "@/public/assets/images/svgs/receipt-long.svg";
import ShoppingCartIcon from "@/public/assets/images/svgs/shopping-cart.svg";

const CreditLoanIndex = () => {
  const [inputs, setInputs] = useState({
    drawer: false,
    faq: null,
    advantagesCredit: [
      {
        icon: <ReceiptLongIcon />,
        text: (
          <span>
            دریافت اعتبار به صورت آنلاین و <br /> بدون مراجعه حضوری‌
          </span>
        ),
      },
      {
        icon: <AcuteIcon />,
        text: (
          <span>
            دریافت اعتبار با سپرده‌گذاری اندک و <br /> با فرصت خرج‌کرد یک‌ماهه‌
          </span>
        ),
      },
      {
        icon: <ShoppingCartIcon />,
        text: (
          <span>
            خرید حضوری از <br /> نمایندگی‌های پاکشوما
          </span>
        ),
      },
      {
        icon: <PaymentIcon />,
        text: (
          <span>
            امکان پرداخت نقدی برای <br /> خریدهای بیشتر از مبلغ اعتبار
          </span>
        ),
      },
    ],
  });

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, faq: creditLoanData };
    });
  }, []);

  return (
    <MainLayotus
      title={"اپلیکیشن باجت | تسهیلات ازدواج"}
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
            { title: "اعتبار اقساطی پاکشوما" },
          ]}
        />
      }
      footer={<Footer />}
    >
      <CreditLoan
        advantagesCredit={inputs.advantagesCredit}
        faqData={inputs.faq}
      />
    </MainLayotus>
  );
};

export default CreditLoanIndex;
