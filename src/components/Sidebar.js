import "../App.css";
import Board from "./boards/Board";
import Search from "./search/Search";

const Sidebar = () => {
    return <div>
        <div className="logo">
            <img src="logo.png"/>
        </div>
        <div className="list">
           <Search />
        </div>
        <div className="list">
           <Board />
        </div>
    </div>
}

export default Sidebar;
