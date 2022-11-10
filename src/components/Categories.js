import { useSelector, useDispatch } from "react-redux";
import { checkStatus } from "../redux/categories/categories";

const Categories = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector(state => state.categories);
  
  const category = (
    <>
      <button onClick={() => dispatch(checkStatus())} type="submit" className="statusCheck">Check status</button>
      <p>{categoryData}</p>
    </>
  );
  return category;
};

export default Categories;
