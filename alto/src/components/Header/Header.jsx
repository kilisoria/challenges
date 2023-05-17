import React, { useContext, useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';

import {
  Box,
  Tooltip
} from '@mui/material';

import usePosts from '../../hooks/usePosts';

import TabContext from '@mui/lab/TabContext';

import AppContext from '../../AppContext';
import HeaderTabs from './HeaderTabs';
import HeaderSearch from './HeaderSearch';

const Header = ({ }) => {
  const { posts, redirectToPostView } = usePosts();
  const appContextValue = useContext(AppContext);
  const { tabSelected } = appContextValue;

  const handleSelect = (title) => {
    redirectToPostView(title);
  } 

  if (posts.length <= 0) {
    return null;
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', typography: 'body1', display: 'inline-block' }} style={{ width: '100%' }}>
      <div style={{ background: 'black', width: '10%', height: '50px', float: 'left' }}>
        <img width="50" height="20" src="/alto-white.svg" alt="GoAlto Logo" />
      </div>
      <div style={{ float: 'left', width: '60%' }}>
        <TabContext value={tabSelected}>
          <HeaderTabs tabSelected={tabSelected} />
        </TabContext>
      </div>
      <div style={{ width: '10%', float: 'right', paddingTop: '10px' }}>
        <Tooltip title="Posts">
          <a href="/posts">
            <CreateIcon sx={{ cursor: 'pointer' }} />
          </a>
        </Tooltip>
      </div>
      <div style={{ width: '20%', height: '40px', float: 'right', paddingTop: '6px' }}>
        <HeaderSearch onChange={handleSelect} options={posts} />
      </div>
    </Box>
  )
};

export default Header;
