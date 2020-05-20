import React from 'react';
import { Route, Router as ReactRouterDom } from 'react-router-dom';
import { SwitchNotFoundHandler } from 'technical/router';
import history from 'technical/history';
import HomePage from 'business/pages/no-match';

export enum Routes {
  App = '/',
}

export const Router = () => {
  return (
    <ReactRouterDom history={history}>
      <SwitchNotFoundHandler>
        <Route path={Routes.App} exact component={HomePage} />
      </SwitchNotFoundHandler>
    </ReactRouterDom>
  );
};
