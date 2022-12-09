const NavButton = ({ routes, onRouteChange }) => {
  return (
    <ul>
      {routes.map((r) => {
        return <li onClick={onRouteChange(r.url)}>{r.title}</li>;
      })}
    </ul>
  );
};

export default NavButton;
