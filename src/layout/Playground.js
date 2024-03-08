import Main from "../components/Main";
import SidebarLayout from "./SidebarLayout";
import "./layout.css";

const Playground = () => {
  return (
    <div className="playground">
      {/* <div className="header"></div> */}
      <div className="sidebar">
        <SidebarLayout />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

export default Playground;
