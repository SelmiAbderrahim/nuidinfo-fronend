import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import "./App.css";
import routes from "./routes";
import Home from "./pages/Home";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Home />} path="/" index />
          {/* {routes.map((route, index) => {
            const Component = route.component;
            <Route
              exact={route.exact}
              path={route.path}
              element={<Component />}
              key={index}
            />;
          })} */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
