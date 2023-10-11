import Link from "next/link";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
import Main from "@/components/shared/Main";

const Index = () => {
  return (
    <MainLayotus header={<Header />} footer={<Footer />}>
      <Main />
    </MainLayotus>
  );
};

export default Index;
