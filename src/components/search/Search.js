import SearchItem from "./SearchItem";

const searchHistoryData = [
  {
    text: "Software Engineer",
    type: "favorite",
  },
  {
    text: "Computer Hardware Engineer",
    type: "favorite",
  },
  {
    text: "Network Engineer",
    type: "favorite",
  },
  {
    text: "Technical Support",
    type: "favorite",
  },
  {
    text: "Network Administrator",
    type: "favorite",
  },
  {
    text: "Management",
    type: "favorite",
  },

  {
    text: "Data analysis",
    type: "favorite",
  },
  {
    text: "Computer Technician",
    type: "favorite",
  },
  {
    text: "Past search 1",
    type: "history",
  },
  {
    text: "Past search 2",
    type: "history",
  },
  {
    text: "Computers and information technology",
    type: "history",
  },
  {
    text: "Database Administrator",
    type: "history",
  },
  {
    text: "Computer Security",
    type: "history",
  },
  {
    text: "Computer Systems Analyst",
    type: "history",
  },
];
const Search = () => {
  return (
    <div className="search">
      {/* <input /> */}
      <div className="search-list">
        {searchHistoryData.map((item) => (
          <SearchItem text={item.text} type={item.type} />
        ))}
      </div>
    </div>
  );
};

export default Search;
