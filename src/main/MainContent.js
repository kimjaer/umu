import React from 'react';
import MainBanner from '../main/MainBanner';
import Youtube from '../main/Youtube';
import Instar from '../main/Instar';
import { Pudding } from './Pudding';
import umudata from '../data/umudata.json';
import './main.css';

export const MainContent = () => {
    const umuData = umudata.umu || {};

    return (
        <>
            <div className='d-flex justify-content-center'>
                <MainBanner uudata={umuData.mainpage.mainBanner}></MainBanner>
            </div>
            <Pudding></Pudding>
            <Youtube mainytb={umuData.mainpage.mainytb}></Youtube>
            <Instar maininsta={umuData.mainpage.maininsta}></Instar>        
        </>
    );
};
