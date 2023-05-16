import React, { useEffect, useContext, useState } from 'react'

import AppContext from '../../AppContext';

import Landing from '../../components/Landing';

import { getPostsSelected } from '../../services/postService';

import { TABS } from '../../common/constants';

const HomePage = ({ }) => {
    const [postsSelected, setPostsSelected] = useState([]);
    
    useEffect(() => {
        const posts = getPostsSelected();
        setPostsSelected(posts);
    }, []);

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
