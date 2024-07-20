import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Reducers/cartReducer";


const useFetchCart = (id) => {
  const dispatch = useDispatch();
  const { cartData, isLoading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart(id));
  }, [dispatch, id]);

  return { cartData, isLoading, error };
};

export default useFetchCart;
