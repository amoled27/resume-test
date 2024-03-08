import SearchItem from "./SearchItem";

const searchHistoryData = [
  {
    text: "Software Engineer",
    type: "favorite",
    id: 1,
  },
  {
    text: "Computer Hardware Engineer",
    type: "favorite",
    id: 2,
  },
  {
    text: "Network Engineer",
    type: "favorite",
    id: 3,
  },
  {
    text: "Technical Support",
    type: "favorite",
    id: 4,
  },
  {
    text: "Network Administrator",
    type: "favorite",
    id: 5,
  },
  {
    text: "Management",
    type: "favorite",
    id: 6,
  },

  {
    text: "Data analysis",
    type: "favorite",
    id: 7,
  },
  {
    text: "Computer Technician",
    type: "favorite",
    id: 8,
  },
  {
    text: "Past search 1",
    type: "history",
    id: 9,
  },
  {
    text: "Past search 2",
    type: "history",
    id: 10,
  },
  {
    text: "Computers and information technology",
    type: "history",
    id: 11,
  },
  {
    text: "Database Administrator",
    type: "history",
    id: 12,
  },
  {
    text: "Computer Security",
    type: "history",
    id: 13,
  },
  {
    text: "Computer Systems Analyst",
    type: "history",
    id: 14,
  },
];
const Search = () => {
  return (
    <div className="search">
      {/* <input /> */}
      <div className="search-list">
        {searchHistoryData.map((item) => (
          <SearchItem text={item.text} type={item.type} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
