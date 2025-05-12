// App.jsx
import './App.css';
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function Layout() {
  const sharedContext = { userId: 42, appName: 'MyApp' }; // Example shared data

  return (
    <>
      <h2>Layout Wrapper</h2>
      <Outlet context={sharedContext} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Layout />}>
        <Route index element={<Page2 />} />
        <Route path=":username" element={<Page2 />} />
      </Route>
    </Routes>
  );
}

export default App;
