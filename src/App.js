import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
// Utils
import GlobalStyles from "./utils/GlobalStyles";
import Container from "./utils/Container";
// Components
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";
import Article from "./pages/Article";

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <>
            <GlobalStyles />
            <Container>
              <Header />
            </Container>
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} key="home" />
                  <Route path="/article" component={Article} key="article" />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </>
        )}
      />
    </BrowserRouter>
  );
};

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 150, beforeChildren: true },
  exit: { opacity: 0 }
});

export default App;
