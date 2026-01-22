import { useAuth } from "@/features/auth/hooks/useAuth";
import { Drawer } from "vaul";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Link } from "react-router-dom";
import useLogoutMutation from "@/features/auth/mutations/useLogoutMutation";

export default function UserMenuMobile() {
  const logout = useLogoutMutation();
  const { user, loading } = useAuth();
  if (loading || !user) return null;

  const email = user.email ?? "Account";
  const initial = (email[0] ?? "U").toUpperCase();
  return (
    <Drawer.Root>
      <Drawer.Trigger
        className="h-9 w-9 rounded-full
            bg-[#D6F2C2] text-[#17352E]
            grid place-items-center
            text-sm font-semibold
            hover:opacity-90 transition
            outline-none
            border border-black"
      >
        {initial}
      </Drawer.Trigger>
      <Drawer.Portal>
        <VisuallyHidden>
          <Drawer.Title>Navigation menu</Drawer.Title>
          <Drawer.Description>
            Use the links below to logout and access to account settings
          </Drawer.Description>
        </VisuallyHidden>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4">
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
            <div className="my-2 h-px bg-black/10"> </div>
          </div>
          <div className="p-4">
            <Drawer.Close className="mt-4 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm">
              Close
            </Drawer.Close>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
