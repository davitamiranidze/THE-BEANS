import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/hooks/useAuth";
import { showToast } from "@/components/ui/CustomToast";

export default function UserMenu() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  const email = user.email ?? "Account";
  const initial = (email[0] ?? "U").toUpperCase();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      showToast(error.message || "Logout failed", "error");
      return;
    }
    showToast("Logged out", "info");
    navigate("/login");
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="
            h-9 w-9 rounded-full
            bg-[#D6F2C2] text-[#17352E]
            grid place-items-center
            text-sm font-semibold
            hover:opacity-90 transition
            outline-none
            border border-black
          "
          aria-label="Open user menu"
        >
          {initial}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={10}
          align="end"
          className="
            min-w-55 overflow-hidden
            rounded-2xl border border-black/10
            bg-white text-black
            shadow-xl
            p-2
          "
        >
          {/* EMAIL HEADER */}
          <div className="px-3 py-2">
            <p className="text-[11px] uppercase tracking-widest text-black/50">
              Signed in as
            </p>
            <p className="mt-1 text-sm font-medium truncate">{email}</p>
          </div>

          <DropdownMenu.Separator className="my-2 h-px bg-black/10" />

          {/* SETTINGS */}
          <DropdownMenu.Item asChild>
            <Link
              to="/settings"
              className="
                flex items-center gap-2
                rounded-xl px-3 py-2 text-sm
                outline-none
                hover:bg-black/5
                focus:bg-black/5
                cursor-pointer
              "
            >
              Settings
            </Link>
          </DropdownMenu.Item>

          {/* (optional) Profile */}
          <DropdownMenu.Item asChild>
            <Link
              to="/profile"
              className="
                flex items-center gap-2
                rounded-xl px-3 py-2 text-sm
                outline-none
                hover:bg-black/5
                focus:bg-black/5
                cursor-pointer
              "
            >
              Profile
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-2 h-px bg-black/10" />

          {/* LOG OUT */}
          <DropdownMenu.Item
            onSelect={(e) => {
              e.preventDefault(); // Radix closes by default anyway; also prevents weirdness
              logout();
            }}
            className="
              flex items-center gap-2
              rounded-xl px-3 py-2 text-sm
              outline-none cursor-pointer
              text-red-600
              hover:bg-red-50
              focus:bg-red-50
            "
          >
            Log out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
