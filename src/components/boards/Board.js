import BoardItem from "./BoardItem";

const Board = () => {
  const boardData = [
    {
      text: "Board 1",
      type: "board",
      id: 1,
    },
    {
      text: "Board 2",
      type: "board",
      id: 6,
    },
    {
      text: "Board 3",
      type: "board",
      id: 2,
    },
    {
      text: "Board agent 1",
      type: "agent",
      id: 3,
    },
    {
      text: "Board agent 2",
      type: "agent",
      id: 4,
    },
    {
      text: "Board agent 3",
      type: "agent",
      id: 5,
    },
  ];
  return (
    <div className="board">
      <div className="items-list">
        {boardData.map((item) => (
          <BoardItem text={item.text} type={item.type} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Board;
