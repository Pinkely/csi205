import { useState } from "react"
import Value from "./Value"

const Adder = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  return (
    <div className="border border-black border-2 rounded-3 mx-auto mt-3 p-3">
      <h1 className="text-center">Adder</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="badge bg-secondary">A = {a}</div>
        <div className="badge bg-primary">A + B = {a + b}</div>
        <div className="badge bg-secondary">B = {b}</div>
      </div>
      <div className="d-flex gap-2">
        <Value name={'A'} value={a} setValue={setA} type="integer" />
        <Value name={'B'} value={b} setValue={setB} type="integer" />
      </div>
    </div>
  )
}

export default Adder
