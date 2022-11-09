import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => { dispatch(checkStatus()); }} type="submit" className="statusCheck">Check status</button>
      <p>{status}</p>
    </>
  );
};

export default Categories;
