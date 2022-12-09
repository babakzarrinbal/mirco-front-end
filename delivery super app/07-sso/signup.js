import { communicator, manifest } from "common-package";
const SignUp = ({}) => {
  const signup = ({ username, password, userMeta }) =>
    new Promise((resolver) => {
      communicator.listenOnce(window, manifest.container.signup, (error) => {
        resolver(error);
      });
      communicator.dispatch(window.parent, {
        type: manifest.container.signup,
        data: { username, password, userMeta },
      });
    });
  return (
    <form onsubmit={signup}>
      {/* input for user and password and user meta data*/}
    </form>
  );
};

export default SignUp;
