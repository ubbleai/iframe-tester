import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Alignment,
  Divider,
  Icon,
  NavbarDivider,
  NavbarGroup,
  Tooltip,
} from "@blueprintjs/core";
import classNames from "classnames";

import "./App.scss";

import { selectRefreshTS, selectUrl } from "redux/app/app.selectors";
import { selectDarkMode, selectDemoMode } from "redux/ui/ui.selectors";

import { Iframe } from "components/iframe/";
import { IFrameSettings } from "components/iframe-settings";
import { Nav } from "components/navbar";
import { DarkThemeSwitcher } from "components/dark-theme-switcher";
import { LogViewer } from "components/log-viewer";
import { DemoModeSwitcher } from "components/demo-mode-switcher";
import { Curtain } from "./components/curtain";
import { DOCS_URL } from "./constants";

const BP_DARK = "bp3-dark";
const DEMO_MODE = "demo-mode";

function App() {
  const [ubbleLoaded, setUbbleLoaded] = useState<boolean>(false);
  const refreshTs = useSelector(selectRefreshTS);
  const useDarkTheme = useSelector(selectDarkMode);
  const url = useSelector(selectUrl);
  const demoMode = useSelector(selectDemoMode);

  useEffect(() => {
    if (useDarkTheme) {
      document.body.classList.add(BP_DARK);
    } else {
      document.body.classList.remove(BP_DARK);
    }
  });

  useEffect(() => {
    const waitUbble = async () => {
      // @ts-ignore
      await window.ubbleLoaded;
      setUbbleLoaded(true);
    };
    waitUbble();
  });

  const appClassnames = classNames({
    [BP_DARK]: useDarkTheme,
    [DEMO_MODE]: demoMode,
  });

  const isValid = !!url;

  const iframeContent = ubbleLoaded ? (
    <Iframe refreshTs={refreshTs} />
  ) : (
    <div>Loading</div>
  );

  return (
    <div className={appClassnames}>
      <Nav>
        <NavbarGroup align={Alignment.RIGHT}>
          <Tooltip content="Go to Docs">
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
              <Icon icon="book" />
            </a>
          </Tooltip>
          &nbsp;
          <DemoModeSwitcher />
          <NavbarDivider />
          <DarkThemeSwitcher />
        </NavbarGroup>
      </Nav>
      <div className="content">
        <IFrameSettings />
        <Divider />
        <div className="iframe-container">
          {isValid ? (
            iframeContent
          ) : (
            <div>
              Enter an <strong>Identification URL</strong> to continue
            </div>
          )}
          <Divider />
          <div className="log-viewer-container">
            <LogViewer />
          </div>
        </div>
      </div>
      <Curtain />
    </div>
  );
}

export default App;
