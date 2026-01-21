import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLogout } from "@/hooks/useLogout";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function UserMenuMobile() {
  const { user, loading } = useAuth();
  const logout = useLogout();

  if (loading || !user) return null;

  const email = user.email ?? "Account";
  const initial = (email[0] ?? "U").toUpperCase();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="
            h-10 w-10 rounded-full
            bg-[#D6F2C2] text-[#17352E]
            grid place-items-center
            text-sm font-semibold
            border border-black
          "
          aria-label="Open user menu"
        >
          {initial}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />

        {/* Bottom sheet */}
        <Dialog.Content
          className="
            fixed left-0 right-0 bottom-0
            rounded-t-3xl bg-white
            border border-black/10 shadow-2xl
            p-4
          "
        >
          <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-black/15" />
          <VisuallyHidden>
            <Dialog.Title>Navigation menu</Dialog.Title>
            <Dialog.Description>
              Use the links below to logout and access to account settings
            </Dialog.Description>
          </VisuallyHidden>
          <div className="px-1 py-2">
            <p className="text-[11px] uppercase tracking-widest text-black/50">
              Signed in as
            </p>
            <p className="mt-1 text-sm font-medium truncate">{email}</p>
          </div>
          <div className="my-2 h-px bg-black/10"> </div>
          <div className="mt-3 space-y-2">
            <Link
              to="/settings"
              className="block rounded-2xl px-4 py-3 text-sm hover:bg-black/5"
            >
              Settings
            </Link>

            <Link
              to="/profile"
              className="block rounded-2xl px-4 py-3 text-sm hover:bg-black/5"
            >
              Profile
            </Link>

            <button
              onClick={() => logout.mutate()}
              className="
                w-full text-left
                rounded-2xl px-4 py-3 text-sm
                text-red-600 hover:bg-red-50
              "
            >
              Log out
            </button>
          </div>

          <Dialog.Close asChild>
            <button className="mt-4 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm">
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
