import RadixCounter from '../Components/RadixCounter';
import Value from '../Components/Value';
import Adder from '../Components/Adder';
import Temperature from '../Components/Temperature';
import Timer from '../Components/Timer';

const Components = ({ counter, setCounter }) => {
  return (
    <div className="container border rounded p-3" style={{ width: '650px', background: '#fff' }}>
      {/* RADIX COUNTER */}
      <div className="mb-4 text-center">
        <RadixCounter />
      </div>

      {/* COUNTER + ADDER */}
      <div className="row mb-4">
        <div className="col-6 d-flex justify-content-center">
          <Value name="COUNTER" value={counter} setValue={setCounter} type="integer" />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Adder />
        </div>
      </div>

      {/* TIMER */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <Timer />
        </div>
      </div>

      {/* TEMPERATURE */}
      <div className="row mb-3">
        <div className="col d-flex justify-content-center">
          <Temperature />
        </div>
      </div>

      {/* ชื่อผู้จัดทำ */}
      <div className="pt-3 fw-bold text-center">
        <i>67188118 กนก รัตนเรืองรักษ์</i>
      </div>
    </div>
  );
};

export default Components;
