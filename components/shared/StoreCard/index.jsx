import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

const StoreCard = ({ data }) => {
  return (
    <div className={Styles.wrapper}>
      <div className="flex gap-4 items-center">
        <div>
          <ImageProvider
            aspectRatio={1 / 1}
            width={80}
            height={80}
            src={data?.logo || "/"}
          />
        </div>
        <div>
          <div>
            <p className={Styles.title}>{data?.title}</p>
          </div>
          <div className="pt-1">
            <p className={Styles.text}>{data?.categoryTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
