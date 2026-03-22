import React, { useState, useEffect } from "react"
import "../styles/ConverterWidget.css"
import { useLanguage } from "../context/LanguageContext"


function ConverterWidget() {
    const { t } = useLanguage()

    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState("LEK");
    const [result, setResult] = useState(null)
    const [toCurrency, setToCurrency] = useState("EUR")
    const [rate, setRate] = useState(null)

    async function convert(){
        if (!amount || amount === "") return;
        const res = await fetch(`https://eneokajo.pythonanywhere.com/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
        const data = await res.json()
        setRate(data.rate);
        setResult(data.result)
    }

    useEffect(() => {
  convert();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [amount, fromCurrency, toCurrency]);

    function handleSwap() {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency)
    }

    const CURRENCIES = ["LEK", "EUR", "CAD", "USD", "JPY", "GBP", "AUD", "CHF"];


    return (
        <div className='converter-widget'>
            <h1>{t.title}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>
            <div className="converter-row">
                <div className="converter-side">
                    <label>{t.from}</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value === "" ? "" : e.target.value)} placeholder="1" min="1" />
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <button className="swap-btn" onClick={handleSwap}>⇄</button>

                <div className="converter-side">
                    <label>{t.to}</label>
                    <input type="text" value={result ?? "—"} readOnly />
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
            </div>
            <p className="rate-display">
  {rate ? `1 ${fromCurrency} = ${rate} ${toCurrency}` : "—"}
</p>

        </div>
    )
}

export default ConverterWidget