import "@/styles/globals.scss";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider direction={"rtl"}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
