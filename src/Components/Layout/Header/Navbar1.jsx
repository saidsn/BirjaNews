import { Container, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Instagram, Facebook, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import "./Navbar1.css";
import { useSettings } from "../../../context/settingsContext";
import HeaderSearch from "./HeaderSearch";

export const Navbar1 = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.birjanews.az/api/Advertisement?pageNumber=1&pageSize=0&search=${searchData}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setData(data.advertisements);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [searchData]);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  

  

  const { state } = useSettings();

  return (
    <div className="navbarTop">
<div className="searchComponent">
<input className="inputSearch" type="text" placeholder="Search..." onChange={(e) => setSearchData(e.target.value)}/>
<HeaderSearch items={data} searchData={searchData} setSearchData={setSearchData} />

  </div>              
       <Container>
        <Grid
          container
          spacing={3}
          columns={12}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={4} className="navDate">
            <div className="Date">{currentDate}</div>
          </Grid>
          <Grid item xs={12} sm={8} className="navSocial">
            
              {/* <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <input type="text" placeholder="Search..." onChange={searchHandler}/> */}
            

            <ul className="socialIcons">
              <li>
                <Link to={state?.data?.instagram} target="_blank">
                  <Instagram fontSize="small" />
                </Link>
              </li>
              <li>
                <Link to={state?.data?.facebook} target="_blank">
                  <Facebook fontSize="small" />
                </Link>
              </li>
              <li>
                <Link to={state?.data?.youtube} target="_blank">
                  <YouTube fontSize="small" />
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container> 
    </div>
  );
};
