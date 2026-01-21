import { useMediaQuery } from "react-responsive";
import UserMenuDesktop from "./UserMenuDesktop";
import UserMenuMobile from "./UserMenuMobile";

export default function UserMenu() {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? <UserMenuDesktop /> : <UserMenuMobile />;
}
