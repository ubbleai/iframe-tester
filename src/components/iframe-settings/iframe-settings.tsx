import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Collapse,
  Divider,
  FormGroup,
  InputGroup,
  Switch,
} from "@blueprintjs/core";
import {
  selectAllowCamera,
  selectHeight,
  selectUrl,
  selectWidth,
} from "redux/app/app.selectors";
import {
  setAllowCamera,
  setHeight,
  setUrl,
  setWidth,
  updateIFrame,
} from "redux/app/app.slice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { toggleCodeViewerOpen } from "redux/ui/ui.slice";
import { selectCodeViewerOpen } from "redux/ui/ui.selectors";

import { CodeViewer } from "components/code-viewer";

export const IFrameSettings: React.FC = () => {
  const url = useSelector(selectUrl);
  const height = useSelector(selectHeight);
  const width = useSelector(selectWidth);
  const allowCamera = useSelector(selectAllowCamera);
  const codeViewerOpen = useSelector(selectCodeViewerOpen);
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(updateIFrame());
  };

  const handleOnChange = (setter: ActionCreatorWithPayload<string>) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      console.log(value, event);
      dispatch(setter(value));
    };
  };

  const handleOnChangeNumber = (setter: ActionCreatorWithPayload<number>) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      dispatch(setter(+value));
    };
  };

  const handleSwitch = (setter: ActionCreatorWithPayload<boolean>) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      dispatch(setter(checked));
    };
  };

  const doToggleCodeViewer = () => {
    dispatch(toggleCodeViewerOpen());
  };

  const canOpenCodeViewer = !!url;

  return (
    <div className="iframe-settings">
      <FormGroup label="Identification URL">
        <InputGroup
          id="url"
          leftIcon="link"
          autoComplete="off"
          type="url"
          value={url}
          onChange={handleOnChange(setUrl)}
        />
      </FormGroup>
      <FormGroup label="Height">
        <InputGroup
          id="height"
          leftIcon="changes"
          autoComplete="off"
          value={String(height)}
          type="number"
          onChange={handleOnChangeNumber(setHeight)}
        />
      </FormGroup>
      <FormGroup label="Width">
        <InputGroup
          id="width"
          leftIcon="exchange"
          autoComplete="off"
          value={String(width)}
          type="number"
          onChange={handleOnChangeNumber(setWidth)}
        />
      </FormGroup>
      <FormGroup label="Allow Camera">
        <Switch
          checked={allowCamera}
          labelElement="Allow Camera"
          innerLabelChecked="yes"
          innerLabel="no"
          onChange={handleSwitch(setAllowCamera)}
        />
      </FormGroup>
      <Button onClick={submit} text="Update" icon="refresh" intent="primary" />

      <Divider />

      <Button
        intent="none"
        icon="code"
        onClick={doToggleCodeViewer}
        disabled={!canOpenCodeViewer}
        active={codeViewerOpen}
      />

      <Collapse isOpen={codeViewerOpen}>
        {canOpenCodeViewer && <CodeViewer />}
      </Collapse>
    </div>
  );
};
