import AdvantagesCredit from "../AdvantagesCredit";
import BnplStep from "../BnplStep";
import Container from "../Container";
import Faq from "../Faq";
import Help from "../Help";
import HeroBnpl from "../HeroBnpl";
import RecevieCredit from "../RecevieCredit";

const Bnpl = () => {
  return (
    <Container>
      <div>
        <HeroBnpl />
      </div>
      <div>
        <RecevieCredit />
      </div>
      <div>
        <AdvantagesCredit />
      </div>
      <div>
        <BnplStep />
      </div>
       <div>
        <Faq />
      </div>
      <div>
        <Help text="پشتیبانی BNPL در کنار شماست" />
      </div> 
    </Container>
  );
};

export default Bnpl;
