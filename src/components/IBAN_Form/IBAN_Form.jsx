/* eslint-disable react/jsx-pascal-case */

import { Form_IBAN, Input_IBAN, Input_Submit } from "./IBAN_Form.styled"
import { useContext, useEffect, useState, useRef } from "react";
import IBAN_Context from "../../context/IBAN_Context";

function IBAN_Form() {

    const [IBAN_Input, setIBAN_Input] = useState('');

    const { IBAN, setIBAN, Validate } = useContext(IBAN_Context);

    const firstRender = useRef(true)

    useEffect(() => {

        const checks = async () => {
            Validate(IBAN);
        }

        checks()

    },[IBAN_Input])

    const handleSubmit = (event) => {
        event.preventDefault();
        setIBAN({ ...IBAN, IBAN: IBAN_Input });
        setIBAN_Input('');
    }

    console.log(IBAN);

  return (
    <Form_IBAN onSubmit={handleSubmit}>
       <label>
            <Input_IBAN 
                name="IBAN" 
                id="IBAN" 
                placeholder="Type IBAN ..."
                value={IBAN_Input}
                onChange={(event) => setIBAN_Input(event.target.value)}
                required/>
        </label>
        <Input_Submit type="submit" value="Submit" /> 
    </Form_IBAN>
  )
}

export default IBAN_Form