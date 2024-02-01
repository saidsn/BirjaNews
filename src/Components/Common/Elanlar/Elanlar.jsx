import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { LinearProgress, Pagination, Stack } from "@mui/material";
import "./Elanlar.css";
import { auctionPostsService } from "../../../APIs/Services/auctionPostsService";
import { auctionPostsActions } from "../../../reducers/auctionPostsRecducer";
import { useAuctionPosts } from "../../../context/auctionPostsContext";

export const Elanlar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const query = new URLSearchParams(location.search);
  const pageFromURL = query.get("page") ? parseInt(query.get("page")) : 1;
  
  const [page, setPage] = useState(pageFromURL);
  const { state, dispatch } = useAuctionPosts();

  useEffect(() => {
    if (!query.get("page")) {
      const currentPath = location.pathname.endsWith('/') ? `${location.pathname}page=${pageFromURL ? pageFromURL : 1}` : `${location.pathname}?page=${pageFromURL ? pageFromURL : 1}`;
      navigate(currentPath, { replace: true });
      return;
    }
  
    if (isNaN(pageFromURL) || pageFromURL < 1) {
      navigate("/error");
      return;
    }
    
    setPage(pageFromURL);
  }, [pageFromURL, navigate, location, query]);

  useEffect(() => {
    (async () => {
      dispatch({ type: auctionPostsActions.start });

      try {
        const res = await auctionPostsService.getPaginated(page, 10);  // 'page' variable is used
        dispatch({ type: auctionPostsActions.success, payload: res.data });

        const maxPages = Math.ceil(res.data.totalCount / 10);
        if (page > maxPages) {
          navigate("/error");
          return;
        }
      } catch (err) {
        dispatch({ type: auctionPostsActions.error, payload: err });
      }
    })();
  }, [page, dispatch, navigate]);  // 'page' is used as a dependency

  const handleChange = (event, value) => {
    setPage(value);
    navigate(`${location.pathname}?page=${value}`);
  };
  const pageCount = state?.data?.totalCount ? Math.ceil(state.data.totalCount / 10) : 1;
  const renderedNews = state?.data?.advertisements?.map((item, i) => (
    <div className="elan" key={i}>
      <Link to={`/herracxeberleri/${item.id}`}>
        <div className="elanImage">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="elanDescription">
          <div className="elanTitle">
            <h3>{item.title}</h3>
          </div>
          <div className="elanInfo">
            <p>{item.descriptionMini}</p>
          </div>
          <div className="elanDateButton">
            <div className="elanDate">
              <CalendarMonthIcon fontSize="small" /> <span>{item.date}</span>
            </div>
            <div className="elanButton">
              <button>Ətrafli</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  if (state?.loading) {
    return <LinearProgress />;
  }

  return (
    <Fragment>
      {renderedNews}
      <div className="paginationData">
        <Stack spacing={4} className="paginationStack">
          <Pagination count={pageCount} size="small" page={page} onChange={handleChange} />
        </Stack>
      </div>
    </Fragment>
  );
};
