import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../../../../node_modules/swiper/modules/pagination/pagination";
import "./BirjaYenilikElan.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { useBirjaNews } from "../../../context/birjaNewsContext";
import { birjaNewsActions } from "../../../reducers/birjaNewsReducer";
import { birjaNewsService } from "../../../APIs/Services/birjaNewsService";
import { Link } from "react-router-dom";
import { LinearProgress } from "@mui/material";

SwiperCore.use([Pagination, Autoplay]);
export const BirjaYenilikElan = () => {
  //=======================
  // Get data from api
  //=======================
  const { state, dispatch } = useBirjaNews();


  useEffect(() => {
    (async () => {

      dispatch({ type: birjaNewsActions.start });

      try {
        const res = await birjaNewsService.getLatestNews();
        dispatch({ type: birjaNewsActions.success, payload: res.data });

      } catch (err) {
        dispatch({ type: birjaNewsActions.error, payload: err });
      }
    })();
  }, [dispatch]);
  const isMobileOrTablet = window.innerWidth <= 1024;



  const renderedNews = state?.data?.news?.map((item, i) => {


    if(state?.loading){
      return (<LinearProgress/>)
    }

    if (isMobileOrTablet) {
      return (
        <SwiperSlide key={i}>
          <div className="birjaYenilik">
            <div className="birjaYenilik-image">
              <Link to={`/birjayenilikleri/${item.id}`}>

                <img src={item.imageUrl} alt={item.title} />
              </Link>
            </div>
            <div className="birjaYenilik-description">
              <Link to={`/birjayenilikleri/${item.id}`}>
                <h3>{item.descriptionMini}</h3>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      );
    }

    return (
      <div className="birjaYenilik" key={i}>
        <div className="birjaYenilik-image">
          <Link to={`/birjayenilikleri/${item.id}`}>
            <img src={item.imageUrl} alt={item.title} />
          </Link>
        </div>
        <div className="birjaYenilik-description">
          <Link to={`/birjayenilikleri/${item.id}`}>
            <h3>{item.descriptionMini}</h3>
          </Link>
        </div>
      </div>
    );




  });






  if (isMobileOrTablet) {
    return (
      <>
        <h2 className="birjaTitle">Birja Yenilikləri</h2>
        <div className="birjaYenilikElanlari">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
          >
            {renderedNews}
          </Swiper>
        </div>
      </>
    );
  }

  // Laptop veya geniş ekranlar için normal düzen
  return (
    <>
      <h2 className="birjaTitle">Birja Yenilikləri</h2>
      <div className="birjaYenilikElanlari">
        {renderedNews}
      </div>
    </>
  );
};
