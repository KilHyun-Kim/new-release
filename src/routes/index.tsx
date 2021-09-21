import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        {/* <Route path="/my" exact component={MyPage}></Route>
        <Route path="/" exact component={ListPage}></Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
