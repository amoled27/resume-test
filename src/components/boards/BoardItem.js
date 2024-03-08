const BoardItem = ({ text, type }) => {
    return (
      <div className="navbar-item">
        <div className="navbar-item-icon">
          <img src={type === "agent" ? "lock.png" : "box.png"} />
        </div>
        <div className="navbar-item-text">{text}</div>
      </div>
    );
  };
  
  export default BoardItem;
  