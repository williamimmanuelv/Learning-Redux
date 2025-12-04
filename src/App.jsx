import { Provider } from 'react-redux'
import './App.css'
import NewAdd from './NewAdd'
import NewShowCustomer from './NewShowCustomer'
import { NewStore } from './NewStore'
// import CustomerAdd from './CustomerAdd'
// import { Provider } from 'react-redux'
// import { store } from './Store'
// import CustomerView from './CustomerView'
// import Todo_list from './Todo-List/Todo_list'
function App() {

  return (
    <>
      {/* <Provider store={store}>
        <h3> React Redux Customer Example </h3>
        <CustomerAdd />
        <CustomerView />
      </Provider> */}
      {/* <Todo_list/> */}

      <Provider store={NewStore}>
        <NewAdd />
        <NewShowCustomer />
      </Provider>
    </>
  )
}

export default App
