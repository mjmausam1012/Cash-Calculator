import CashCalc from "./components/CashCalc.jsx"
import { BsCashCoin } from "react-icons/bs";

function App() {

  return (
    <>
      <h2 className="flex items-center justify-center text-center gap-4 text-4xl p-2"> <BsCashCoin /> Cash Calculator</h2>

      <CashCalc />
    </>
  )
}

export default App
