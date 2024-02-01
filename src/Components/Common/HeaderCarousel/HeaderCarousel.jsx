import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HeaderCarousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from "../../../Assets/Images/1632123076e71f5ded-ffd1-4fe8-aa2e-f16ef0e9bab3.jpeg";
import { useEffect, useState } from "react";
import { headerCarouselService } from "../../../APIs/Services/headerCarouselsService";
import { LinearProgress } from "@mui/material";


export default function HeaderCarousel() {
  //=========================
  // Get data from api
  //=========================

  const [sliders, setSliders] = useState([]);
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    (async () => {
      setIsloading(true)
      try {
        const res = await headerCarouselService.getAll();
        setSliders(res.data);
      } catch (err) {
        console.error(err);
      }
      finally{
        setIsloading(false)
      }
    })();

  }, []);

  const renderedSliders = sliders.map((item, i) => {
    return (
      <SwiperSlide key={i}><img className="sliderImage" src={item.imageUrl} alt={item.title} /></SwiperSlide>
    );
  });
  if(isLoading){
    return (<LinearProgress/>)
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="HeaderCarousel"
      >
        {renderedSliders}
      </Swiper>
    </>
  );
}




