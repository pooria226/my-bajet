import Link from "next/link";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import Footer from "@/components/shared/Footer";
import Home from "@/components/Home";

const Index = () => {
  return (
    <MainLayotus header={<Header />}>
      <Home />
    </MainLayotus>
  );
};

export default Index;
