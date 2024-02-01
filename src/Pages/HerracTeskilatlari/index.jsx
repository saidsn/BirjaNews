import { Container, Grid, LinearProgress, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
// import img from "../../Assets/Images/EmlakHerracMerkeziLogo.jpg";
import "./index.css";
import { Helmet } from "react-helmet";
import { useOrganizers } from "../../context/organizersContext";
import { organizersActions } from "../../reducers/organizersReducer";
import { organizersService } from "../../APIs/Services/organizersService";


function Index() {
  //=====================
  // Pagination
  //=====================
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  //=====================
  // Get data from Api
  //=====================
  const { state, dispatch } = useOrganizers();


  useEffect(() => {
    (async () => {

      dispatch({ type: organizersActions.start });

      try {
        const res = await organizersService.getPaginated(page, 10);
        dispatch({ type: organizersActions.success, payload: res.data });

      } catch (err) {
        dispatch({ type: organizersActions.error, payload: err });
      }

    })();
  }, [dispatch,page]);



  const renderedOrganizers = state.data?.map((org, i) => {
    return (<Grid key={i} item xs={12} sm={6} md={4} lg={3}>
      <div className="sirket">
        <div className="sirketLogo">
          <img src={org.imageUrl} alt={org.title} />
        </div>
        <div className="sirketDescription">
          <div className="sirketTitle">
            <h5>{org.title}</h5>
          </div>

          <div className="sirketButton">
            <button>Keç</button>
          </div>
        </div>
      </div>
    </Grid>);
  });

  if (state?.loading) {
    return (<LinearProgress />);
}
  return (
    <div>
      <Helmet>
        <title>Hərrac Təşkilatları</title>
      </Helmet>
      <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Grid container spacing={2}>
          {renderedOrganizers}
        </Grid>
        <div className="paginationData">
        <Stack spacing={4} className="paginationStack " display={Math.ceil(state?.data?.totalCount / 10??1) > 1 ? "inital":"none"}>
          <Pagination count={Math.ceil(state?.data?.length / 10 ?? 1)  } size="small" page={page} onChange={handleChange} />
        </Stack>
      </div>
      </Container>
    </div>
  );
}

export default Index;
