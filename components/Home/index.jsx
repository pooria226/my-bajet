import React from "react";

import Brands from "../Brands";
import Main from "../shared/Main";
import Services from "../Services";
import Ask from "../shared/Ask";

const Home = () => {
  return (
    <div>
      <div>
        <Main />
      </div>
      <div>
        <Brands />
      </div>
      <div>{/* <Services /> */}</div>
      <div>{/* <Ask /> */}</div>
    </div>
  );
};

export default Home;
