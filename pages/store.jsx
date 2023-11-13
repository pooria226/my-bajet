import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "@/components/inc/Header";
import MainLayotus from "@/components/layouts/MainLayouts";
import BreadCrumbItem from "@/components/shared/BreadCrumb";
import Footer from "@/components/shared/Footer";
import Store from "@/components/shared/Store";
import {
  useGetCategoryListMutation,
  useGetShopListMutation,
} from "@/store/apiSlice";

const StoreIndex = () => {
  const [inputs, setInputs] = useState({
    drawer: false,
    pageSize: 12,
    pageNo: 1,
    shopName: "",
    shopCategoryCodes: [],
    type: "BOTH",
    localData: { count: 0, shopDtoList: [] },
    acceptors: [],
    categories: [],
    firstRender: true,
    categoryData: { count: 0, categoryDtos: {} },
    filterDrawer: false,
    mobileFilter: null,
    windowWidth: 0,
  });
  console.log("oooooooooooooooooo", inputs.categoryData);
  //***************************
  // Store State
  //***************************
  const [getShopList] = useGetShopListMutation();
  const [getCategoryList] = useGetCategoryListMutation();

  const handleSetLocalData = async (mode) => {
    const result = await getShopList({
      pageSize: inputs.pageSize,
      pageNo: inputs.pageNo,
      shopName: inputs.shopName,
      shopCategoryCodes: inputs.shopCategoryCodes,
      type: inputs.type,
    });

    if (mode == "DUP")
      setInputs((prev) => {
        return {
          ...prev,
          localData: {
            count: result?.data?.data?.count,
            shopDtoList: [
              ...prev.localData.shopDtoList,
              ...result?.data?.data?.shopDtoList,
            ],
          },
        };
      });
    if (mode == "SET")
      setInputs((prev) => {
        return {
          ...prev,
          pageNo: 1,
          localData: {
            count: result?.data?.data?.count,
            shopDtoList: result?.data?.data?.shopDtoList,
          },
        };
      });
  };

  const handleSetCategoryList = async () => {
    const result = await getCategoryList();
    setInputs((prev) => {
      return {
        ...prev,
        categoryData: {
          count: result?.data?.data?.count,
          categoryDtos: result?.data?.data?.categoryDtos.reduce((a, v) => {
            return {
              ...a,
              [v.code]: { ...v, selected: false, applyed: false },
            };
          }, []),
        },
      };
    });
  };

  const handleSelectCategory = (keyName) => {
    setInputs((prev) => {
      return {
        ...prev,
        categoryData: {
          ...prev.categoryData,
          categoryDtos: {
            ...prev.categoryData.categoryDtos,
            [keyName]: {
              ...prev.categoryData.categoryDtos[keyName],
              selected: !prev.categoryData.categoryDtos[keyName].selected,
            },
          },
        },
      };
    });
  };

  const handleFillCategoryCode = () => {
    setInputs((prev) => {
      return {
        ...prev,
        shopCategoryCodes: Object.keys(prev.categoryData.categoryDtos).filter(
          (keyName, index) => {
            if (prev.categoryData.categoryDtos[keyName].selected) {
              return prev.categoryData.categoryDtos[keyName].code;
            }
          }
        ),
      };
    });
  };

  const handleFillCategoryCodeMobile = () => {
    setInputs((prev) => {
      return {
        ...prev,
        shopCategoryCodes: Object.keys(prev.categoryData.categoryDtos).filter(
          (keyName, index) => {
            if (
              prev.categoryData.categoryDtos[keyName].selected &&
              prev.categoryData.categoryDtos[keyName].applyed
            ) {
              return prev.categoryData.categoryDtos[keyName].code;
            }
          }
        ),
      };
    });
  };

  const handleResetFilter = () => {
    setInputs((prev) => {
      return {
        ...prev,
        shopName: "",
        shopCategoryCodes: [],
        type: "BOTH",
        filterDrawer: false,
        categoryData: {
          ...prev.categoryData,
          categoryDtos: Object.keys(prev.categoryData.categoryDtos).reduce(
            (a, v) => {
              return {
                ...a,
                [v]: { ...prev.categoryData.categoryDtos[v], selected: false },
              };
            },
            {}
          ),
        },
      };
    });
  };

  const handleTabChange = (tab) => {
    if (tab == 1)
      setInputs((prev) => {
        return { ...prev, type: "ONLINE", pageNo: 1 };
      });

    if (tab == 2)
      setInputs((prev) => {
        return { ...prev, type: "OFFLINE", pageNo: 1 };
      });
  };

  const handleApplyFilterMobile = () => {
    setInputs((prev) => {
      return {
        ...prev,
        filterDrawer: false,
        categoryData: {
          ...prev.categoryData,
          categoryDtos: Object.keys(prev.categoryData.categoryDtos).reduce(
            (a, v) => {
              if (prev.categoryData.categoryDtos[v].selected)
                return {
                  ...a,
                  [v]: { ...prev.categoryData.categoryDtos[v], applyed: true },
                };
              else {
                return {
                  ...a,
                  [v]: { ...prev.categoryData.categoryDtos[v] },
                };
              }
            },
            {}
          ),
        },
      };
    });
    handleFillCategoryCodeMobile();
    handleSetLocalData("SET");
  };

  useEffect(() => {
    if (!inputs.firstRender) handleSetLocalData("DUP");
  }, [inputs.pageNo]);

  useEffect(() => {
    if (!inputs.firstRender) handleSetLocalData("SET");
  }, [inputs.type]);

  useEffect(() => {
    const newVar = setTimeout(() => {
      if (!inputs.firstRender) handleSetLocalData("SET");
    }, 500);
    return () => clearTimeout(newVar);
  }, [inputs.shopName]);

  useEffect(() => {
    if (!inputs.firstRender && inputs.windowWidth >= 768)
      handleFillCategoryCode();
    if (!inputs.firstRender && inputs.windowWidth <= 768) {
      handleFillCategoryCodeMobile();
    }
  }, [inputs.categoryData.categoryDtos]);

  useEffect(() => {
    if (!inputs.firstRender && inputs.windowWidth >= 768)
      handleSetLocalData("SET");
  }, [inputs.shopCategoryCodes]);

  useEffect(() => {
    if (inputs.firstRender) {
      handleSetLocalData("SET");
      handleSetCategoryList();
      setInputs((prev) => {
        return { ...prev, firstRender: false };
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInputs((prev) => {
        return { ...prev, windowWidth: window.innerWidth };
      });
    });
  }, []);

  return (
    <MainLayotus
      header={
        <Header
          onOpen={() =>
            setInputs((prev) => {
              return { ...prev, drawer: true };
            })
          }
          open={inputs.drawer}
          onClose={() =>
            setInputs((prev) => {
              return { ...prev, drawer: false };
            })
          }
        />
      }
      breadCrumb={
        <BreadCrumbItem
          items={[
            { title: <Link href={"/"}>خانه</Link> },
            {
              title: (
                <Link href={"#"}>
                  <span className="md:hidden block">...</span>
                  <span className="md:block hidden">تسهیلات و اعتبارات</span>
                </Link>
              ),
            },
            { title: <Link href={"/bnpl"}>خدمات اعتباری (BNPL)</Link> },
            { title: "فروشگاه‌ها" },
          ]}
        />
      }
      footer={<Footer />}
    >
      <Store
        inputs={inputs}
        setInputs={setInputs}
        showMoreClick={handleSetLocalData}
        handleSelectCategory={handleSelectCategory}
        handleResetFilter={handleResetFilter}
        handleTabChange={handleTabChange}
        handleApplyFilterMobile={handleApplyFilterMobile}
      />
    </MainLayotus>
  );
};

export default StoreIndex;

// export const getStaticProps = wrapper.getStaticProps((store) => async ({}) => {
//   try {
//     await Promise.all([store.dispatch(api.endpoints.getBlogs.initiate())]);
//     return {
//       props: {},
//       revalidate: 30,
//     };
//   } catch (error) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: true,
//       },
//     };
//   }
// });
