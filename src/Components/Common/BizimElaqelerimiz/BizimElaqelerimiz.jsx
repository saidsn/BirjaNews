import { Mail, Phone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Location from "@mui/icons-material/LocationOn";
import "./BizimElaqelerimiz.css";
import { useSettings } from "../../../context/settingsContext";
export const BizimElaqelerimiz = () => {
  const { state } = useSettings();

  return (
    <div className="bizimElaqelerimiz">
      <h2>Bizim Əlaqələrimiz</h2>
      <ul>
        <li>
          <Location fontSize="small" className="footerContactIcon" />
          {state?.data?.adress}
        </li>
        <li>
          <Phone fontSize="small" className="footerContactIcon" />
          {state?.data?.phone}
        </li>
        <li>
          <Phone fontSize="small" className="footerContactIcon" /> {state?.data?.phone}
        </li>
        <li>
          <Link>
            <Mail fontSize="small" className="footerContactIcon" />
            {state?.data?.email}
          </Link>
        </li>
      </ul>
    </div>
  );
};
