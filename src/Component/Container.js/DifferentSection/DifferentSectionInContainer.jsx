import React from "react";
import DifferentFeatureBox from "../../common/Slider/DifferentFeature/DifferentFeatureBox";
import { useNavigate } from "react-router-dom";

export default function DifferentSectionInContainer() {
    let navigate =useNavigate();
    const handleClickGet=(data)=>{
        if(data == "Report"){
            navigate("/getReport")
        }
        else if(data== "OneOnOne" ){
            navigate("/oneonone")
        }
        else if(data=== "Medicine"){
            navigate("/getMedicine")

        }
    }
  return (
      <><div style={{marginTop:"2rem" , marginLeft:"27rem"}}>
      <h1 className="differentSectionHeading">Our Features are</h1>
      </div>
    <div className="DifferentSectionInContainer" >
      <DifferentFeatureBox text="Your Report" image={"/image/file.jpg"} handleClick={()=>handleClickGet("Report")}/>
      <DifferentFeatureBox text="One On One" image={"/image/OneOnOne.jpg"}  handleClick={()=>handleClickGet("OneOnOne")}/>
      <DifferentFeatureBox text="Medicine" image={"/image/file.jpg"}  handleClick={()=>handleClickGet("Medicine")}/>
    </div>
    </>
  );
}
