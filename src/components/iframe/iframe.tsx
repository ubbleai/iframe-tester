import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllowCamera,
  selectHeight,
  selectUrl,
  selectWidth,
} from "../../redux/app/app.selectors";
import { addLog, resetLogs } from "../../redux/app/app.slice";
import { selectDemoMode } from "../../redux/ui/ui.selectors";
import { leaveDemoMode } from "../../redux/ui/ui.slice";

declare const Ubble: any;

interface Props {
  refreshTs: number;
}

export const Iframe = ({ refreshTs }: Props) => {
  const ref = createRef<HTMLDivElement>();
  const url = useSelector(selectUrl);
  const width = useSelector(selectWidth);
  const height = useSelector(selectHeight);
  const allowCamera = useSelector(selectAllowCamera);
  const demoMode = useSelector(selectDemoMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const ubble = new Ubble.IDV(ref.current, {
      height: height,
      width: width,
      identificationUrl: url,
      allowCamera: allowCamera,
      events: {
        onComplete: (event: any) => {
          dispatch(
            addLog({
              date: Date.now(),
              content: JSON.stringify(event, null, 4),
            })
          );
          if (demoMode) {
            dispatch(leaveDemoMode());
            ubble.destroy();
          }
        },
        onAbort: (event: any) => {
          dispatch(
            addLog({
              date: Date.now(),
              content: JSON.stringify(event, null, 4),
            })
          );
          if (demoMode) {
            dispatch(leaveDemoMode());
            ubble.destroy();
          }
        },
      },
    });

    return () => {
      dispatch(resetLogs);
      ubble.destroy();
    };
  }, [refreshTs, allowCamera, demoMode, dispatch, height, ref, url, width]);

  return <div ref={ref} className="iframe-ref" />;
};
