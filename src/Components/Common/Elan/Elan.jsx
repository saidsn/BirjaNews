import React, { useEffect, useState } from 'react';
import { YouTube, Instagram, Facebook } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { Link } from 'react-router-dom';
import "./Elan.css";
import { useSettings } from '../../../context/settingsContext';
import { auctionPostsService } from '../../../APIs/Services/auctionPostsService';
import { LinearProgress } from '@mui/material';



export const Elan = ({ elanId }) => {

    const [isLoading, setIsloading] = useState(false);

    //=======================
    // Get data from api
    //=======================

    const [elan, setElan] = useState({});
    useEffect(() => {
        if (!elanId) return;
        (async () => {
            setIsloading(true);

            try {
                let res = await auctionPostsService.getById(elanId);
                setElan(res.data);
            } catch (err) {
                console.error(err);
            }
            finally {
                setIsloading(false);

            }
        })();
    }, [elanId]);

    //=======================
    // Use Settings
    //=======================

    const { state } = useSettings();

    if (isLoading) {
        return (<LinearProgress />);
    }


    return (
        <div>

            <h1 className='basliq'>{elan.title}</h1>

            <div className="tarix-teskilatci">
                <span className="tarix">
                    <CalendarMonthIcon fontSize="small" /> <span>{elan.date}</span>
                </span>
              
            </div>

            <div className="sosial-linkler">
                <a href={state.data?.facebook} className="sosial-link">
                    <Facebook fontSize="small" className="footerContactIcon" />
                </a>
                <a href={state.data?.instagram} className="sosial-link">
                    <Instagram fontSize="small" className="footerContactIcon" />
                </a>
                <a href={state.data?.youtube} className="sosial-link">
                    <YouTube fontSize="small" className="footerContactIcon" />
                </a>
            </div>

            <div className="meqale" dangerouslySetInnerHTML={{ __html: elan.description }}>
            </div>
        </div>
    );
};
