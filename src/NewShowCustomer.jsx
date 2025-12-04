import { useDispatch, useSelector } from "react-redux";
import { DeleteFromTheList } from "./Slices/NewSclices";
function NewShowCustomer() {

  const newCustomers = useSelector((state) => state.customerss);
  const dispatch = useDispatch();


    const DeleteList = (index) => {
      dispatch(DeleteFromTheList(index));
    }
  return(
    <>
      <ul style={{listStyle:"none"}}>
        {newCustomers.map((value,index) => 
          <li  key={index}>name : {value}
           <button onClick={() => DeleteList(index)}> Delete </button>
          </li>
        )}
      </ul>
    </>
  )
}
export default NewShowCustomer;