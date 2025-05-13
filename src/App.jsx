import "./App.css";
import React, { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));

function Layout() {
  const sharedContext = { userId: 42, appName: "MyApp" };
  return (
    <>
      <h2>Layout Wrapper</h2>
      <React.Suspense loading={<div>Loading nested route...</div>}>
        <Outlet context={sharedContext} />
      </React.Suspense>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/page2" element={<Layout />}>
            <Route index element={<Page2 />} />
            <Route path=":username" element={<Page2 />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
