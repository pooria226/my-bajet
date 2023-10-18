import Styles from "./styles.module.scss";

import ShoppingCartIcon from "@/public/assets/images/svgs/shopping-cart.svg";
import ReceitLongIcon from "@/public/assets/images/svgs/receipt-long.svg";
import RedeemIcon from "@/public/assets/images/svgs/redeem.svg";

const AdvantagesCredit = ({}) => {
  return (
    <div className={Styles.wrapper}>
      <div>
        <p className={Styles.title}>مزایای استفاده از اعتبار باجت</p>
      </div>
      <div className="grid grid-cols-12 pt-10">
        <div className="col-span-4">
          <div className="flex justify-center flex-col items-center">
            <div className={Styles.cricle}>
              <ShoppingCartIcon />
            </div>
            <div>
              <p className={Styles.text}>
                دسترسی به تعداد زیادی فروشگاه و <br /> تعداد متنوعی محصول برای
                خرید
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-center flex-col items-center">
            <div className={Styles.cricle}>
              <ReceitLongIcon />
            </div>
            <div>
              <p className={Styles.text}>
                بدون نیاز به فیش حقوقی، گواهی کسر از حقوق، <br /> چک و سفته برای
                اشخاص
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-center flex-col items-center">
            <div className={Styles.cricle}>
              <RedeemIcon />
            </div>
            <div>
              <p className={Styles.text}>
                تقویت برند کارفرمایی سازمان‌ها <br /> با تعریف اعتبار برای
                کارمندان‌
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesCredit;
