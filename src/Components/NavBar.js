import React, { Suspense, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NavBar = () => {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      className="navBar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#1C0030",
      }}
    >
      <div className="navLink">
        <NavLink to="/">{t("home")}</NavLink>
        <NavLink to="/about">{t("about")}</NavLink>
      </div>
      <div>
        <select
          value={localStorage.getItem("i18nextLng")}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
