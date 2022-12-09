import { communicator, manifest } from "common-package";
const Login = ({}) => {
  const login = ({ username, password }) =>
    new Promise((resolver) => {
      communicator.listenOnce(window, manifest.container.login, (error) => {
        resolver(error);
      });
      communicator.dispatch(window.parent, {
        type: manifest.container.login,
        data: { username, password },
      });
    });
  return <form onSubmit={login}>{/* input for user and password */}</form>;
};

export default Login;
