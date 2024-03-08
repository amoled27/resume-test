const SearchItem = ({ text, type }) => {
  return (
    <div className="navbar-item">
      <div className="navbar-item-icon">
        <img src={type === "history" ? "clock.png" : "star.png"} />
      </div>
      <div className="navbar-item-text">{text}</div>
    </div>
  );
};

export default SearchItem;
