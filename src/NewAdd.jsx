import { useState } from "react";
import ShowCustomer from "./NewShowCustomer";
import { useDispatch } from "react-redux";
import { addNewCustomer as newAdd } from "./Slices/NewSclices";
function NewAdd() {
  const [ newInput, setNewInput ] = useState('');
  // const [ newCustomer, setNewCustomer ] = useState([]);
  const dispatch = useDispatch();

  const addNewCustomer = () => {
    // setNewCustomer((prevCust) => [...prevCust, newInput]);
    dispatch(newAdd(newInput))
    setNewInput('')
    // console.log(newCustomer);
  }
  return (
    <>
      <h3> Add Customers </h3>
      <input type="text" placeholder="Enter the name" value={newInput} onChange={(e) => setNewInput(e.target.value)} />
      <button onClick={addNewCustomer}> Add Customer </button>
    </>
  )
}
export default NewAdd;