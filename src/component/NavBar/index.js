import React from "react";
import Icon, { SettingOutlined } from "@ant-design/icons";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar__tingwork">
        <a className="navbar-brand">Ting Work</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn my-2 my-sm-0" type="button">
              <SettingOutlined />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
