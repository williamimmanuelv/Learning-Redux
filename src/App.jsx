import './App.css'
import CustomerAdd from './CustomerAdd'
import { Provider } from 'react-redux'
import { store } from './Store'
import CustomerView from './CustomerView'
function App() {

  return (
    <>
      <Provider store={store}>
        <h3> React Redux Customer Example </h3>
        <CustomerAdd />
        <CustomerView />
      </Provider>
    </>
  )
}

export default App
