import Container from "../Container";
import Faq from "../Faq";
import Help from "../Help";
import HeroOpenAccount from "../HeroOpenAccount";
import OpenAccountStep from "../OpenAccountStep";

const OpenAccount = ({ faqData = [] }) => {
  return (
    <Container>
      <div>
        <HeroOpenAccount />
      </div>
      <div>
        <OpenAccountStep />
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

export default OpenAccount;
