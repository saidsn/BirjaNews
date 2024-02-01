import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Pagination, Stack, Grid, Paper, Typography, Button, LinearProgress, CircularProgress } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./BirjaElani.css";
import { useBirjaNews } from "../../../context/birjaNewsContext";
import { birjaNewsActions } from "../../../reducers/birjaNewsReducer";
import { birjaNewsService } from "../../../APIs/Services/birjaNewsService";

export const BirjaElani = () => {
  //====================
  // Pagination
  //====================
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  //====================
  // Get data from api
  //====================

  const { state, dispatch } = useBirjaNews();

  useEffect(() => {
    (async () => {

      dispatch({ type: birjaNewsActions.start });

      try {
        const res = await birjaNewsService.getPaginated(page, 10);
        dispatch({ type: birjaNewsActions.success, payload: res.data });
      } catch (err) {
        dispatch({ type: birjaNewsActions.error, payload: err });
      }
    })();
  }, [dispatch,page]);


  const renderedNews = state?.data.news?.map((item, i) => {
    return (<Grid key={i} item xs={12} md={12} lg={12}>
      <Paper className="elan" style={{ padding: 16, margin: "auto" }}>
        <Link to={`/birjayenilikleri/${item.id}`}>
          <div className="elanImage">
            <img src={item.imageUrl} alt={item.title} />
          </div>
          <div className="elanDescription">
            <div className="elanTitle">
              <Typography variant="h6">{item.title}</Typography>
            </div>
            <div className="elanInfo">
              <Typography variant="body2">
              {item.descriptionMini}
             </Typography>
            </div>
            <div className="elanDateButton">
              <div className="elanDate">
                <CalendarMonthIcon fontSize="small" /> <span>{item.date}</span>
              </div>
              <div className="elanButton">
                <Button variant="contained">Ətraflı</Button>
              </div>
            </div>
          </div>
        </Link>
      </Paper>
    </Grid>);
  });

  if(state?.loading){
    return (<LinearProgress/>)
  }
  return (
    <Fragment>
      <Container>
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          {renderedNews}
        </Grid>
        <Stack spacing={4} className="paginationData" display={Math.ceil(state?.data?.totalCount / 10??1) > 1 ? "inital":"none"}>
          <Pagination count={Math.ceil(state?.data?.length / 10??1)} size="small" page={page} onChange={handleChange} />
        </Stack>
      </Container>
    </Fragment>
  );
};
