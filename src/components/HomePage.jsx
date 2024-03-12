import React from "react";
import Navbar from "./Navbar/Navbar";
import RoadMap from "./RoadMap/RoadMap";
import "./HomePage.css"
import Home from "./Home/Home";
import MissionStatement from "./MissionStatements/MissionStatement";


function HomePage() {
  return (
    <>

      <div className="web-container" >
        <Navbar />
        <Home />
        <RoadMap />
        <MissionStatement />
      </div>

    </>
  );
}

export default HomePage;
