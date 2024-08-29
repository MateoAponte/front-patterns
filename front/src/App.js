import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ROUTES } from './features/common/router/RouterInfo.ts';
import { SideBar } from './features/common/layouts/SideBar.tsx';
import { BreadCrumb } from './features/common/layouts/BreadCrumb.tsx';
import { StrictMode } from 'react';
import { Helmet } from 'react-helmet';
import Icon from './assets/images/icon.ico';

const renderRoutes = (routes) => {
  return routes.map((route, index) => (
    <>
      <Route key={index} path={route.path} element={<route.component />} exact>
        {route.nested && renderRoutes(route.nested)}
      </Route>
    </>
  ));
};

function App() {
  return (
    <StrictMode>
      <Helmet>
        <link rel="icon" href={Icon} />
      </Helmet>
      <BrowserRouter>
        <div className="App">
          <SideBar />
          <main>
            <BreadCrumb />
            <Routes>{renderRoutes(ROUTES)}</Routes>
            <Outlet />
          </main>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
