import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FormProvider } from '../contexts/FormContext';
import HomePage from '../screens/HomePage';
import HRDashboardPage from '../screens/HRDashboardPage';
import HRDashboardPageInclusion from '../screens/HRDashBoardPageInclusion';

const Router = () => {
  return (
    <BrowserRouter>
      <FormProvider>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/rh/acme">
            <HRDashboardPage isAcme />
          </Route>
          <Route exact path="/rh/tpbank">
            <HRDashboardPage />
          </Route>
          <Route exact path="/rh/acme/inclusao">
            <HRDashboardPageInclusion isAcme />
          </Route>
          <Route exact path="/rh/tpbank/inclusao">
            <HRDashboardPageInclusion />
          </Route>
        </Switch>
      </FormProvider>
    </BrowserRouter>
  );
};
export default Router;
