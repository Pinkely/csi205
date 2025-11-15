import React, { useState, useEffect, useRef } from 'react';
// ตรวจสอบว่าชื่อไฟล์และ path ตรงกัน
import basketballImage from '../assets/image/basketball.webp'; 
import footballImage from '../assets/image/football.webp';
import volleyballImage from '../assets/image/volleyball.jpg';
import humanImage from '../assets/image/dew.png'; 
import cartoonImage from '../assets/image/cartoon.jpg';
import logoImage from '../assets/image/logo.webp';

const BallAnimation = () => {
  const fieldWidth = 800;
  const fieldHeight = 600;
  const ballDiameter = 150;
  
  const maxX = fieldWidth - ballDiameter - 2;
  const maxY = fieldHeight - ballDiameter - 2;
  
  const [running, setRunning] = useState(false);
  const [selectedBall, setSelectedBall] = useState('None');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  
  const animationRef = useRef({
    goRight: true,
    x: 0,
    vx: 20,
    goDown: true,
    y: 0,
    vy: 5,
    rotation: 0,
    rotationSpeed: 5
  });

  const ballImages = {
    'Basketball': basketballImage,
    'Football': footballImage,
    'Volleyball': volleyballImage,
    'Human': humanImage,
    'Cartoon': cartoonImage,
    'Logo': logoImage
  };

  const calculate = () => {
    const anim = animationRef.current;
    let bounced = false;

    if (anim.goRight) {
      anim.x += anim.vx;
      if (anim.x >= maxX) {
        anim.x = maxX;
        anim.goRight = false;
        bounced = true;
      }
    } else {
      anim.x -= anim.vx;
      if (anim.x <= 0) {
        anim.x = 0;
        anim.goRight = true;
        bounced = true;
      }
    }

    if (anim.goDown) {
      anim.y += anim.vy;
      if (anim.y >= maxY) {
        anim.y = maxY;
        anim.goDown = false;
        bounced = true;
      }
    } else {
      anim.y -= anim.vy;
      if (anim.y <= 0) {
        anim.y = 0;
        anim.goDown = true;
        bounced = true;
      }
    }

    if (bounced) {
      anim.rotation += 180;
    } else {
      anim.rotation += anim.rotationSpeed;
    }
    anim.rotation = anim.rotation % 360;

    setPosition({ x: anim.x, y: anim.y });
    setRotation(anim.rotation);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculate();
      }
    }, 25); // 40 FPS

    return () => clearInterval(interval);
  }, [running]);

  const handleRunClick = () => {
    setRunning(!running);
  };

  const handleBallClick = (ballType) => {
    setSelectedBall(ballType);
  };

  const getBallStyle = () => {
    const baseStyle = {
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: `rotate(${rotation}deg)`,
      width: `${ballDiameter}px`,
      height: `${ballDiameter}px`,
      border: '1px solid black',
      borderRadius: '50%',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      position: 'absolute'
    };

    if (selectedBall === 'None') {
      return {
        ...baseStyle,
        backgroundColor: 'pink',
        backgroundImage: 'none'
      };
    } else {
      return {
        ...baseStyle,
        backgroundImage: `url('${ballImages[selectedBall]}')`,
        backgroundColor: 'white'
      };
    }
  };

  const ballButtons = ['Basketball', 'Football', 'Volleyball', 'Human', 'Cartoon', 'Logo'];

  return (
    <div style={styles.animContainer}>
      <div style={{ ...styles.animField, width: fieldWidth, height: fieldHeight }}>
        <div style={{ ...styles.animBall, ...getBallStyle() }}></div>
      </div>
      
      <div style={styles.animControl}>
        <button 
          className={`btn ${running ? 'btn-warning' : 'btn-success'}`}
          onClick={handleRunClick}
        >
          <i className={`bi ${running ? 'bi-pause' : 'bi-play'}`}></i>
          &nbsp;{running ? 'PAUSE' : 'Run'}
        </button>
        
        <div>
          <button 
            className={`btn ${selectedBall === 'None' ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => handleBallClick('None')}
          >
            None
          </button>
          
          {ballButtons.map((ball) => (
            <button
              key={ball}
              className={`btn ${selectedBall === ball ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleBallClick(ball)}
            >
              {ball}
            </button>
          ))}
        </div>
      </div>
      
      <div style={styles.text}>
        <b>67188118 กนก รัตน์เรืองรักษ์</b>
      </div>
    </div>
  );
};

const styles = {
  animContainer: {
    margin: 'auto',
    width: 'fit-content',
    border: '1px solid black',
    borderRadius: '1rem',
    padding: '1rem'
  },
  animField: {
    border: '1px solid black',
    borderRadius: '1rem',
    backgroundColor: 'white',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    position: 'relative'
  },

  animControl: {
    margin: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  text: {
    textAlign: 'center'
  }
};

export default BallAnimation;