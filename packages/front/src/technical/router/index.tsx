import * as React from 'react';
import { Switch, SwitchProps } from 'react-router-dom';
import ReportingNoMatch from './reporting-no-match';

// A react-router Switch which handle routes not found
function SwitchNotFoundHandler({ children, ...props }: SwitchProps) {
  return (
    <Switch {...props}>
      {children}
      <ReportingNoMatch />
    </Switch>
  );
}

export { SwitchNotFoundHandler };
