import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Autoplay, Navigation, Pagination } from "swiper";
import "./CokIzlenenCarousel.css";
import { useAuctionPosts } from "../../../context/auctionPostsContext";
import { auctionPostsActions } from "../../../reducers/auctionPostsRecducer";
import { auctionPostsService } from "../../../APIs/Services/auctionPostsService";

const CokIzlenenCarousel = () => {


  //=======================
  // Initialize slider
  //=======================
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsiveBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  const SwiperContainer = styled(Swiper)`
    && {
      width: 100%;
      height: 100%;
    }
  `;

  const SwiperSlideContainer = styled(SwiperSlide)`
    && {
      display: flex;
      justify-content: center;
    }
  `;

  const Card = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid gray",
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  }));

  const CardImage = styled("img")(({ theme }) => ({
    width: "100%",
    height: "auto",
    aspectRatio: 4 / 3,
    marginBottom: theme.spacing(2),
    borderRadius: "8px",
  }));

  //=======================
  // Get data form api
  //=======================
  const { state, dispatch } = useAuctionPosts();

  useEffect(() => {
    (async () => {

      dispatch({ type: auctionPostsActions.start });

      try {
        const res = await auctionPostsService.getMostWatched();
        dispatch({ type: auctionPostsActions.success, payload: res.data });

      } catch (err) {
        dispatch({ type: auctionPostsActions.error, payload: err });

      }
    })();
  }, [dispatch]);

  const renderedPosts = state?.data?.advertisements?.map((item, i) => {
    return (
      <SwiperSlideContainer key={i} className="swiperSlide">
        <Link to={`/herracXeberleri/${item.id}`}>
          <Card className="cardHerrac">
            <CardImage src={item.imageUrl} alt={item.title} />
         
            <p>{item.title}</p>
          </Card>
        </Link>
      </SwiperSlideContainer>
    );
  });

  return (
    <SwiperContainer
      breakpoints={responsiveBreakpoints}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={
        windowWidth >= 1024
          ? responsiveBreakpoints[1024].slidesPerView
          : windowWidth >= 768
            ? responsiveBreakpoints[768].slidesPerView
            : responsiveBreakpoints[320].slidesPerView
      }
      spaceBetween={
        windowWidth >= 1024
          ? responsiveBreakpoints[1024].spaceBetween
          : windowWidth >= 768
            ? responsiveBreakpoints[768].spaceBetween
            : responsiveBreakpoints[320].spaceBetween
      }
      className="CokIzlenenCarousel"
    >
      {renderedPosts}
    </SwiperContainer>
  );
};

export default CokIzlenenCarousel;
