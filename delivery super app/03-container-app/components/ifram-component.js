const IframeComp = ({ url, title, getFrameWindow }) => {
  const frameRef = createRef();
  useEffect(() => {
    getFrameWindow(frameRef.current.contentwindow);
  }, []);
  return <iframe src={url} title={title} ref={frameRef} />;
};
