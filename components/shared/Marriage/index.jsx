import AbsenteeLoan from "../AbsenteeLoan";
import AdvantagesCredit from "../AdvantagesCredit";
import Container from "../Container";
import Faq from "../Faq";
import Help from "../Help";
import HeroMarriage from "../HeroMarriage";
import MarriageStep from "../MarriageStep";

const Marriage = ({ faqData = [], advantagesCredit = [] }) => {
  return (
    <Container>
      <div>
        <HeroMarriage />
      </div>
      <div>
        <AbsenteeLoan />
      </div>
      <div>
        <AdvantagesCredit
          title={<span>مزایای دریافت وام ازدواج از باجت</span>}
          data={advantagesCredit}
        />
      </div>
      <div>
        <MarriageStep />
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

export default Marriage;
