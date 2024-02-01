import { Container, Grid } from '@mui/material'
import React from 'react'
import { BizimElaqelerimiz } from '../../Components/Common/BizimElaqelerimiz/BizimElaqelerimiz'
import { FacebookRounded, Instagram, YouTube } from '@mui/icons-material'
import "./index.css"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { BizeYazin } from '../../Components/Common/BizeYazin/BizeYazin'
import { useSettings } from '../../context/settingsContext';

function Index() {
  const {state} = useSettings();
  return (
    <div>
      <Helmet>
        <title>Əlaqə</title>
      </Helmet>
      <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <BizimElaqelerimiz/>
            <div className='elaqeSocial'>
              <Link to={state?.data?.facebook}><FacebookRounded/></Link>
              <Link to={state?.data?.instagram}><Instagram/></Link>
              <Link to={state?.data?.youtube}><YouTube/></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <BizeYazin/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Index
