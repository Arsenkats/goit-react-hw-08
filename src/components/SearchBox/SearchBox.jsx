import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  return (
    <div className={css.container}>
      <label className={css.label}>
        <p>Search contacts by name</p>
        <input
          type='text'
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
