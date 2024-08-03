
import { useState } from "react"
import bg from "./Assets/bg.jpg"
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-no-repeat bg-center bg-cover w-full h-screen flex justify-center items-center">
      <div className="bg-[#ffffff30] backdrop-blur-md border-2 transition-all w-[350px] border-[#ffffff70] md:w-[600px] rounded-xl p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
            
        >
          <div className="relative">
            <InputBox amount={amount}
                      lable="From"
                      onAmountChange={(amount) => setAmount(amount)}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      currencyOptions={options}
                      selectCurrency={from}
                      margin="10px" />
            <InputBox amount={convertedAmount}
                      lable="To"
                      onCurrencyChange={(currency) => setTo(currency)}
                      currencyOptions={options}
                      selectCurrency={to}
                      amountDisable
                      margin="20px" />
            <button type="button" className="absolute left-1/2 transition-all hover:bg-cyan-500 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 py-1 md:text-lg text-sm text-white px-4 rounded-lg border-white border-2" onClick={swap}>SWAP</button>
          </div>
          <button type="submit" className="bg-cyan-400 transition-all hover:bg-cyan-500 text-white w-full rounded-xl py-3">Convert {from} to {to}</button>
        </form>
      </div>
    </div>
  )
}

export default App
