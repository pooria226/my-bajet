import { Button, Collapse, Drawer } from "antd";
import ImageProvider from "@/provider/ImageProvider";
import { useRouter } from "next/router";
import Link from "next/link";
import { appConfig } from "@/app-config";

import Styles from "./styles.module.scss";

import CloseIcon from "@/public/assets/images/svgs/close-search.svg";

const FilterDrawer = ({
  onClose,
  open,
  inputs,
  handleSelectCategory,
  handleResetFilter,
  handleApplyFilterMobile,
}) => {
  const router = useRouter();

  return (
    <Drawer
      styles={{ header: { display: "none" } }}
      onClose={onClose}
      open={open}
      placement="bottom"
      height={"100%"}
      width={"100%"}
      rootClassName="drawer-filter"
    >
      <div className={Styles.wrapper}>
        <div className={Styles.header}>
          <div>
            <p className={Styles.title}>فیلتر</p>
          </div>
          <div>
            <Button onClick={onClose} className={Styles.btnClose}>
              <CloseIcon />
            </Button>
          </div>
        </div>
        <div className={Styles.main}>
          <div>
            <p className={Styles.title}>دسته بندی فروشگاه‌ها</p>
          </div>
          <div>
            <div className="flex flex-wrap gap-x-2 gap-y-4">
              {Object.keys(inputs?.categoryData?.categoryDtos).map(
                (keyName, index) => {
                  return (
                    <Button
                      key={index}
                      className={
                        inputs?.categoryData?.categoryDtos[keyName].selected
                          ? Styles.btnFilterActive
                          : Styles.btnFilter
                      }
                      onClick={() => handleSelectCategory(keyName)}
                    >
                      {inputs?.categoryData?.categoryDtos[keyName].selected ? (
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
                        {inputs?.categoryData?.categoryDtos[keyName].name}
                      </span>
                    </Button>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className={Styles.fotter}>
          <Button onClick={handleApplyFilterMobile} className={Styles.filter}>
            اعمال فیلتر
          </Button>
          <Button onClick={handleResetFilter} className={Styles.deleteFilter}>
            حذف فیلتر‌ها
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
