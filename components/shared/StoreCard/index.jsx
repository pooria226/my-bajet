import ImageProvider from "@/provider/ImageProvider";

import Styles from "./styles.module.scss";

const StoreCard = () => {
  return (
    <div className={Styles.wrapper}>
      <div className="flex gap-4 items-center">
        <div>
          <ImageProvider
            aspectRatio={1 / 1}
            width={80}
            height={80}
            src={"/assets/images/svgs/store.svg"}
          />
        </div>
        <div>
          <div>
            <p className={Styles.title}>افق کوروش</p>
          </div>
          <div className="pt-1">
            <p className={Styles.text}>کالای مصرفی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
