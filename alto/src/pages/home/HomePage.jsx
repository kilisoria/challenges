import React, { useEffect, useContext } from 'react'
import usePosts from '../../hooks/usePosts';

import AppContext from '../../AppContext';

import Landing from '../../components/Landing';

import { TABS } from '../../common/constants';

const HomePage = ({ }) => {
    const { postsSelected } = usePosts();
    const appContextValue = useContext(AppContext);

    useEffect(() => {
        appContextValue.setTabSelectedValue(TABS.HOME);
    }, [])

    if (!postsSelected || postsSelected.length <= 0) {
        return;
    }

    return <Landing posts={postsSelected} />
}

export default HomePage;
