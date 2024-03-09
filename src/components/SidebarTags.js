const SidebarTag = ({ tagName, icon }) => {
  const iconMap = {
    board: "board.png",
    search: "search.png",
    template: "template.png",
  };
  return (
    <div className="tag">
      <div className="tag-icon">
        <img src={iconMap[icon]} />
      </div>
      <div className="tag-text">{tagName}</div>
    </div>
  );
};

export default SidebarTag;
