import React from 'react';
const Navbar = ({total}) => {
  return ( 
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Navbar <span className="badge bg-secondary rounded-pill">{total}</span></a>
        </div>
      </nav>
    </>
   );
}

export default Navbar;