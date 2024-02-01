import React from "react";
import "./SonElanlar.css";
import { Elanlar } from "../Elanlar/Elanlar";
export const SonElanlar = () => {
   
  return (
    <>
     <h2 className="sonElanlarTitle">Son Elanlar</h2>
    <div className="sonElanlar">
       <Elanlar/>
      
    </div>
   

    
    </>
  );
};
