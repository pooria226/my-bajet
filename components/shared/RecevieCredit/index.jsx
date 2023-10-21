import Styles from "./styles.module.scss";

import CheckIcon from "@/public/assets/images/svgs/check.svg";
import CloseIcon from "@/public/assets/images/svgs/close.svg";
import Wrapper from "../Wrapper";

const RecevieCredit = ({}) => {
  return (
    <div>
      <div className="md:block hidden">
        <div className={Styles.wrapper}>
          <Wrapper>
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
                    <p>
                      محاسبه اعتبار بر اساس رتبه اعتباری و میانگین موجودی حساب
                    </p>
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
          </Wrapper>
        </div>
      </div>
      <div className="md:hidden block">
        <div className={Styles.wrapper}>
          <div>
            <p className={Styles.title}>شرایط دریافت اعتبار از باجت</p>
          </div>
          <div className={Styles.innerWrapper}>
            <div className="flex justify-between gap-x-4">
              <div className={Styles.personal}>
                <p>شخصی</p>
              </div>
              <div className={Styles.organizational}>
                <p>سازمانی</p>
              </div>
            </div>
            <div className="pt-2" style={{ height: 84 }}>
              <div className="flex justify-center pt-2">
                <p className={Styles.item}>نیاز به حساب فعال تجارت</p>
              </div>
              <div className="flex justify-between px-8 pt-2">
                <div>
                  <CheckIcon />
                </div>
                <div>
                  <CheckIcon />
                </div>
              </div>
            </div>
            <div className={Styles.seprator}></div>
            <div className="t-2" style={{ height: 84 }}>
              <div className="flex justify-center pt-2">
                <p className={Styles.item}>نیاز به کارت پایان خدمت</p>
              </div>
              <div className="flex justify-between px-8 pt-2">
                <div>
                  <CheckIcon />
                </div>
                <div>
                  <CloseIcon />
                </div>
              </div>
            </div>{" "}
            <div className={Styles.seprator}></div>
            <div className="pt-2" style={{ height: 120 }}>
              <div className="flex justify-center pt-2">
                <p className={Styles.item}>
                  محاسبه اعتبار بر اساس رتبه اعتباری و میانگین موجودی حساب
                </p>
              </div>
              <div className="flex justify-between px-8 pt-2">
                <div>
                  <CheckIcon />
                </div>
                <div>
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecevieCredit;
