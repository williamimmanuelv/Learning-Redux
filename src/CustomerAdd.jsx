import { useEffect, useRef, useState } from "react";
import { addCustomer as addCustomerActions } from "./Slices/CustomerSlice";
import { useDispatch } from "react-redux";

function CustomerAdd() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  // const [customers, setCustomer] = useState([]);
  const addCustomer = () => {
    if (input) {
      // setCustomer((preState) => [...preState, input])
      dispatch( addCustomerActions(input) )
      // console.log(customers);
      setInput('')
    }
  }
  const ref = useRef();
  useEffect(()=> {
    ref.current.focus();
  })
  
  // const [showDatas, setShowData] = useState('')
  // const showData = () => {
  //   setShowData(customers);
  // }
  return (
    <>
      <h5> Add New Customer </h5>
      <input ref={ref} value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="enter customer details" />
      <button onClick={addCustomer}> Add </button>
      {/* <button onClick={showData}> Show the Datas </button> */}
      {/* <p>{showDatas}</p> */}
    </>
  )
}
export default CustomerAdd;