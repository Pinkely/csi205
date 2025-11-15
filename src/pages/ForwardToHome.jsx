import { useNavigate } from "react-router-dom";

const ForwardToHome = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <div className="text-center" style={{ marginTop: '50px' }}>
      <h2>Forward to Home</h2>
      <button 
        onClick={handleGoHome} 
        className="btn btn-primary"
        style={{ marginTop: '20px' }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ForwardToHome;







// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


// const ForwardToHome = () => {
//   const navigate = useNavigate();

  

//   useEffect(() => {
//     navigate('/home');
//   }, [navigate]);

//   return (
//     <div className="text-center">
//       <h2>Forward to home</h2>
//     </div>  
//   );
// };

// export default ForwardToHome;
