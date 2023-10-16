import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import Footer from "@/components/shared/Footer";
import Home from "@/components/Home";
import { useState } from "react";

const Index = () => {
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
      footer={<Footer />}
    >
      <Home />
    </MainLayotus>
  );
};

export default Index;
