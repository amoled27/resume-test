import "../App.css";
import Account from "./Account/Account";
import SidebarTag from "./SidebarTags";
import Board from "./boards/Board";
import Search from "./search/Search";

const Sidebar = () => {
  return (
    <div className="sidebar-list">
      <div className="logo w-90">
        <img src="logo.png" />
      </div>
      <div className="list-overflow">
        <SidebarTag tagName="My Templates" icon="template" />
        <SidebarTag tagName="Search" icon="search" />
        <div className="list">
          <Search />
        </div>
        <SidebarTag tagName="My Boards" icon="board" />
        <div className="list">
          <Board />
        </div>
      </div>
      <div className="account-container">
        <Account />
      </div>
    </div>
  );
};

export default Sidebar;
