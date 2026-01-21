import * as Dialog from "@radix-ui/react-dialog";
import { NAV_LINKS } from "@/config/navigation";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function MobileSidebar() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="p-2 bg-black rounded-full text-white"
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />

        <Dialog.Content className="fixed left-0 top-0 h-full w-[80%] max-w-xs bg-white p-6 shadow-lg">
          <VisuallyHidden>
            <Dialog.Title>Navigation menu</Dialog.Title>
            <Dialog.Description>
              Use the links below to navigate to different pages.
            </Dialog.Description>
          </VisuallyHidden>

          <Dialog.Close asChild>
            <button className="mb-8" aria-label="Close menu">
              <FiX size={22} />
            </button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Link to="/" aria-label="Go to homepage">
              <h1 className="font-sora text-lg font-bold tracking-widest uppercase mb-4">
                The Beans
              </h1>
            </Link>
          </Dialog.Close>
          <div className="my-2 h-px bg-black/10"> </div>
          <nav>
            <ul className="space-y-6 text-lg">
              {NAV_LINKS.map((item) => (
                <li key={item.label} className="flex">
                  <Dialog.Close asChild>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block hover:bg-black/5 rounded-2xl px-4 py-2 w-full transition
     ${isActive ? "font-semibold underline" : "opacity-80"}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
