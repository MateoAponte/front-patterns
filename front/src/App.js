import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { ROUTES } from './features/common/router/RouterInfo.ts';

const renderRoutes = (routes) => {
  return routes.map((route, index) => (
    <>
      <Route key={index} path={route.path} element={<route.component />} exact>
        {route.nested && renderRoutes(route.nested)}
        {/*route.nested?.map((nested, index) => (
          <Route key={nested.path + index} path={nested.path} element={<nested.component />}></Route>
        ))*/}
      </Route>
    </>
  ));
};
// return routes.map((route, index) => {
//   return <route.component />;
// });

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {ROUTES.map((item, index) => (
          <NavLink key={index} to={item.path}>
            {item.path}
          </NavLink>
        ))}
        <Routes>{renderRoutes(ROUTES)}</Routes>
        <Outlet />
      </div>
    </BrowserRouter>
  );
}

export default App;

