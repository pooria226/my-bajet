import React, { useEffect } from "react";
import Aos from "aos";
import { ConfigProvider } from "antd";
import Head from "next/head";
import { wrapper } from "@/store/store";
import { Provider } from "react-redux";

import "@/styles/globals.scss";
import "aos/dist/aos.css";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Provider store={store}>
      <ConfigProvider direction={"rtl"}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="google-site-verification"
            content="g5goBHeczXF10lvgugltNDYBRRxyVmNpc3vk9eAsfkQ"
          />

          <title>{`اپلیکیشن باجت`}</title>

          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
          <meta name="screen-orientation" content="portrait" />
        </Head>
        <Component {...props} />
      </ConfigProvider>
    </Provider>
  );
}
