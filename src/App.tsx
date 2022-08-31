import CreditCard from "./components/creditCard/creditCard";
import HideAppBar from "./components/header";

function App() {
  return (
    <>
      <HideAppBar children={<></>} />
      <CreditCard />
    </>
  );
}

export default App;
