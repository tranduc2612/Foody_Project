import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRouter, publicRouter } from "~/routers/Index";
import NotFound from "~/pages/notfound/Index";
import { DefaultLayout } from "./layouts/Index";

function App() {
  let isLogin = false;
  return (
    <Router>
      <Routes>
        {publicRouter.map((route, index) => {
          const Page: any = route.page;
          const Layout: any = route.layout || DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {isLogin &&
          privateRouter.map((route, index) => {
            const Page: any = route.page;
            const Layout: any = route.layout || DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
