import { Form, Input } from "antd";

import Styles from "./styles.module.scss";

import SearchIcon from "@/public/assets/images/svgs/search.svg";
import CloseIcon from "@/public/assets/images/svgs/close-search.svg";

const Search = ({ onChange, name, value = "" }) => {
  return (
    <div className={Styles.wrapper}>
      <Form.Item className="mb-0 w-full">
        <Input
          value={value}
          name={name}
          onChange={(e) =>
            onChange((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            })
          }
          className="w-full"
          placeholder="اسم فروشگاه را جستجو کنید"
          prefix={
            <span>
              <SearchIcon />
            </span>
          }
          {...(value != ""
            ? {
                suffix: (
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() =>
                      onChange((prev) => {
                        return { ...prev, shopName: "" };
                      })
                    }
                  >
                    <CloseIcon />
                  </span>
                ),
              }
            : {})}
        />
      </Form.Item>
    </div>
  );
};

export default Search;
