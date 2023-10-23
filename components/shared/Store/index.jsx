import { useState } from "react";
import { Button, Collapse } from "antd";
import Container from "../Container";
import Search from "../Search";
import StoreCard from "../StoreCard";
import Wrapper from "../Wrapper";
import { Tabs } from "antd";
import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

import FilterIcon from "@/public/assets/images/svgs/filter-alt.svg";
import ExpandMore from "@/public/assets/images/svgs/expand-more.svg";
import ExpandLess from "@/public/assets/images/svgs/expand-less.svg";
import FilterDeactive from "@/public/assets/images/svgs/filter-alt-deactive.svg";

const Store = () => {
  const [inputs, setInputs] = useState({
    acceptors: [],
    categories: [],
  });

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "پذیرندگان آنلاین",
      children: (
        <div>
          <div className="flex gap-2 pb-4 px-4">
            <div style={{ width: "82%" }}>
              <Search />
            </div>
            <div style={{ width: "18%" }}>
              <Button className={Styles.filterDiactive}>
                <FilterDeactive />
              </Button>
            </div>
          </div>
          <div className={Styles.list}>
            <div className={Styles.item}>
              <div className="flex gap-3">
                <div>
                  <ImageProvider
                    aspectRatio={1 / 1}
                    width={48}
                    height={48}
                    src={"/assets/images/svgs/store.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.title}>افق کوروش</p>
                  <p className={Styles.text}>کالای مصرفی</p>
                </div>
              </div>
            </div>
            <div className={Styles.item}>
              <div className="flex gap-3">
                <div>
                  <ImageProvider
                    aspectRatio={1 / 1}
                    width={48}
                    height={48}
                    src={"/assets/images/svgs/store.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.title}>افق کوروش</p>
                  <p className={Styles.text}>کالای مصرفی</p>
                </div>
              </div>
            </div>
            <div className={Styles.item}>
              <div className="flex gap-3">
                <div>
                  <ImageProvider
                    aspectRatio={1 / 1}
                    width={48}
                    height={48}
                    src={"/assets/images/svgs/store.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.title}>افق کوروش</p>
                  <p className={Styles.text}>کالای مصرفی</p>
                </div>
              </div>
            </div>
            <div className={Styles.item}>
              <div className="flex gap-3">
                <div>
                  <ImageProvider
                    aspectRatio={1 / 1}
                    width={48}
                    height={48}
                    src={"/assets/images/svgs/store.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.title}>افق کوروش</p>
                  <p className={Styles.text}>کالای مصرفی</p>
                </div>
              </div>
            </div>
            <div className={Styles.item}>
              <div className="flex gap-3">
                <div>
                  <ImageProvider
                    aspectRatio={1 / 1}
                    width={48}
                    height={48}
                    src={"/assets/images/svgs/store.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.title}>افق کوروش</p>
                  <p className={Styles.text}>کالای مصرفی</p>
                </div>
              </div>
            </div>
            <div className={Styles.item}>
              <div className="flex gap-3">
                <div>
                  <ImageProvider
                    aspectRatio={1 / 1}
                    width={48}
                    height={48}
                    src={"/assets/images/svgs/store.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.title}>افق کوروش</p>
                  <p className={Styles.text}>کالای مصرفی</p>
                </div>
              </div>
            </div>
            <div className={Styles.item}>
              <div className="flex gap-3">
                <div>
                  <ImageProvider
                    aspectRatio={1 / 1}
                    width={48}
                    height={48}
                    src={"/assets/images/svgs/store.svg"}
                  />
                </div>
                <div>
                  <p className={Styles.title}>افق کوروش</p>
                  <p className={Styles.text}>کالای مصرفی</p>
                </div>
              </div>
            </div>
            <div
              style={{ height: 56 }}
              className="flex justify-center items-center py-2"
            >
              <Button className={Styles.btnMore}>مشاهده بیشتر</Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "پذیرندگان حضوری",
      children: "Content of Tab Pane 2",
    },
  ];

  return (
    <Container>
      <div className={Styles.wrapper}>
        <div className="pt-12 md:block hidden">
          <Wrapper>
            <div className="grid grid-cols-12 lg:gap-x-20 md:gap-x-10">
              <div className="lg:col-span-4 md:col-span-5">
                <div className={Styles.wrapperFilter}>
                  <div
                    style={{ height: 48 }}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-2">
                      <div>
                        <FilterIcon />
                      </div>
                      <div>
                        <p>فیلتر</p>
                      </div>
                    </div>
                    <div>
                      <Button className={Styles.btnDelete}>حذف فیلتر</Button>
                    </div>
                  </div>
                  <div>
                    <Collapse
                      onChange={(e) =>
                        setInputs((prev) => {
                          return { ...prev, acceptors: e };
                        })
                      }
                      expandIconPosition="end"
                      expandIcon={() => {
                        return inputs.acceptors.length > 0 ? (
                          <span>
                            <ExpandMore />
                          </span>
                        ) : (
                          <span>
                            <ExpandLess />
                          </span>
                        );
                      }}
                      items={[
                        {
                          key: "1",
                          label: "پذیرندگان",
                          children: (
                            <div className="flex flex-wrap gap-x-2 gap-y-4">
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>حضوری</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                آنلاین
                              </Button>
                            </div>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      onChange={(e) =>
                        setInputs((prev) => {
                          return { ...prev, categories: e };
                        })
                      }
                      expandIconPosition="end"
                      expandIcon={() => {
                        return inputs.categories.length > 0 ? (
                          <span>
                            <ExpandMore />
                          </span>
                        ) : (
                          <span>
                            <ExpandLess />
                          </span>
                        );
                      }}
                      items={[
                        {
                          key: "1",
                          label: "دسته بندی فروشگاه‌ها",
                          children: (
                            <div className="flex flex-wrap gap-x-2 gap-y-4">
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>بیمه</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                مد و پوشاک
                              </Button>
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>بیمه</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                مد و پوشاک
                              </Button>
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>بیمه</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                مد و پوشاک
                              </Button>
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>بیمه</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                مد و پوشاک
                              </Button>
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>بیمه</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                مد و پوشاک
                              </Button>
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>بیمه</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                مد و پوشاک
                              </Button>
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>بیمه</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                مد و پوشاک
                              </Button>
                              <Button className={Styles.btnFilterActive}>
                                <span className="pe-2">
                                  <ImageProvider
                                    width={18}
                                    height={18}
                                    aspectRatio={18 / 18}
                                    src={"/assets/images/svgs/check.svg"}
                                  />
                                </span>
                                <span>بیمه</span>
                              </Button>
                              <Button className={Styles.btnFilter}>
                                مد و پوشاک
                              </Button>
                            </div>
                          ),
                        },
                      ]}
                    />
                    {inputs.acceptors.length > 0 ||
                    inputs.categories.length > 0 ? (
                      <div>
                        <Button className={Styles.btnAddFilter}>
                          اعمال فیلتر
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 md:col-span-7 pt-4">
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
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
                      <StoreCard />
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 col-span-12">
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
        <div lang="md:hidden block">
          <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Store;
