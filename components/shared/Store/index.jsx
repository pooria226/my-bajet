import { Button } from "antd";
import Container from "../Container";
import Search from "../Search";
import StoreCard from "../StoreCard";
import Wrapper from "../Wrapper";

import Styles from "./styles.module.scss";

const Store = () => {
  return (
    <Container>
      <div className={Styles.wrapper}>
        <div className="pt-12">
          <Wrapper>
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <div className={Styles.wrapperFilter}></div>
              </div>
              <div className="col-span-8">
                <div className={Styles.wrapperStore}>
                  <div className="grid grid-cols-12 gap-4 items-center pb-3">
                    <div className="col-span-6">
                      <div className="flex justify-between">
                        <div>
                          <p className={Styles.storeTitle}>فروشگاه‌ها</p>
                        </div>
                        <div>
                          <p className={Styles.storeText}>267 عدد</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <Search />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-6">
                      <StoreCard />
                    </div>
                    <div className="col-span-12">
                      <Button className={Styles.btnMore}>مشاهده بیشتر</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </Container>
  );
};

export default Store;
