import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title">Find your book of choice.</h2>
          <br />
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
