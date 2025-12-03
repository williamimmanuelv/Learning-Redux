import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./Slices/CustomerSlice";
function CustomerView() {
  const customers = useSelector((state) => state.customers)
  const dispatch = useDispatch();
;  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index))
  }
  return (
    <>
      <h3> Customer view </h3>

      <ul style={{ listStyle: "none"}}>
        {customers.map((customer, index) =>
          <li> {customer} <button onClick={() => deleteHandler(index)}> Delete </button></li>
        )}
      </ul>

    </>
  )
}
export default CustomerView;