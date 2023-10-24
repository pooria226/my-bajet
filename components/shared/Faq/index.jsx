import CollapseItem from "../Collapse";
import Wrapper from "../Wrapper";
import Stlyes from "./styles.module.scss";

const Faq = ({ data = [] }) => {
  return (
    <Wrapper>
      <div className={Stlyes.wrapper}>
        <div>
          <p className={Stlyes.title}>سوالات متداول</p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {data?.map((item, index) => {
            return (
              <div key={index} className="col-span-12">
                <CollapseItem
                  defaultActiveKey={0}
                  items={[
                    {
                      key: index,
                      label: item.title,
                      children: item.text,
                    },
                  ]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Faq;
