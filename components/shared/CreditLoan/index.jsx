import AbsenteeLoan from "../AbsenteeLoan";
import AdvantagesCredit from "../AdvantagesCredit";
import Container from "../Container";
import CreditLoanStep from "../CreditLoanStep";
import Faq from "../Faq";
import Help from "../Help";
import HeroCreditLoan from "../HeroCreditLoan";
import HeroMarriage from "../HeroMarriage";

const CreditLoan = ({ faqData = [], advantagesCredit = [] }) => {
  return (
    <Container>
      <div>
        <HeroCreditLoan />
      </div>
      <div>
        <AdvantagesCredit
          col={"three"}
          title={<span>مزایای استفاده از اعتبار اقساطی پاکشوما</span>}
          titleMobile={
            <span>
              مزایای استفاده از اعتبار اقساطی <br /> پاکشوما
            </span>
          }
          data={advantagesCredit}
        />
      </div>
      <div>
        <CreditLoanStep />
      </div>
      <div>
        <Faq data={faqData} />
      </div>
      <div>
        <Help text="پشتیبانی در کنار شماست" />
      </div>
    </Container>
  );
};

export default CreditLoan;
