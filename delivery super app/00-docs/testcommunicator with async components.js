const type = "someEvent";
let resolver, rejecter;
const eventCommunication = new Promise((r, j) => {
  resolver = r;
  rejecter = j;
});

let listener = (response) => {
  if (response.error) rejecter(response.error);
  else resolver(response.data);
  removeListener(window, listener);
};

createListener(window, listener);
dispatch(childwindow, { type, data: {} });
Promise.race([new Promise((r) => setTimeout(r, 10000)), eventCommunication])
  .then((r) => console.log("success"))
  .catch((e) => console.log("error happend"));
