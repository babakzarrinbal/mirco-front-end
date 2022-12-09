import route from "@react/route";

import routes from "./route";
route.apply(routes); // applying created routes to routing package in react
import NavButton from "./components/nav-button";
import IframeComp from "./components/ifram-component";

const APP = () => {
  const [currentFrame, setCurrentFrame] = useState({});
  const [frameWindow, setFrameWindow] = useState({});
  useEffect(() => {
    //listen to child for required information
    //if userLoggedin and has permission provide
    //else goto sso child
  }, [frameWindow]);

  return (
    <div>
      {/* create list of routes available for the nav menue based on routes to click */}
      <NavButton
        navroutes={routes.map(() => {})}
        onRouteChange={(frame) => {
          setCurrentFrame(frame);
          //set the ifram url to the selected route and pass in the required info
        }}
      />
      <IframeComp url={currentFrame.url} getFrameWindow={setFrameWindow} />
    </div>
  );
};

export default APP;
