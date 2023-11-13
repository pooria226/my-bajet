import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

import LocationIcon from "@/public/assets/images/svgs/location-on.svg";
import Link from "next/link";

const ContactUs = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <div className="flex justify-between items-center w-full">
        <div>
          <p className={Styles.title}>ارتباط با ما</p>
          <div className="flex items-center mt-3">
            <span className="pe-2">
              <LocationIcon />
            </span>
            <p className={Styles.text}>
              خیابان استاد نجات الهی، خیابان اراک، پلاک 48
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => window.open("/assets/pdf/file.pdf")}
          >
            <ImageProvider
              aspectRatio={104 / 40}
              width={104}
              height={40}
              src={"/assets/images/svgs/danesh-bonyan.svg"}
            />
          </div>

          <div>
            <div>
              <img
                style={{ width: 80, height: 80 }}
                referrerPolicy="origin"
                id="rgvjnbqeesgtesgtnbqewlao"
                onClick={() =>
                  window.open(
                    "https://logo.samandehi.ir/Verify.aspx?id=320024&p=xlaouiwkobpdobpduiwkaods",
                    "Popup",
                    "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
                  )
                }
                alt="logo-samandehi"
                src="https://logo.samandehi.ir/logo.aspx?id=320024&p=qftiodrflymalymaodrfshwl"
                className="ecommerce-certificate"
              />
            </div>
          </div>
          <div>
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=307518&amp;Code=rK0pdm9REhlwQL5nbhau"
            >
              <img
                style={{ width: 80, height: 80 }}
                referrerPolicy="origin"
                src="https://Trustseal.eNamad.ir/logo.aspx?id=307518&amp;Code=rK0pdm9REhlwQL5nbhau"
                alt=""
                id="rK0pdm9REhlwQL5nbhau"
                className="ecommerce-certificate"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
