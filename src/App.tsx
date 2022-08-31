import CreditCard from "./components/creditCard/creditCard";
import { Route, Routes } from "react-router-dom";
import TextAlgo from "./components/textAlgo/textAlgo";
import ArrayAlgo from "./components/arrayAlgo/arrayAlgo";
import HideAppBar from "./components/header";

function App() {
  return (
    <>
      <HideAppBar children={<></>} />

      <Routes>
        <Route path="/" element={<CreditCard />} />
        <Route path="text" element={<TextAlgo />} />
        <Route path="array" element={<ArrayAlgo />} />
      </Routes>
    </>
  );
}

export default App;
