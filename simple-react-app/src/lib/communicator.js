export const dispatcher = (windowObj, message) => {
  windowObj.postMessage(message, "*");
};

export const listenerCreator = (windowObj, callback) => {
  windowObj.onmessage = callback;
};
