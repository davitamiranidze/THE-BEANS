import { NAV_LINKS, MOBILE_ONLY_LINKS } from "@/config/navigation";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Drawer } from "vaul";
import { useState } from "react";
import clsx from "clsx";

const links = [...NAV_LINKS, ...MOBILE_ONLY_LINKS];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer.Root direction="left" open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button
          className="p-2 bg-black rounded-full text-white"
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        <Drawer.Content className="fixed left-0 top-0 h-full w-[80%] max-w-xs bg-white p-6 shadow-lg">
          <VisuallyHidden>
            <Drawer.Title>Navigation menu</Drawer.Title>
            <Drawer.Description>
              Use the links below to navigate to different pages.
            </Drawer.Description>
          </VisuallyHidden>

          <Drawer.Close className="mb-8">
            <FiX size={22} />
          </Drawer.Close>

          <Drawer.Close asChild>
            <Link to="/" aria-label="Go to homepage">
              <h1 className="font-sora text-lg font-bold tracking-widest uppercase mb-4">
                The Beans
              </h1>
            </Link>
          </Drawer.Close>

          <div className="my-2 h-px bg-black/10"> </div>
          <nav>
            <ul className="space-y-6 text-lg">
              {links.map((item) => (
                <li key={item.label} className="flex">
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        "block hover:bg-black/5 rounded-2xl px-4 py-2 w-full transition",
                        isActive && "underline font-medium",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
