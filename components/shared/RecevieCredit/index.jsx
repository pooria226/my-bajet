import Styles from "./styles.module.scss";

import CheckIcon from "@/public/assets/images/svgs/check.svg";
import CloseIcon from "@/public/assets/images/svgs/close.svg";

const RecevieCredit = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <div>
        <p className={Styles.title}>شرایط دریافت اعتبار از باجت</p>
      </div>
      <div className={Styles.innerWrapper}>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className={Styles.termsReceipt}>
              <p>شرایط دریافت</p>
            </div>
            <div className={Styles.item}>
              <p>نیاز به حساب فعال تجارت</p>
            </div>
            <div className={Styles.item}>
              <p>نیاز به کارت پایان خدمت</p>
            </div>
            <div className={Styles.item}>
              <p>محاسبه اعتبار بر اساس رتبه اعتباری و میانگین موجودی حساب</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className={Styles.personal}>
              <p>شخصی</p>
            </div>
            <div className={Styles.itemIcon}>
              <div>
                <CheckIcon />
              </div>
            </div>
            <div className={Styles.itemIcon}>
              <div>
                <CheckIcon />
              </div>
            </div>
            <div className={Styles.itemIcon}>
              <div>
                <CheckIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className={Styles.organizational}>
              <p>سازمانی</p>
            </div>
            <div className={Styles.itemIcon}>
              <div>
                <CheckIcon />
              </div>
            </div>
            <div className={Styles.itemIcon}>
              <div>
                <CloseIcon />
              </div>
            </div>
            <div className={Styles.itemIcon}>
              <div>
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecevieCredit;
