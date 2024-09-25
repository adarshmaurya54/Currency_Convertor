import { useId, useRef } from "react";

function InputBox({
    lable,
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false,
    currencyOptions = [],
    selectCurrency = "USD",
    margin = "0px"
}) {
    const amountInputId = useId();
    const inputRef = useRef();

    const selectInput = () => {
        inputRef.current.select();
    }
    return (
        <div style={{ marginBottom: margin }} className={`bg-white flex rounded-xl p-4 w-full`}>
            <div className="w-1/2 flex flex-col justify-between">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 text-xs transition-all md:text-lg inline-block">{lable}</label>
                <input ref={inputRef} onFocus={selectInput} step="any" id={amountInputId} type="number" className="placeholder:text-black text-xl bg-white outline-0" placeholder="0" disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div className="w-1/2 text-right">
                <p className="text-black/40 mb-2 text-xs transition-all md:text-lg">Currency Type</p>
                <select
                     className="outline-0 bg-black/10 rounded-lg p-1 text-sm w-[90px]" name="fruits"
                     id="fruit-select" value={selectCurrency}
                     disabled={currencyDisable}
                     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                     >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
export default InputBox;