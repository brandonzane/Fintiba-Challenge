/* eslint-disable react/jsx-pascal-case */
import { GlobalStyle } from "./styles/GlobalReset";

import { IBAN_Check, IBAN_Result } from "./components";

import { IBAN_Provider } from "./context/IBAN_Context";

function App() {
  return (
    <IBAN_Provider>
      <GlobalStyle/>
      <IBAN_Check/>
      <IBAN_Result/>
    </IBAN_Provider>
  );
}

export default App;
