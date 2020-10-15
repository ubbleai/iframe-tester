import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectDemoMode } from "../../redux/ui/ui.selectors";
import { Button, Tooltip } from "@blueprintjs/core";
import { toggleDemoMode } from "../../redux/ui/ui.slice";

interface CurtainProps {
  active: boolean;
}

const CurtainWrapper = styled.div<CurtainProps>`
  width: 100%;
  height: 100%;

  background-color: ${p => (p.active ? "#151515" : "transparent")};
  position: absolute;
  z-index: ${p => (p.active ? 10 : 0)};
  content: "";
  top: 0;

  transition: background-color 0.2s ease;

  visibility: ${p => (p.active ? "visible" : "hidden")};
`;

const ButtonWrapper = styled.div`
  margin-left: 15px;
  margin-top: 15px;
`;

export const Curtain = () => {
  const demoMode = useSelector(selectDemoMode);
  const dispatch = useDispatch();

  const handleClickDemoMode = () => {
    dispatch(toggleDemoMode());
  };
  return (
    <CurtainWrapper active={demoMode}>
      {demoMode && (
        <ButtonWrapper>
          <Tooltip content="Close ">
            <Button
              icon="cross"
              intent="primary"
              onClick={handleClickDemoMode}
            />
          </Tooltip>
        </ButtonWrapper>
      )}
    </CurtainWrapper>
  );
};
