import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import Footer from "@/components/shared/Footer";
import Home from "@/components/shared/Home";
import { useState } from "react";

const Index = () => {
  const [inputs, setInputs] = useState({
    drawer: false,
  });
  return (
    <MainLayotus
      title="اپلیکیشن باجت | ارائه دهنده خرید اعتباری bnpl، تسهیلات خرد و تسهیلات غیر حضوری ازدواج بانک تجارت"
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
      footer={<Footer />}
    >
      <Home />
    </MainLayotus>
  );
};

export default Index;
