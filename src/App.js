import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFoundPage from './error/404';
import IndexPage from './page';
import HocPage from './page/hoc';
import ProvideContext from './page/context/provider';
import FatherPage from './page/useCallback';
import MenoFatherPage from './page/useMeno';
function App() {
  const Navigate = useNavigate();
  const menu = [
    {
      name: '简介',
      path: '/',
      element: <IndexPage></IndexPage>,
    },
    {
      name: 'Hoc',
      path: '/hoc',
      element: <HocPage></HocPage>,
    },
    {
      name: 'context',
      path: '/context',
      element: <ProvideContext></ProvideContext>,
    },
    {
      name: 'useCallback',
      path: '/useCallback',
      element: <FatherPage></FatherPage>,
    },
    {
      name: 'MenoFatherPage',
      path: '/MenoFatherPage',
      element: <MenoFatherPage></MenoFatherPage>,
    },
    {
      name: '404',
      path: '*',
      element: <NotFoundPage></NotFoundPage>,
    },
  ];

  const menus = function () {
    return menu.map((res, index) => {
      return (
        <Route
          {...res}
          path={res.path}
          element={res.element}
          key={index}
        ></Route>
      );
    });
  };
  const link = menu.map((res, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          Navigate(res.path);
        }}
      >
        {res.name}
      </div>
    );
  });

  return (
    <div className="layout-main">
      <div className="layout-left">{link}</div>
      <div className="layout-right">
        <Routes>{menus()}</Routes>
      </div>
    </div>
  );
}

export default App;
