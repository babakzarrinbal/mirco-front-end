let header;

export const fetch = (url, { mehtod = "GET", body }) => {
  fetch(url, { mehtod, body, headers: { authorization: header } });
};

export const settToken = (username, password) => {
  //api call to get the access token
  //populating the header var
};
