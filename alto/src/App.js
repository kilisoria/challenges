

import React, { useEffect, useState } from 'react';
import './App.css';

import {
  RouterProvider,
} from "react-router-dom";

import useInitPosts from './hooks/useInitPosts';

import AppContext from "./AppContext.jsx";

import router from './routes';

import Header from './components/Header';

import { TABS } from './common/constants';

function App() {
  useInitPosts();
  const [tabSelectedValue, setTabSelectedValue] = useState(TABS.HOME);

  return (
    <div className="App">
      <AppContext.Provider value={{ tabSelected: tabSelectedValue, setTabSelectedValue }}>
        <Header />
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
