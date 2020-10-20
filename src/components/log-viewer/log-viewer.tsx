import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Collapse, Pre } from "@blueprintjs/core";

import { selectLogs } from "redux/app/app.selectors";
import { selectLogViewerOpen } from "redux/ui/ui.selectors";
import { toggleLogViewerOpen } from "redux/ui/ui.slice";

export const LogViewer = () => {
  const isOpen = useSelector(selectLogViewerOpen);

  const dispatch = useDispatch();

  const logs = useSelector(selectLogs);

  const onClickToggle = () => {
    dispatch(toggleLogViewerOpen());
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
