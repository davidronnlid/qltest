import { Card } from "@mui/material";
import CreditCardForm from "./ccForm";
import "./creditCard.scss";

const CreditCard = () => {
  return (
    <Card className="creditCardContainer">
      <h2 style={{ margin: "3rem" }}>
        Please enter your credit card information:
      </h2>
      <CreditCardForm />
    </Card>
  );
};

export default CreditCard;
