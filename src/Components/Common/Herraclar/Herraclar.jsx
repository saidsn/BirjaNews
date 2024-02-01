import { ArrowForwardIos } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Herraclar.css";
import { useHerraclarPosts } from '../../../context/herraclarPostsContext';
import { herraclarPostsActions } from '../../../reducers/herraclarPostReducer';
import { auctionPostsService } from '../../../APIs/Services/auctionPostsService';
import { LinearProgress } from '@mui/material';


export const Herraclar = () => {

    //====================
    // Get data from api
    //====================
    const { state, dispatch } = useHerraclarPosts();

    useEffect(() => {
        (async () => {

            dispatch({ type: herraclarPostsActions.start });

            try {
                const res = await auctionPostsService.getAll();
                dispatch({ type: herraclarPostsActions.success, payload: res.data });

            } catch (err) {
                dispatch({ type: herraclarPostsActions.error, payload: err });
            }
        })();
    }, [dispatch]);

    const renderedAuctions = state?.data?.advertisements?.slice(0,7).map((item, i) => {
        return (
            <li key={i}>
                <Link to={`/herracxeberleri/${item.id}`}><ArrowForwardIos />{item.title}</Link>
            </li>
        );
    });

    if(state.loading){
        return (<LinearProgress/>)
    }

    return (
        <>
            <div className="footerLinks">
                <h2 >Hərraclar</h2>
                <ul>
                    {renderedAuctions}
                </ul>
            </div>
        </>
    );
};
