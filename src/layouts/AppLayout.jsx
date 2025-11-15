import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../Components/AppHeader';
import AppNavbar from '../Components/AppNavbar';
import AppFooter from '../Components/AppFooter';

function AppLayout( {products,carts,setToken} ) {
  return (
    <div>
      {/* หัวหน้าเว็บ */}
      <AppHeader />

      {/* เมนู */}
      <AppNavbar  products={products} carts={carts} setToken={setToken}/>

      <Outlet />

      <AppFooter /> 
    </div>
  );
}

export default AppLayout;
