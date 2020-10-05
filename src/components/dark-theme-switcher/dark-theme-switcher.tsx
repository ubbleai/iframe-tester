import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Icon, Switch } from "@blueprintjs/core";
import { selectDarkMode } from "redux/ui/ui.selectors";
import { toggleDarkMode } from "redux/ui/ui.slice";

export const DarkThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector(selectDarkMode);

  const onChangeDarkTheme = (event: React.FormEvent<HTMLElement>) => {
    const { checked } = event.target as HTMLInputElement;
    dispatch(toggleDarkMode(checked));
  };
  return (
    <>
      <Icon icon={darkMode ? "moon" : "flash"} />
      <Switch checked={darkMode} onChange={onChangeDarkTheme} />
    </>
  );
};
