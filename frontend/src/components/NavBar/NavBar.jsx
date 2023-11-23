import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faEdit,
  faTrashAlt,
  faBoxOpen,
  faBox,
  faTags,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "/img/logo.png";
import TagFilters from "../TagFilters/TagFilters";

const NavBar = () => {
  return (
    <div>
      <div>
        <img src={logo} alt=""  width="50px"/>
      </div>
      <div>
        <NavLink to="/archived">
          &gt;_ Archived Notes <FontAwesomeIcon icon={faBox} />
        </NavLink>
        {/* <NavLink to="/about">
        &gt;_ About Me <FontAwesomeIcon icon={faBox} />
      </NavLink> */}
      </div>

      <div>
      <FontAwesomeIcon icon={faTags} />
        <TagFilters />
        
      </div>
    </div>
  );
};

export default NavBar;
