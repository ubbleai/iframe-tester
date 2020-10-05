import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Alignment, Divider, NavbarGroup } from "@blueprintjs/core";
import classNames from "classnames";

import "./App.scss";

import { selectRefreshTS, selectUrl } from "redux/app/app.selectors";
import { selectDarkMode } from "redux/ui/ui.selectors";

import { Iframe } from "components/iframe/";
import { IFrameSettings } from "components/iframe-settings";
import { Nav } from "components/navbar";
import { DarkThemeSwitcher } from "components/dark-theme-switcher";
import { LogViewer } from "components/log-viewer";

const BP_DARK = "bp3-dark";

function App() {
  const [ubbleLoaded, setUbbleLoaded] = useState<boolean>(false);
  const refreshTs = useSelector(selectRefreshTS);
  const useDarkTheme = useSelector(selectDarkMode);
  const url = useSelector(selectUrl);

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
    [BP_DARK]: useDarkTheme
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
    </div>
  );
}

export default App;
