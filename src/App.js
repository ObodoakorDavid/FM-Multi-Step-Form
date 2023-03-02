/** @format */

import logo from "./logo.svg";
import "./App.css";
import { FormProvider } from "./context/FormContext";
import Layout from "./utils/Layout";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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
