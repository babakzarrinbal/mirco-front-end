import { createRef, useEffect } from "react";
import { listenerCreator, dispatcher } from "./lib/communicator";

const IframeComponent = ({ title, url, messageCallback }) => {
  useEffect(() => {
    listenerCreator(window, messageCallback);
  }, []);

  const frameRef = createRef();

  return <iframe title={title} src={url} ref={frameRef} />;
};

export default IframeComponent;
