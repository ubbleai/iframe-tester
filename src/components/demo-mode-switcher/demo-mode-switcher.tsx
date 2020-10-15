import React from "react";
import styled from "styled-components";
import { Button, Position, Tooltip } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import { toggleDemoMode } from "redux/ui/ui.slice";
import { selectDemoMode } from "redux/ui/ui.selectors";

const Wrapper = styled.div`
  z-index: 11;
`;

export const DemoModeSwitcher = () => {
  const dispatch = useDispatch();
  const demoMode = useSelector(selectDemoMode);
  const setEnterDemoMode = () => {
    dispatch(toggleDemoMode());
  };

  return (
    <Wrapper>
      <Tooltip
        content={demoMode ? "Leave Demo" : "Enter demo"}
        position={Position.BOTTOM}
      >
        <Button icon="desktop" onClick={setEnterDemoMode} active={demoMode} />
      </Tooltip>
    </Wrapper>
  );
};
