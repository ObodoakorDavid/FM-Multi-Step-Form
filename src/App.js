import logo from './logo.svg';
import './App.css';
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <div className="App">
      <FormProvider>
        Hello
      </FormProvider>
    </div>
  );
}

export default App;
