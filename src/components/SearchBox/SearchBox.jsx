import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";
import clsx from "clsx";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch()
  const filterValue = useSelector(selectNameFilter)

  return (
    <div className={s.col}>
      <label htmlFor="searchID">Find contacts by name</label>
      <input
        className={clsx(s.input, s.search_input)}
        type="search"
        name="name"
        defaultValue={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        id="searchID"
      />
    </div>
  );
};

export default SearchBox;
