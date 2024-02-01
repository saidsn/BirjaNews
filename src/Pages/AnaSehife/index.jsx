import React, { useEffect } from "react";
import HeaderCarousel from "../../Components/Common/HeaderCarousel/HeaderCarousel";
import "./index.css";
import { Container, Grid } from "@mui/material";
import CokIzlenenCarousel from "../../Components/Common/IzlenenSlider/CokIzlenenCarousel";
import { SonElanlar } from "../../Components/Common/SonElanlar/SonElanlar";
import { Sidebar } from "../../Components/Common/Sidebar/Sidebar";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  
  useEffect(() => {
    
    const currentURL = new URL(window.location.href);
    if (!currentURL.searchParams.get("page")) {
      navigate("?page=1");
    }
    
  },[navigate]);
  return (
    <div>
      <Helmet>
        <title>Ana Səhifə</title>
      </Helmet>
      <Container className="headerSlide">
        <HeaderCarousel className="HeaderCarousel" />
        <CokIzlenenCarousel />
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <SonElanlar />
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
}

export default Index;
