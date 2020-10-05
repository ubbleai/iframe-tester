import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllowCamera,
  selectHeight,
  selectUrl,
  selectWidth,
} from "../../redux/app/app.selectors";
import { addLog, resetLogs } from "../../redux/app/app.slice";

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
              content: JSON.stringify(event),
            })
          );
        },
        onAbort: (event: any) => {
          dispatch(
            addLog({
              date: Date.now(),
              content: JSON.stringify(event),
            })
          );
        },
      },
    });

    return () => {
      dispatch(resetLogs);
      ubble.destroy();
    };
  }, [refreshTs]);

  return <div ref={ref} className="iframe-ref" />;
};
