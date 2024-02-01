import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import "./Navbar2.css";
import { Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSettings } from "../../../context/settingsContext";
import logo from "../../../Assets/Images/logo_4x.png";

export const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  const { state } = useSettings();
  const navigate = useNavigate();

  const handleLogoClick = (event) => {
    event.preventDefault();
    navigate("/?page=1", { replace: true });
  };
  return (
    <nav>
      <Container fixed className="myContainer">
        <Grid container spacing={2}>
          <Grid item xs={2} className="logoParent">
            <Link to="/?page=1" onClick={handleLogoClick} className="logoLink">
              <img src={logo} alt="BirjaNews" className="logo" />
            </Link>
          </Grid>
          <Grid item xs={10} className="">
            {isMobile || isTablet ? (
              <div className="burgerMenu">
                <IconButton className="menuIcon" onClick={handleMenuToggle}>
                  {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
                  <IconButton className="closeIcon" onClick={handleMenuToggle}>
                    <CloseIcon />
                  </IconButton>
                  <ul>
                    <li>
                      <Link
                        to="/?page=1"
                        onClick={handleMenuToggle}
                        className={location.pathname === "/" ? "active" : ""}
                      >
                        Ana Sayfa
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuToggle}
                        to="/herracxeberleri?page=1"
                        className={
                          location.pathname === "/herracxeberleri"
                            ? "active"
                            : ""
                        }
                      >
                        Herrac Xeberleri
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuToggle}
                        to="/birjayenilikleri"
                        className={
                          location.pathname === "/birjayenilikleri"
                            ? "active"
                            : ""
                        }
                      >
                        Birja Yenilikleri
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuToggle}
                        to="/herracteskilatlari"
                        className={
                          location.pathname === "/herracteskilatlari"
                            ? "active"
                            : ""
                        }
                      >
                        Herrac Teskilatlari
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleMenuToggle}
                        to="/elaqe"
                        className={
                          location.pathname === "/elaqe" ? "active" : ""
                        }
                      >
                        Elaqe
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <ul className="menuLinks">
               <li>
                      <Link
                        to="/?page=1"
                        onClick={handleMenuToggle}
                        className={location.pathname === "/" ? "active" : ""}
                      >
                        Ana Sayfa
                      </Link>
                    </li>
                <li>
                  <Link
                    to="/herracxeberleri?page=1"
                    className={
                      location.pathname === "/herracxeberleri" ? "active" : ""
                    }
                  >
                    Herrac Xeberleri
                  </Link>
                </li>
                <li>
                  <Link
                    to="/birjayenilikleri"
                    className={
                      location.pathname === "/birjayenilikleri" ? "active" : ""
                    }
                  >
                    Birja Yenilikleri
                  </Link>
                </li>
                <li>
                  <Link
                    to="/herracteskilatlari"
                    className={
                      location.pathname === "/herracteskilatlari"
                        ? "active"
                        : ""
                    }
                  >
                    Herrac Teskilatlari
                  </Link>
                </li>
                <li>
                  <Link
                    to="/elaqe"
                    className={location.pathname === "/elaqe" ? "active" : ""}
                  >
                    Elaqe
                  </Link>
                </li>
              </ul>
            )}
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
};
