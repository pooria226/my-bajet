import AdvantagesCredit from "../AdvantagesCredit";
import BnplStep from "../BnplStep";
import Container from "../Container";
import Faq from "../Faq";
import Help from "../Help";
import HeroBnpl from "../HeroBnpl";
import RecevieCredit from "../RecevieCredit";

const Bnpl = ({ faqData, advantagesCredit }) => {
  return (
    <Container>
      <div>
        <HeroBnpl />
      </div>
      <div>
        <RecevieCredit />
      </div>
      <div>
        <AdvantagesCredit
          title={"مزایای استفاده از اعتبار باجت"}
          titleMobile={"مزایای استفاده از اعتبار باجت"}
          data={advantagesCredit}
        />
      </div>
      <div>
        <BnplStep />
      </div>
      <div>
        <Faq data={faqData} />
      </div>
      <div>
        <Help text="پشتیبانی BNPL در کنار شماست" />
      </div>
    </Container>
  );
};

export default Bnpl;
