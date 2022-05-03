import { useSelector } from "react-redux";
import "../styles/Header.css"
import SearchBar from "./SearchBar";
const Header = () => {
  let query = useSelector((state) => state.currentSearch);
  let pageNo = useSelector((state) => state.currPage);
  return (
    <header className="header">
      <SearchBar />
      <p className="text-center request-url">
        Requesting :{" "}
        <span className="url">
          {`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${pageNo}`}
        </span>
      </p>
    </header>
  );
};

export default Header;
