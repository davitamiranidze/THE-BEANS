import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { NAV_LINKS } from "../../../config/navigation";
import MobileSidebar from "./MobileSidebar";
import { useAuth } from "@/hooks/useAuth";
import UserMenu from "./UserMenu";

export default function Header() {
  const { user } = useAuth();
  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-3 ">
        <div className="flex items-center justify-between rounded-full bg-green-200 px-6 py-3">
          {/* LOGO */}
          <Link to="/" aria-label="Go to homepage">
            <h1 className="font-sora text-sm font-semibold tracking-widest uppercase">
              The Beans
            </h1>
          </Link>

          {/* NAV */}
          <nav>
            <ul className="hidden md:flex items-center gap-8 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `hover:underline ${
                        isActive ? "underline font-medium" : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            {user ? (
              <UserMenu />
            ) : (
              <Link className="flex items-center gap-2 text-sm" to="signup">
                Get Started
              </Link>
            )}

            <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              <FiShoppingCart className="text-md" />
            </button>
            <div className="auto md:hidden">
              <MobileSidebar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
