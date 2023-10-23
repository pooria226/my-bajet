import { Form, Input } from "antd";

import Styles from "./styles.module.scss";

import SearchIcon from "@/public/assets/images/svgs/search.svg";

const Search = () => {
  return (
    <div className={Styles.wrapper}>
      <Form.Item className="mb-0 w-full">
        <Input
          className="w-full"
          placeholder="اسم فروشگاه را جستجو کنید"
          prefix={
            <span>
              <SearchIcon />
            </span>
          }
        />
      </Form.Item>
    </div>
  );
};

export default Search;
