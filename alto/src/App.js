

import React, { useEffect, useState } from 'react';
import './App.css';

import {
  RouterProvider,
} from "react-router-dom";

import AppContext from "./AppContext.jsx";

import router from './routes';

import { loadPosts } from './services/postService';

import Header from './components/Header';

import { TABS } from './common/constants';

function App() {
  const [tabSelectedValue, setTabSelectedValue] = useState(TABS.HOME);

  useEffect(() => {
    loadPosts();
  }, []);

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
