import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

import LocationIcon from "@/public/assets/images/svgs/location-on.svg";

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
        <div className="flex gap-4">
          <div>
            <ImageProvider
              width={80}
              aspectRatio={80 / 80}
              src={"/assets/images/svgs/samandhi.svg"}
            />
          </div>
          <div>
            <ImageProvider
              width={80}
              aspectRatio={80 / 80}
              src={"/assets/images/svgs/samandhi.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
