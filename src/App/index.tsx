import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Root from "../pages/Root";
import ItemPage from "../pages/ItemPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Root} />
        <Route path="/:id" exact component={ItemPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
