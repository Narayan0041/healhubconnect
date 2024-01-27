import React from "react";
import Slider from "./common/Slider/Slider";
import Navbar from "./Navbar/Navbar";
import DifferentSectionInContainer from "./Container.js/DifferentSection/DifferentSectionInContainer";
import WebsiteAbout from "./WebsiteAbout/WebsiteAbout";
import ShowCaseHeader from "./ShowCase/ShowCase";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <DifferentSectionInContainer />
      <ShowCaseHeader/>
      <WebsiteAbout/>
    </div>
  );
}
