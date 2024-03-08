import BoardItem from "./BoardItem";

const Board = () => {
  const boardData = [
    {
      text: "Board 1",
      type: "board",
    },
    {
      text: "Board 2",
      type: "board",
    },
    {
      text: "Board 3",
      type: "board",
    },
    {
      text: "Board agent 1",
      type: "agent",
    },
    {
      text: "Board agent 2",
      type: "agent",
    },
    {
      text: "Board agent 3",
      type: "agent",
    },
  ];
  return (
    <div className="board">
      <div className="items-list">
        {boardData.map((item) => (
          <BoardItem text={item.text} type={item.type} />
        ))}
      </div>
    </div>
  );
};

export default Board;
