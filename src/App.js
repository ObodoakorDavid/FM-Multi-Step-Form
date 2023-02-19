/** @format */

import logo from "./logo.svg";
import "./App.css";
import { FormProvider } from "./context/FormContext";
import Layout from "./utils/Layout";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Layout>
          <Form />
        </Layout>
      </FormProvider>
    </div>
  );
}

export default App;
