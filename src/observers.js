import React from 'react';

import * as Model from "./model.js";

export const Loading = function (props) {
  const [isRunning, setIsRunning] = React.useState(
    Model.RunningManager.isRunning()
  );
  React.useEffect(function () {
    const cb = function () {
      setIsRunning(Model.RunningManager.isRunning());
    };
    Model.RunningManager.on(cb);
    return function () {
      Model.RunningManager.off(cb);
    };
  }, []);
  if (!isRunning) return null;
  return (
    <div
      className="spinner-border"
      style={{ position: "fixed", bottom: "1em", right: "1em" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
