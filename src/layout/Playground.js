import SidebarLayout from "./SidebarLayout";
import "./layout.css";

const Playground = () => {
  return (
    <div className="playground">
      <div className="header"></div>
      <div className="sidebar">
        <SidebarLayout />
      </div>
      <div className="main"></div>
    </div>
  );
};

export default Playground;
