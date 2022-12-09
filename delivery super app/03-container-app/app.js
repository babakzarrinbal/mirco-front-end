import route from "@react/route";
import {manifest,communications} from 'common-package

import routes from "./route";
route.apply(routes); // applying created routes to routing package in react
import NavButton from "./components/nav-button";
import IframeComp from "./components/ifram-component";
import eventCallbacks from './lib/eventCallbacks'

const APP = () => {
  const [currentFrame, setCurrentFrame] = useState({});
  const [frame, setFrame] = useState({}); // default child app should be defined here and it's the customer app without login

  useEffect(() => {
    communications.createListener(window,(ev)=>
      eventCallbacks[ev.type] && eventCallbacks[ev.type](ev.data,{frame,setFrame}))
  }, []);

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
      <IframeComp url={currentFrame.url} getFrame={setFrame} />
    </div>
  );
};

export default APP;


// listen once to event "event-name" on the listener you will need to resolve a promise that is already created 
  // the once property when creating a listener 
  // create a global variable
  // set that variable to the listenere function (inside the listener when action is done set the global variable to null) 
  // attach the vairable(listenerfunction) to the window for listening
  //
// dispatch your actual event

