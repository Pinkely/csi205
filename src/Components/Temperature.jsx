import { useState } from "react"

const Temperature = () => {
    const [celsius, setCelsius] = useState(25.00)
    const [fahrenheit, setFahrenheit] = useState(77.00)
    const [kelvin, setKelvin] = useState(298.15)
    //คำนวณCELSIUS
    const updateFromCelsius = (c) => {
        setCelsius(c)
        setFahrenheit((c * 9/5) + 32)
        setKelvin(c + 273.15)
    }
    //คำนวณFahrenheit
    const updateFromFahrenheit = (f) => {
        setFahrenheit(f)
        const c = (f - 32) * 5/9
        setCelsius(c)
        setKelvin(c + 273.15)
    }
    //คำนวณKelvin
    const updateFromKelvin = (k) => {
        setKelvin(k)
        const c = k - 273.15
        setCelsius(c)
        setFahrenheit((c * 9/5) + 32)
    }

    return (
        <div className="border border-black border-2 rounded-3  p-3">
            <h1 className="text-center">TEMPERATURES</h1>
            <div className="d-flex justify-content-center gap-2 mb-3">
                <span className="badge bg-primary fs-6">{celsius.toFixed(2)} °C</span>
                <span className="badge bg-primary fs-6">{fahrenheit.toFixed(2)} °F</span>
                <span className="badge bg-primary fs-6">{kelvin.toFixed(2)} °K</span>
            </div>
            <div className="d-flex gap-2">
                <div className="border border-black border-2 rounded-3 p-2 bg-light">
                    <h5>CELSIUS</h5>
                    <div className="d-flex gap-2 align-items-center">
                        <button className="btn btn-danger" onClick={() => updateFromCelsius(celsius - 1)}>-</button>
                        <span className="fs-4 fw-bold">{celsius.toFixed(2)}</span>
                        <button className="btn btn-success" onClick={() => updateFromCelsius(celsius + 1)}>+</button>
                    </div>
                </div>
                <div className="border border-black border-2 rounded-3 p-2 bg-light">
                    <h5>FAHRENHEIT</h5>
                    <div className="d-flex gap-2 align-items-center">
                        <button className="btn btn-danger" onClick={() => updateFromFahrenheit(fahrenheit - 1)}>-</button>
                        <span className="fs-4 fw-bold">{fahrenheit.toFixed(2)}</span>
                        <button className="btn btn-success" onClick={() => updateFromFahrenheit(fahrenheit + 1)}>+</button>
                    </div>
                </div>
                <div className="border border-black border-2 rounded-3 p-2 bg-light">
                    <h5>KELVIN</h5>
                    <div className="d-flex gap-2 align-items-center">
                        <button className="btn btn-danger" onClick={() => updateFromKelvin(kelvin - 1)}>-</button>
                        <span className="fs-4 fw-bold">{kelvin.toFixed(2)}</span>
                        <button className="btn btn-success" onClick={() => updateFromKelvin(kelvin + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Temperature