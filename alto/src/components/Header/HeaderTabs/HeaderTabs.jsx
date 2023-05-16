import * as React from 'react';

import Box from '@mui/material/Box';

import TabList from '@mui/lab/TabList';
import HeaderLinkTab from '../HeaderLinkTab';

import { TABS } from '../../../common/constants';

const HeaderTabs = ({ tabSelected }) => {
  return (
    <TabList>
      <HeaderLinkTab label="Home" value="1" href="/" />
      <HeaderLinkTab label="About" value="2" href="about" />
      <HeaderLinkTab label="Contact" value="3" href="contact" />
      {tabSelected === TABS.POSTS &&
            <HeaderLinkTab label="Posts" value="4" href="posts" />
      }
    </TabList>
  );
};

export default HeaderTabs;
