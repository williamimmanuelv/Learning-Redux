import React, { Fragment , useRef, useState } from "react";
import './Todo_list.css'
function Todo_list(){
    const [state,setState] =useState({
    firstname : '',
    lastname : '',
    phonenumber : '',
    Email : '' ,
    Feedback : '' ,
  })

  const set = (event) => {
    const {name,value} = event.target;
    setState(prev => ({
      ...prev,
      [name] : value
    }))
  }
  const [submitted,setsubmitted] =useState([])
  const [setsave] = useState(null)
  // const [save,setsave] = useState(null)
  const ref = useRef();
  
//   const [reff,setreff] = useState(false);
//   useEffect(() => {
//     if (reff && ref.current) {
//       ref.current.focus()
//       setreff(false)
//     }
//   },[reff])

  const submit = (event) => {
    if (!state.firstname || !state.lastname || !state.phonenumber || !state.Email || !state.Feedback) {
      alert("Please fill all fields before submitting.");
        return;
      }

      if(state.phonenumber.length < 10 ){
        alert("Please fill the phone number fully.");
        return;
      }
      if(state.Email.length < 10 ){
        alert("Please fill the phone number fully.");
        return;
      }
    // setreff(true)

    event.preventDefault();
    setsave(state);

    if(editing !== null) {
      const update = [...submitted];
      update[editing] = {...state};
      setsubmitted(update)
    }
      else{
        setsubmitted((prev) => [...prev,{...state}])
      }

    
    setState({
      firstname : '',
      lastname : '',
      phonenumber : '',
      Email : '' ,
      Feedback : '' ,
    })
  }

  const [editing,setedit] = useState(null)
  const edit = (index) => {
    const ed = submitted[index]
    setState(ed)
    setsave(ed)
    setedit(index)

  }

  const del = (index) => {
    const unsubmit = [...submitted];
    unsubmit.splice(index,1)
    setsave(null)
    setsubmitted(unsubmit)
  }

  return(
    <Fragment>
      
      <h1 className="title"> Welcome! </h1>

      <form onSubmit={submit} className="form">
        <h1 className="form-title">Fill the Form</h1>

        <div className="div-input-1">
          <div className="input-1-name">
            <p className="input-1-1"> first name </p>
            <input className="input-1-1" name="firstname" value={state.firstname} placeholder="enter your first name" onChange={set} required />
          </div>

          <div className="input-1">
            <p className="input-1-2"> last name </p>
            <input className="input-1-2" name="lastname" value={state.lastname} placeholder="enter your last name" onChange={set} required />
          </div>
        </div>

        <div className="div-input-2">
          <p className="input-2-phone-num"> Phone number </p>
          <input className="input-2" type="number" name="phonenumber" value={state.phonenumber}  placeholder="enter your phone number" onChange={set} required/>
        </div>

        <div className="div-inputs-3">
          <p className="input-3-email"> E-mail </p>
          <input placeholder="enter your E-mail" name="Email" type="email" value={state.Email} onChange={set} required/>
        </div>

        <div className="div-inputs-4">
          <p className="input-4-feedback"> Feed-back </p>
          <input className="input-4-feed-back" name="Feedback" value={state.Feedback} placeholder="enter your feed-back"  onChange={set} required/>
        </div>
        <button ref={ref} type="submit"  className="submit" onClick={submit}> {editing === null ? 'Submit' : 'Update' } </button>
      </form>




      {submitted && (
        <div className="submitted-data">
          <h2>Submitted Data Preview</h2>
          {submitted.length > 0 && submitted.map ((entry,index) =>
            <div key={index}>
              <p>First Name: {entry.firstname}</p>
              <p>Last Name: {entry.lastname}</p>
              <p>Phone: {entry.phonenumber}</p>
              <p>Email: {entry.Email}</p>
              <p>Feedback: {entry.Feedback}</p>
              <button onClick={() => edit(index)}> Edit </button>
              <button onClick={() => del(index)}> Delete </button>
            </div>
            )
          }
        </div>

      )}
      
      {/* <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.6092974949333!2d-100.87706159999998!3d40.239988400000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877580e5b967e919%3A0xdb123b37c6ae4997!2sGolight%20Inc!5e0!3m2!1sen!2sin!4v1742712331358!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Location"
        ></iframe>
      </div> */}


    </Fragment>
  )
}
export default Todo_list;