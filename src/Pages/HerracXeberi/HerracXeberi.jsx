import { Container, Grid } from '@mui/material';
import React from 'react'
import { Helmet } from 'react-helmet';
import { Sidebar } from '../../Components/Common/Sidebar/Sidebar';
import { Elan } from '../../Components/Common/Elan/Elan';
import { useParams } from 'react-router-dom';

export const HerracXeberi = () => {
    const params = useParams();
    

    return (
        <>
            <Helmet>
                <title>Hərrac Xəbərləri</title>
            </Helmet>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={8}>
                        <Elan elanId={params.id}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Sidebar/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
