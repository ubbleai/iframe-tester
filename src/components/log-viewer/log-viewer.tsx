import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Collapse, Pre } from "@blueprintjs/core";

import { selectLogs } from "redux/app/app.selectors";

export const LogViewer = () => {
  const [isOpen, toggleOpen] = useState<boolean>(false);

  const logs = useSelector(selectLogs);

  const onClickToggle = () => {
    toggleOpen(!isOpen);
  };

  const content =
    logs.length === 0 ? (
      <span className="no-logs">(empty)</span>
    ) : (
      logs.map((log) => (
        <React.Fragment key={log.date}>{log.content}</React.Fragment>
      ))
    );

  return (
    <>
      <Button
        onClick={onClickToggle}
        text={isOpen ? "Close Log Viewer" : "Open Log Viewer"}
      />
      <Collapse isOpen={isOpen}>
        <Pre>{content}</Pre>
      </Collapse>
    </>
  );
};
