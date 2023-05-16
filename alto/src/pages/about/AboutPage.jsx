import React, { useEffect, useContext }  from 'react';
import AppContext from '../../AppContext';

import About from '../../components/About'

import { TABS } from '../../common/constants';

const AboutPage = ({ }) => {
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.ABOUT);
    }, [])

    return <About />
};

export default AboutPage;
