import React from "react";
import { NavLink } from "react-router-dom";

import style from "./landingPage.module.css";
import logo from "/img/logo.png";

import { useFetchNotes } from "../../hooks/useFetchNotes";
import { useFetchTags } from "../../hooks/useFetchTags";

const LandingPage = () => {
  useFetchNotes();
  useFetchTags();
  console.log(useFetchNotes());
  console.log(useFetchTags());

  return (
    <div className={style.container}>
      <div className={style.contentOverlay}>
        <img className={style.img} src={logo} alt="Logo" />

        {/* button */}
        <NavLink to="/home" className={style.btn}>
          &gt;_ WELCOME TO YOUR NOTE NOOK
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
