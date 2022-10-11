import { useState } from "react";

const useValidInput = (validateVal) => {
  const [value, setValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);
  const valueIsValid = validateVal(value);
  const valueHasError = !valueIsValid && valueTouched;

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setValueTouched(true);
  };

  const resetValue = () => {
    setValue("");
    setValueTouched(false);
  };
  return {
    value,
    valueHasError,
    valueIsValid,
    inputBlurHandler,
    inputChangeHandler,
    resetValue,
  };
};

export default useValidInput;
