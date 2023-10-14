import ImageProvider from "@/provider/ImageProvider";

import CallIcon from "@/public/assets/images/svgs/call.svg";

import Styles from "./styles.module.scss";

const Ask = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <div className="flex justify-center">
        <p className={Styles.title}>هر سوالی داری بپرس</p>
      </div>
      <div className="flex justify-center items-center">
        <div style={{ paddingInlineEnd: 127 }}>
          <div className={Styles.text}>
            <p>تیم پشتیبانی باجت، ۷ روز هفته از ساعت 8 الی 20 در کنار توست.</p>
          </div>
          <div className={Styles.wrapperColor}>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="pe-2">
                  <CallIcon />
                </span>
                <p className={Styles.text}>شماره پشتیبانی باجت:</p>
              </div>
              <div>
                <p className={Styles.phone}>۰۲۱ - 25961300</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ImageProvider
            aspectRatio={450 / 311}
            width={450}
            src={"/assets/images/svgs/ask.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Ask;
