export const getApiBearer = (data, { setFrame, frame }) => {
  // if token if defined then return the token
  //if token is not defined
  // if data is provided then get the token based on data
  // if data is not provided then redirect the frame to sso child app
  //and set the redirect path variable to previous frame url so after login it would be redirected back
};

export const login = (data, { setFrame, frame }) => {
  // post the informatin to server and get response
  // if response is an error dispatch event to frame with error and the manifest container signup event name
  // if response is user-token the redirect to redirection url || default route
};

export const signUp = (data, { setFrame, frame }) => {
  // post the informatin to server and get response
  // if response is an error dispatch event to frame with error and the manifest container signup event name
  //after successfull signup get the api token from server and redirect to redirection url || default route
};
