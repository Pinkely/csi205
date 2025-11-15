import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <div>
    <h4 className="text-center">
      มหาวิทยาลัยศรีปทุม คณะ เทคโนโลยีสารสนเทศ สาขา วิทยาการคอมพิวเตอร์และการพัฒนาซอฟแวร์
    </h4>
          <a
        href="https://www.facebook.com/kanok.ratanaruangruk"target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook" style={{ fontSize: "3rem", marginRight: "20px" }} ></i>
      </a>

      <a href="https://www.instagram.com/k_.naruk/" target="_blank" rel="noopener noreferrer" >
        <i className="bi bi-instagram" style={{ fontSize: "3rem", marginRight: "20px" }}></i>
       </a>

      <a href="https://github.com/Pinkely" target="_blank" rel="noopener noreferrer" >
        <i className="bi bi-github" style={{ fontSize: "3rem", marginRight: "20px" }}></i>
      </a>
    </div>
  );
};

export default AppFooter; 
