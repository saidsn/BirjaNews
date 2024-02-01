import React from "react";
import "./FooterTop.css";
import { Container, Grid } from "@mui/material";
import Logo from "../../Common/Logo/Logo";
import { Link } from "react-router-dom";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Herraclar } from "../../Common/Herraclar/Herraclar";
import { BizimElaqelerimiz } from "../../Common/BizimElaqelerimiz/BizimElaqelerimiz";
import { useSettings } from "../../../context/settingsContext";

export const FooterTop = () => {
  const { state } = useSettings();
  return (
    <div>
      <Container>
        <Grid container spacing={2} marginTop={10} marginBottom={10} wrap="wrap">
          <Grid item xs={12} sm={12} md={2}>
            <div className="footerLogoSocial">
              <Logo />
              <ul className="footerSocial">
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
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Herraclar />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <div className="footerContact">
              <BizimElaqelerimiz />
              <Link className="contactButton" to={"/elaqe"}>Bizimlə Əlaqə</Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
