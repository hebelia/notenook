import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ConfigProvider } from "antd";
//pages
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import ArchivedNotes from "./pages/ArchivedNotes/ArchivedNotes";

//to be developed
// import About from "./pages/About/About";
// import Page404 from "./pages/404/Page404";
// import NavBar from "./components/NavBar/NavBar";

function App() {
  //pathname to hide nav
  // const { pathname } = useLocation();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#1f2124",
          // primary and secondary colors
          colorPrimary: "#f0a65c",
          colorSecondary: "#e57e2a",

          // other colors
          colorSuccess: "#b4d7a7",
          colorWarning: "#f5cc8a",
          colorError: "#c65315",
          // other customizations
          borderRadius: 10,
          colorBgContainer: "#F6F1F5",
          fontFamily: "'Poppins', sans-serif",
          colorLink: "#6eb4bf",
          colorInfo: "#C04C98",
          colorSplit: "black",
        },
      }}
    >
      {/* <div className="App"> */}

      {/* rendering the Nav component conditionally */}
      {/* {pathname !== "/" && <NavBar />} */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archived" element={<ArchivedNotes />} />
        {/* <Route path="/createNote" element={<CreateNote />} /> */}
        {/* <Route path="/login" /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/*" element={<Page404 />} /> */}
      </Routes>

      {/* </div> */}
    </ConfigProvider>
  );
}

export default App;
