import React, { useContext, useEffect } from 'react';    

import AppContext from '../../AppContext';

import Contact from '../../components/Contact';

import { TABS } from '../../common/constants';

const ContactPage = ({ }) => {  
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.CONTACT);
    }, [])

    return <Contact />
};

export default ContactPage;
