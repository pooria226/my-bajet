import { Breadcrumb } from "antd";

import Styles from "./styles.module.scss";
import Container from "../Container";

import ChevronLeft from "@/public/assets/images/svgs/chevron-left.svg";
import Wrapper from "../Wrapper";

const BreadCrumbItem = ({ items = [] }) => {
  return (
    <Container>
      <div className={Styles.wrapper}>
        <Wrapper>
          <div>
            <Breadcrumb
              separator={
                <span className="px-3 flex">
                  <ChevronLeft />
                </span>
              }
              items={items}
            />
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};

export default BreadCrumbItem;
