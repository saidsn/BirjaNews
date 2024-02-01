import { Helmet } from 'react-helmet';
import { Sidebar } from '../../Components/Common/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { BirjaElan } from '../../Components/Common/BirjaElan/BirjaElan';

export const BirjaYenlik = () => {
    const params = useParams();
    

    return (
        <>
            <Helmet>
                <title>Birja Yenilikləri</title>
            </Helmet>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={8}>
                        <BirjaElan elanId={params.id}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Sidebar/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
