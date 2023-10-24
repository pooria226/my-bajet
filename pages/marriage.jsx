import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
import Marriage from "@/components/shared/Marriage";
import { openAccountFaqData } from "@/utils/data";

import AcuteIcon from "@/public/assets/images/svgs/acute.svg";
import TransportationIcon from "@/public/assets/images/svgs/transportation.svg";
import BalanceIcon from "@/public/assets/images/svgs/balance.svg";

const MarriageIndex = () => {
  const [inputs, setInputs] = useState({
    drawer: false,
    faq: null,
    advantagesCredit: [
      {
        icon: <AcuteIcon />,
        text: (
          <span>
            دریافت وام ازدواج در حداقل زمان ممکن (کاهش زمان <br /> دریافت از
            حداقل 3 هفته به حداکثر 1 ساعت)
          </span>
        ),
      },
      {
        icon: <TransportationIcon />,
        text: (
          <span>
            کاهش حدود 500 تا 600 هزار سفر شهری برای تحویل <br /> مدارک متقاضی و
            ضامن‌ها به شعب
          </span>
        ),
      },
      {
        icon: <BalanceIcon />,
        text: <span>افزایش عدالت اجتماعی با حذف نظرات سلیقه‌ای</span>,
      },
    ],
  });

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, faq: openAccountFaqData };
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
            { title: <Link href={"#"}>تسهیلات و اعتبارات</Link> },
            { title: "وام ازدواج" },
          ]}
        />
      }
      footer={<Footer />}
    >
      <Marriage
        advantagesCredit={inputs.advantagesCredit}
        faqData={inputs.faq}
      />
    </MainLayotus>
  );
};

export default MarriageIndex;
