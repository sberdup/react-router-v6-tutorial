import { useLocation, NavLink } from "react-router-dom";
// this export does NOT function if it's default. do not know why yet
export function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}