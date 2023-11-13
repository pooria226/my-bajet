import Wrapper from "../Wrapper";
import { useRouter } from "next/router";

import CheckIcon from "@/public/assets/images/svgs/circle-check.svg";

import Styles from "./styles.module.scss";

const AbsenteeLoan = ({}) => {
  const router = useRouter();

  return (
    <div className={Styles.wrapper}>
      <Wrapper>
        <div className="md:block hidden">
          <p className={Styles.title}>شرایط دریافت غیرحضوری وام ازدواج</p>
        </div>
        <div className="md:hidden block">
          <p className={Styles.title}>
            شرایط دریافت غیرحضوری <br /> وام ازدواج
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 pt-10">
          <div className={Styles.boxes}>
            <div className="flex items-center">
              <div>
                <CheckIcon />
              </div>
              <div className="ps-4">
                <p className={Styles.boxText}>داشتن تابعیت ایرانی</p>
              </div>
            </div>
          </div>
          <div className={Styles.boxes}>
            <div className="flex items-center">
              <div>
                <CheckIcon />
              </div>
              <div className="ps-4">
                <p className={Styles.boxText}>تاریخ عقد 1398/01/01 به بعد</p>
              </div>
            </div>
          </div>
          <div className={Styles.boxes}>
            <div className="flex items-center">
              <div>
                <CheckIcon />
              </div>
              <div className="ps-4">
                <p className={Styles.boxText}>متولدین 1370 به بعد</p>
              </div>
            </div>
          </div>
          <div className={Styles.boxes}>
            <div className="flex items-center">
              <div>
                <CheckIcon />
              </div>
              <div className="ps-4">
                <p className={Styles.boxText}>عدم دریافت وام ازدواج تاکنون</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AbsenteeLoan;
