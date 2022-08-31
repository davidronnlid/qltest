import Button from "@mui/material/Button/Button";
import { SyntheticEvent, useState } from "react";
import CCDatePicker from "./datePicker";

const CreditCardForm = () => {
  const [cCNumber, setCCNumber] = useState("");
  const [cCHolder, setCCHolder] = useState("");
  const [cCCVV, setCCCVV] = useState("");

  // Below is an attempt at abstracting reused logic (to DRY), but didn't quite get it to work properly
  // const handleInputChange = (event: SyntheticEvent) => {
  //   const targetInput = event.target as HTMLInputElement;
  //   if (targetInput.name === "Credit card number") {
  //     setCCNumber(targetInput.value);
  //   } else if (targetInput.name === "Credit card number") {
  //     setCCHolder(targetInput.value);
  //   } else if (targetInput.name === "CVV") {
  //     setCCCVV(targetInput.value);
  //   } else {
  //     console.log("Credit card form input handling error");
  //   }
  // };

  const handleCCNumberChange = (event: SyntheticEvent) => {
    const targetInput = event.target as HTMLInputElement;

    if (targetInput.value.length > targetInput.maxLength) {
      targetInput.value = targetInput.value.slice(0, targetInput.maxLength);
    }
    setCCNumber(targetInput.value);
  };

  const handleCCHolderChange = (event: SyntheticEvent) => {
    const targetInput = event.target as HTMLInputElement;

    const hasNumber = /\d/;

    if (hasNumber.test(targetInput.value)) {
      alert("Names cannot contain numbers.");
      return;
    } else {
      setCCHolder(targetInput.value);
    }
  };
  const handleCCCVVChange = (event: SyntheticEvent) => {
    const targetInput = event.target as HTMLInputElement;

    if (targetInput.value.length > targetInput.maxLength) {
      targetInput.value = targetInput.value.slice(0, targetInput.maxLength);
    }
    setCCCVV(targetInput.value);
  };

  const validateInputsFurther = (event: SyntheticEvent) => {
    if (cCNumber.length !== 16) {
      alert("Credit card number has to contain 16 characters.");
    } else if (cCCVV.length !== 3) {
      alert("Credit card CVV has to contain 3 characters.");
    } else if (!cCHolder) {
      alert("Please enter credit card holder name.");
    } else {
      alert(cCHolder + "e" + "Credit card information is of valid format.");
    }
  };

  return (
    <form>
      <label className="creditCardElement">
        Credit card number (required):
        <input
          type="number"
          name="Credit card number"
          onChange={handleCCNumberChange}
          value={cCNumber}
          className="creditCardElement cCNumber"
          required
          maxLength={16}
        />
      </label>
      <label className="creditCardElement">
        Card holder name (required):
        <input
          type="text"
          name="Card holder name"
          onChange={handleCCHolderChange}
          value={cCHolder}
          className="creditCardElement cCHolder"
          required
          minLength={3}
          // In case first name is one letter, and surname is one letter (" " will be length = 1)
          maxLength={60}
          // Or however long the longest card holder name can be
        />
      </label>
      <CCDatePicker />
      <label className="creditCardElement cCCVV">
        CVV (required):
        <input
          type="number"
          name="CVV"
          onChange={handleCCCVVChange}
          value={cCCVV}
          maxLength={3}
          className="creditCardElement"
          required
        />
      </label>
      <Button
        variant="outlined"
        className="creditCardElement cCSubmit"
        onClick={validateInputsFurther}
      >
        Submit
      </Button>
    </form>
  );
};

export default CreditCardForm;
