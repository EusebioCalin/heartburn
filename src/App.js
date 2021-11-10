import FormContainer from './components/form-component/FormComponent';
import store from './store/store'
import { Provider } from 'react-redux'

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormContainer/>
      </div>
    </Provider>
  );
}

export default App;
