import { Link } from 'react-router-dom';

const AppNavbar = ({ products, carts, setToken }) => {
  return (
    <div className="d-flex justify-content-center gap-3" style={{ margin: "20px 0" }}>
      <Link to={'/'}><button className="btn btn-primary nav-btn">Home</button></Link>
      <Link to={'calculator'}><button className="btn btn-primary nav-btn">Calculator</button></Link>
      <Link to={'animation'}><button className="btn btn-primary nav-btn">Animation</button></Link>
      <Link to={'components'}><button className="btn btn-primary nav-btn">Components</button></Link>
      <Link to={'todos'}><button className="btn btn-primary nav-btn">Todos</button></Link>
      <Link to={'Products'}><button className="btn btn-primary nav-btn">Products ({products.length})</button></Link>
      <Link to={'Carts'}><button className="btn btn-primary nav-btn position-relative">
        Carts
        {carts.length > 0 && (
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carts.length < 10 ? carts.length : '9+'}
          </span>
        )}</button></Link>
      <button className="btn btn-danger nav-btn" onClick={() => { setToken('') }}>Logout</button>
    </div>
  );
};

export default AppNavbar;  // เปลี่ยนชื่อเป็น AppNavbar ให้ตรง
