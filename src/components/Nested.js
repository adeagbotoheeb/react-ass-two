import { Link, Outlet } from "react-router-dom";
import React from 'react';

const Nested = () => {
  return (
    <>
    <div>
        <input type='search' placeholder="Search products" />
    </div>
    <nav>
      <Link to='featured'>Featured</Link>
      <Link to='news'>News</Link>
      <Link to='blog'>Blog</Link>
    </nav>
    <Outlet />
    </>
    
  )
}

export default Nested;