import Container from "@/components/shared/Container";

const MainLayotus = ({ header, children, footer, breadCrumb }) => {
  return (
    <div>
      <div className="relative">
        <div>{header}</div>
        <div>{breadCrumb}</div>
      </div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

export default MainLayotus;
