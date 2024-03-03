import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ROUTES } from './features/common/router/RouterInfo.ts';
import { SideBar } from './features/common/layouts/SideBar.tsx';

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
        <SideBar />
        <main>
          <Routes>{renderRoutes(ROUTES)}</Routes>
          <Outlet />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

