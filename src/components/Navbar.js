import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/archive">Arsip Catatan</Link>
        </li>
        <li>
          <Link to="/add">Buat Catatan Baru</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
