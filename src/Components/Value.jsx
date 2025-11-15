import React, { useEffect } from 'react';

const Value = ({ name, initial = 0, type, value, setValue }) => {
  // ถ้า value หรือ setValue ไม่ถูกส่งมา ให้ใช้ internal state
  const [internalValue, setInternalValue] = React.useState(initial);

  const val = value !== undefined ? value : internalValue;
  const setter = setValue !== undefined ? setValue : setInternalValue;

  useEffect(() => {
    if (value === undefined) {
      setInternalValue(initial);
    }
  }, [initial, value]);

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto p-2 mt-3"
      style={{ width: 'fit-content', height: 'fit-content' }}
    >
      <h1 className="text-primary text-center">{name || 'VALUE'}</h1>
      <div className="d-flex justify-content-between align-items-center gap-2">
        <button
          className="btn btn-danger"
          onClick={() => setter(prev => Math.max(0, prev - 1))}
        >
          &minus;
        </button>
        <div className="fs-3 fw-bold">
          {type === 'real' ? val.toFixed(2) : Math.round(val)}
        </div>
        <button
          className="btn btn-success"
          onClick={() => setter(prev => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Value;
