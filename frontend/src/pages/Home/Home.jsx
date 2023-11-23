import React from "react";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import logo from "/img/logo.png";

import NotesContainer from "../../components/NotesContainer/NotesContainer";
import NavBar from "../../components/NavBar/NavBar";
const Home = () => {
  return (
    <div>
      <NavBar />

      <NotesContainer />
    </div>
  );
};

export default Home;
