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
import FilterDrawer from "../FilterDrawer";

const Store = ({
  setInputs,
  inputs,
  handleSelectCategory,
  handleResetFilter,
  handleTabChange,
  handleApplyFilterMobile,
}) => {
  const items = [
    {
      key: "1",
      label: "پذیرندگان آنلاین",
      children: (
        <div>
          <div className="flex gap-2 pb-4 px-4">
            <div style={{ width: "calc(100% - 56px)" }}>
              <Search
                value={inputs?.shopName}
                onChange={setInputs}
                name="shopName"
              />
            </div>
            <div style={{ width: 56 }}>
              <Button
                onClick={() =>
                  setInputs((prev) => {
                    return { ...prev, filterDrawer: true };
                  })
                }
                className={Styles.filterDiactive}
              >
                <FilterDeactive />
              </Button>
            </div>
          </div>
          <div className={Styles.list}>
            {inputs.localData?.shopDtoList?.map((item, index) => {
              return (
                <div key={index} className={Styles.item}>
                  <div className="flex gap-3">
                    <div>
                      <ImageProvider
                        aspectRatio={1 / 1}
                        width={48}
                        height={48}
                        src={item?.logo || "/"}
                      />
                    </div>
                    <div>
                      <p className={Styles.title}>{item?.title}</p>
                      <p className={Styles.text}>{item?.categoryTitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              style={{ height: 56 }}
              className="flex justify-center items-center py-2"
            >
              <Button
                disabled={
                  Math.ceil(inputs?.localData?.count / 12) == inputs.pageNo
                }
                onClick={() =>
                  setInputs((prev) => {
                    return { ...prev, pageNo: prev.pageNo + 1 };
                  })
                }
                className={Styles.btnMore}
              >
                مشاهده بیشتر
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "پذیرندگان حضوری",
      children: (
        <div>
          <div className="flex gap-2 pb-4 px-4">
            <div style={{ width: "calc(100% - 56px)" }}>
              <Search
                value={inputs?.shopName}
                onChange={setInputs}
                name="shopName"
              />
            </div>
            <div style={{ width: 56 }}>
              <Button className={Styles.filterDiactive}>
                <FilterDeactive />
              </Button>
            </div>
          </div>
          <div className={Styles.list}>
            {inputs.localData?.shopDtoList?.map((item, index) => {
              return (
                <div key={index} className={Styles.item}>
                  <div className="flex gap-3">
                    <div>
                      <ImageProvider
                        aspectRatio={1 / 1}
                        width={48}
                        height={48}
                        src={item?.logo || "/"}
                      />
                    </div>
                    <div>
                      <p className={Styles.title}>{item?.title}</p>
                      <p className={Styles.text}>{item?.categoryTitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              style={{ height: 56 }}
              className="flex justify-center items-center py-2"
            >
              <Button
                disabled={
                  Math.ceil(inputs?.localData?.count / 12) == inputs.pageNo
                }
                onClick={() =>
                  setInputs((prev) => {
                    return { ...prev, pageNo: prev.pageNo + 1 };
                  })
                }
                className={Styles.btnMore}
              >
                مشاهده بیشتر
              </Button>
            </div>
          </div>
        </div>
      ),
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
                    {inputs?.type != "BOTH" ||
                    inputs?.shopCategoryCodes.length > 0 ? (
                      <div>
                        <Button
                          onClick={() => handleResetFilter()}
                          className={Styles.btnDelete}
                        >
                          حذف فیلتر
                        </Button>
                      </div>
                    ) : null}
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
                              <Button
                                className={
                                  inputs.type == "BOTH"
                                    ? Styles.btnFilterActive
                                    : Styles.btnFilter
                                }
                                onClick={() =>
                                  setInputs((prev) => {
                                    return { ...prev, type: "BOTH" };
                                  })
                                }
                              >
                                {inputs.type == "BOTH" ? (
                                  <span className="pe-2">
                                    <ImageProvider
                                      width={18}
                                      height={18}
                                      aspectRatio={18 / 18}
                                      src={"/assets/images/svgs/check.svg"}
                                    />
                                  </span>
                                ) : null}
                                <span>همه</span>
                              </Button>
                              <Button
                                className={
                                  inputs.type == "OFFLINE"
                                    ? Styles.btnFilterActive
                                    : Styles.btnFilter
                                }
                                onClick={() =>
                                  setInputs((prev) => {
                                    return { ...prev, type: "OFFLINE" };
                                  })
                                }
                              >
                                {inputs.type == "OFFLINE" ? (
                                  <span className="pe-2">
                                    <ImageProvider
                                      width={18}
                                      height={18}
                                      aspectRatio={18 / 18}
                                      src={"/assets/images/svgs/check.svg"}
                                    />
                                  </span>
                                ) : null}
                                <span>حضوری</span>
                              </Button>
                              <Button
                                onClick={() =>
                                  setInputs((prev) => {
                                    return { ...prev, type: "ONLINE" };
                                  })
                                }
                                className={
                                  inputs.type == "ONLINE"
                                    ? Styles.btnFilterActive
                                    : Styles.btnFilter
                                }
                              >
                                {inputs.type == "ONLINE" ? (
                                  <span className="pe-2">
                                    <ImageProvider
                                      width={18}
                                      height={18}
                                      aspectRatio={18 / 18}
                                      src={"/assets/images/svgs/check.svg"}
                                    />
                                  </span>
                                ) : null}
                                <span>آنلاین</span>
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
                              {Object.keys(
                                inputs?.categoryData?.categoryDtos
                              ).map((keyName, index) => {
                                return (
                                  <Button
                                    key={index}
                                    className={
                                      inputs?.categoryData?.categoryDtos[
                                        keyName
                                      ].selected
                                        ? Styles.btnFilterActive
                                        : Styles.btnFilter
                                    }
                                    onClick={() =>
                                      handleSelectCategory(keyName)
                                    }
                                  >
                                    {inputs?.categoryData?.categoryDtos[keyName]
                                      .selected ? (
                                      <span className="pe-2">
                                        <ImageProvider
                                          width={18}
                                          height={18}
                                          aspectRatio={18 / 18}
                                          src={"/assets/images/svgs/check.svg"}
                                        />
                                      </span>
                                    ) : null}
                                    <span>
                                      {
                                        inputs?.categoryData?.categoryDtos[
                                          keyName
                                        ].name
                                      }
                                    </span>
                                  </Button>
                                );
                              })}
                            </div>
                          ),
                        },
                      ]}
                    />
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
                          <p className={Styles.storeText}>
                            {inputs.localData?.count} عدد
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <Search
                        value={inputs?.shopName}
                        onChange={setInputs}
                        name="shopName"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    {inputs.localData?.shopDtoList?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="lg:col-span-6 md:col-span-12 col-span-12"
                        >
                          <StoreCard data={item} />
                        </div>
                      );
                    })}
                    <div className="col-span-12">
                      <Button
                        disabled={
                          Math.ceil(inputs?.localData?.count / 12) ==
                          inputs.pageNo
                        }
                        onClick={() =>
                          setInputs((prev) => {
                            return { ...prev, pageNo: prev.pageNo + 1 };
                          })
                        }
                        className={Styles.btnMore}
                      >
                        مشاهده بیشتر
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="md:hidden block">
          <div>
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={handleTabChange}
            />
            <FilterDrawer
              inputs={inputs}
              onClose={() =>
                setInputs((prev) => {
                  return { ...prev, filterDrawer: false };
                })
              }
              open={inputs.filterDrawer}
              handleSelectCategory={handleSelectCategory}
              handleResetFilter={handleResetFilter}
              handleApplyFilterMobile={handleApplyFilterMobile}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Store;
