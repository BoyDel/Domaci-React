import React from "react";
import Logo from "../logo.svg";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { AppContext } from "../App";
import { useContext } from "react";

function Header() {
  let navigate = useNavigate();
  const { showForm, setShowForm, formData } = useContext(AppContext);

  const handleClick = () => {
    setShowForm((prevVal) => !prevVal);
    for (const item in formData) {
      formData[item] = "";
    }
  };

  return (
    <header className="header">
      <img
        src={Logo}
        alt="logo icon"
        onClick={() => {
          navigate("./");
        }}
      />
      <button
        className="btn-add"
        onClick={() => {
          handleClick();
        }}
      >
        {!showForm ? "Add Post" : "Close Form"}
      </button>
    </header>
  );
}

export default Header;
