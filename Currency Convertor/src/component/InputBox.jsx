import {useId} from 'react'

function InputBox({
    label,
    amount,
    currencyOption=[],
    onAmountChange,
    onCurrencyChange,
    selectCurrency="USD",
    amountDisable=false,
    currencyDisable=false,
}) {
    
    const amountInputId=useId()
  return (
    <div className='bg-white p-3 rounded-xl text-sm flex'>
        <div className=' w-1/2'>
        <label htmlFor={amountInputId} className=' text-black/40 mb-2 inline-block'>
            {label}
        </label>
        <input
      type="number"
      id="amountInputId" // Replace with your actual ID or use a dynamic one
      className='outline-none w-full bg-transparent py-1.5'
      placeholder='Amount'
      onChange={(e) => onAmountChange(Number(e.target.value))}
      value={amount.toString()}
    />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select name="" id="" 
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e)=>onCurrencyChange&&
        onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
           {currencyOption.map((val)=>{
           return <option key={val} value={val}>
                {val}
            </option>
           })}
           
        </select>
        </div>
    </div>
  )
}

export default InputBox;