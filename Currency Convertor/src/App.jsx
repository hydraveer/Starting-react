import { useState } from 'react'
import {InputBox} from "./component"
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] = useState(0)
  const [converted,setConverted]=useState(0)
  const [from,Setfrom]=useState("usd")
  const [to,Setto]=useState("inr")


 const currencyInfo=useCurrencyInfo(from)
 const options=Object.keys(currencyInfo)

 const swap=()=>{
  Setto(from)
  Setfrom(to)
  setAmount(converted)
  setConverted(amount)
 }
  const convert = () => {
    setConverted(amount * currencyInfo[to]);
  };
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>{
                              setAmount(amount)
                            }}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="to"
                            amount={converted}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>{
                              Setto(currency)
                            }}
                            selectCurrency={to}
                            onAmountChange={()=>setAmount(amount)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} To {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App;
