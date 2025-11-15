import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // ตรวจสอบให้แน่ใจว่าได้ import Bootstrap CSS แล้ว

export default function Calculator() {
  const [screen, setScreen] = useState('0');
  const [firstOperand, setFirstOperand] = useState(0);
  const [secondOperand, setSecondOperand] = useState(0);
  const [lastOperator, setLastOperator] = useState('?');
  const [state, setState] = useState('S0');

  const operatorClick = (operator) => {
    if (state === 'S1') {
      setFirstOperand(Number(screen));
      setLastOperator(operator);
      setState('S2');
    } else if (state === 'S2') {
      setLastOperator(operator);
    } else if (state === 'S0' && lastOperator === '=') {
      setFirstOperand(Number(screen));
      setLastOperator(operator);
      setState('S2');
    }
  };

  const equalClick = () => {
    if (state === 'S1' && lastOperator !== '?' && lastOperator !== '=') {
      const second = Number(screen);
      setSecondOperand(second);
      
      let result;
      if (lastOperator === '+') {
        result = (firstOperand + second).toString();
      } else if (lastOperator === '-') {
        result = (firstOperand - second).toString();
      }
      
      setScreen(result);
      setLastOperator('=');
      setState('S0');
    }
  };

  const ceClicked = () => {
    setScreen('0');
    setFirstOperand(0);
    setSecondOperand(0);
    setLastOperator('?');
    setState('S0');
  };

  const numberClick = (number) => {
    if (state === 'S0') {
      setScreen(number.toString());
      setState('S1');
    } else if (state === 'S1') {
      if (screen.length < 9) {
        if (screen === '0') {
          setScreen(number.toString());
        } else {
          setScreen(screen + number.toString());
        }
      }
    } else if (state === 'S2') {
      setScreen(number.toString());
      setState('S1');
    }
  };

  useEffect(() => {
    const checkKeyboard = (event) => {
      if (event.key >= '0' && event.key <= '9') {
        numberClick(Number(event.key));
      } else if (event.key === '+') {
        operatorClick('+');
      } else if (event.key === '-') {
        operatorClick('-');
      } else if (event.key === 'Enter' || event.key === '=') {
        equalClick();
      } else if (event.key === 'Escape' || event.key.toLowerCase() === 'c') {
        ceClicked();
      }
    };

    document.addEventListener('keydown', checkKeyboard);
    return () => document.removeEventListener('keydown', checkKeyboard);
  }, [screen, state, firstOperand, lastOperator, numberClick, operatorClick, equalClick, ceClicked]);

  // ปรับขนาดปุ่มใหม่
  const buttonCommonStyle = { 
    width: '3rem', 
    height: '3rem', 
    borderRadius: '0.5rem', 
    margin: '0.15rem', // ลด margin เล็กน้อย
    fontSize: '1.2rem', 
    fontWeight: 'bold' 
  };

  // สีตามภาพที่ให้มา
  const lightGreyBtn = { ...buttonCommonStyle, backgroundColor: '#f0f0f0', color: '#333' }; // Number buttons
  const lightBlueBtn = { ...buttonCommonStyle, backgroundColor: '#87CEEB', color: '#fff' }; // Skyblue buttons
  const redBtn = { ...buttonCommonStyle, backgroundColor: '#dc3545', color: '#fff' };     // CE button
  const activeOrangeBtn = { ...buttonCommonStyle, backgroundColor: '#fd7e14', color: '#fff' }; // Active operator/equals
  const darkBlueBtn = { ...buttonCommonStyle, backgroundColor: '#17A2B8', color: '#fff' }; // Darker blue for '+' and '='

  // สไตล์สำหรับปุ่มที่ไม่ได้ถูกกด
  const minusBtnStyle = lastOperator === '-' ? activeOrangeBtn : lightBlueBtn;
  const plusBtnStyle = lastOperator === '+' ? activeOrangeBtn : darkBlueBtn;
  const equalsBtnStyle = lastOperator === '=' ? activeOrangeBtn : darkBlueBtn;

  return (
    <div className="container d-flex justify-content-center pt-5">
      {/* ปรับความกว้างสูงสุดให้เหลือ 200px */}
      <div 
        className="p-3 border border-3 border-dark rounded-4 shadow-lg bg-light"
        style={{ maxWidth: '400px' }} 
      >
        
        {/* Display Screen: ปรับขนาดตัวอักษรและ height */}
        <div 
          className="bg-light border border-secondary rounded-3 mb-3 p-2 text-end fs-5 fw-bold overflow-hidden"
          style={{ height: '2.5rem', backgroundColor: '#e9ecef', fontSize: '1.5rem' }} 
        >
          {screen}
        </div>
        
        {/* Buttons Grid */}
        <div className="d-flex flex-column align-items-center">
          
          {/* Row 1: Memory & CE */}
          <div className="d-flex justify-content-between mb-1">
            <button className="btn" style={lightBlueBtn} disabled>MC</button>
            <button className="btn" style={lightBlueBtn} disabled>MR</button>
            <button className="btn" style={lightBlueBtn} disabled>M+</button>
            <button className="btn" style={lightBlueBtn} disabled>M-</button>
            <button className="btn" style={redBtn} onClick={ceClicked}>CE</button>
          </div>
          
          {/* Row 2: 7, 8, 9, ÷, √ */}
          <div className="d-flex justify-content-between mb-1">
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(7)}>7</button>
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(8)}>8</button>
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(9)}>9</button>
            <button className="btn" style={lightBlueBtn} disabled>÷</button>
            <button className="btn" style={lightBlueBtn} disabled>√</button>
          </div>
          
          {/* Row 3: 4, 5, 6, ×, % */}
          <div className="d-flex justify-content-between mb-1">
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(4)}>4</button>
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(5)}>5</button>
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(6)}>6</button>
            <button className="btn" style={lightBlueBtn} disabled>×</button>
            <button className="btn" style={lightBlueBtn} disabled>%</button>
          </div>
          
          {/* Row 4: 1, 2, 3, -, 1/x */}
          <div className="d-flex justify-content-between mb-1">
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(1)}>1</button>
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(2)}>2</button>
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(3)}>3</button>
            <button 
              className="btn"
              style={minusBtnStyle}
              onClick={() => operatorClick('-')}
            >−</button>
            <button className="btn" style={lightBlueBtn} disabled>1/x</button>
          </div>
          
          {/* Row 5: 0, ., +/-, +, = */}
          <div className="d-flex justify-content-between">
            <button className="btn" style={lightGreyBtn} onClick={() => numberClick(0)}>0</button>
            <button className="btn" style={lightGreyBtn} disabled>.</button>
            <button className="btn" style={lightGreyBtn} disabled>+/<sub>−</sub></button>
            <button 
              className="btn"
              style={plusBtnStyle}
              onClick={() => operatorClick('+')}
            >+</button>
            <button 
              className="btn"
              style={equalsBtnStyle}
              onClick={equalClick}
            >=</button>
          </div>
        </div>
      </div>
      
      <div className="fixed-bottom text-center mb-3 text-muted">67188118 นายกนก รัตนเรืองรักษ์</div>
    </div>
  );
}