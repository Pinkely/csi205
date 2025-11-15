import { useState } from "react"


const RadixCounter = () => {

    const [value, setValue] = useState(0)

    const minusClick = () => {
        console.log('-')
        if (value <= 0) {
            setValue(4095)
        } else {
            setValue(prev => prev - 1)
        }
    }
    
    const resetClick = () => {
        console.log('reset')
        setValue(0)
    }
    
    const plusClick = () => {
        console.log('+')
        if (value >= 4095) {
            setValue(0)
        } else {
            setValue(prev => prev + 1)
        }
    }

    // แปลงเลขฐาน
    const toHex = (num) => num.toString(16).toUpperCase().padStart(3, '0')
    const toOct = (num) => num.toString(8).padStart(4, '0')
    const toBin = (num) => num.toString(2).padStart(12, '0')

   return (
    <div className="border border-2 border-black rounded-3 p-3 m-auto" style={{width: '400px'}}>
        {/* title */}
        <div className="text-center fw-bold fs-4">RADIX COUNTER</div>

        {/* body */}
        <div className="d-flex justify-content-between mt-3">
            <div className="text-center fw-bold">
                <div className="fw-bold">[HEX]</div><br />{toHex(value)}
            </div>
            <div className="text-center fw-bold">
                <div className="fw-bold">[DEC]</div><br />{value.toString().padStart(4, '0')}
            </div>
            <div className="text-center fw-bold">
                <div className="fw-bold">[OCT]</div><br />{toOct(value)}
            </div>
            <div className="text-center fw-bold">
                <div className="fw-bold">[BIN]</div><br />{toBin(value)}
            </div>
        </div>

        {/* button */}
        <div className="mt-3 d-flex justify-content-around">
            <button className="btn btn-danger px-4" onClick={minusClick}>&minus;</button>
            <button className="btn btn-secondary" onClick={resetClick}>RESET</button>
            <button className="btn btn-success px-4" onClick={plusClick}>+</button>
        </div>

    </div>
)

    
}
export default RadixCounter