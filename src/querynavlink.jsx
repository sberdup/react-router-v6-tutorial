import { useLocation, NavLink } from "react-router-dom";
// this export does NOT function if it's default. do not know why yet
//When exporting as default, you do not use {} brackets to then import. {} are only for named exports

export default function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export function IamFive(){
  return ['Hello there']
}