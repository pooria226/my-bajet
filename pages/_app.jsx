import React, { useEffect } from "react";
import Aos from "aos";
import { ConfigProvider } from "antd";

import "@/styles/globals.scss";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ConfigProvider direction={"rtl"}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
