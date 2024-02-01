import { Container, Grid } from "@mui/material";
import { Herraclar } from "../../Components/Common/Herraclar/Herraclar";
import { Elanlar } from "../../Components/Common/Elanlar/Elanlar";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function Index() {

  return (
    <div>
      <Helmet>
        <title>Hərrac Xəbərləri</title>
      </Helmet>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Herraclar />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Elanlar/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Index;
