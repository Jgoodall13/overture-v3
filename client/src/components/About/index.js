import React from 'react';

import Hero from './Hero';
import AbstractImages from './AbstractImages';
import History from './History';
import Work from './Work';
import Awards from './Awards';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <AbstractImages />
            <History />
            <Work />
            <Awards />
            <SubFooter />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;