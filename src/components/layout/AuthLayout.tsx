import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-neutral-50 p-4">
      <Link
        to="/"
        className="
          absolute left-6 top-6
          text-xs uppercase tracking-widest
          text-neutral-500
          hover:text-neutral-800
          transition
        "
      >
        ← Back to home
      </Link>

      <Outlet />
    </div>
  );
}