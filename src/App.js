import { Fragment, Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Theme";
import { AnimatePresence } from "framer-motion";

import Loading from "./components/Loading";

const Main = lazy(() => import("./pages/Main"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Stack = lazy(() => import("./pages/Stack"));
const WorkPage = lazy(() => import("./pages/Work"));
const Skills = lazy(() => import("./pages/Skills"));
const ErrorBoundary = lazy(() => import("./pages/ErrorBoundary"));

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <a href="#main-content" className="skip-link">
          Aller au contenu
        </a>
        <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<Loading />}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/stack" component={Stack} />
              <Route exact path="/work" component={WorkPage} />
              <Route exact path="/skills" component={Skills} />
              <Route component={ErrorBoundary} />
            </Switch>
          </AnimatePresence>
        </Suspense>
        </main>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
