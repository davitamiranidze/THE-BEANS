import { Drawer } from "vaul";
import { FiShoppingCart } from "react-icons/fi";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { FiX } from "react-icons/fi";

export default function ShoppingCartSidebar() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="p-3 bg-black rounded-full text-white">
        <FiShoppingCart size={18} />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        <Drawer.Content className="fixed right-0 top-0 h-full w-[80%] max-w-xs bg-white p-6 shadow-lg">
          <VisuallyHidden>
            <Drawer.Title>Shopping Cart Sidebar</Drawer.Title>
            <Drawer.Description>
              Use this sidebar to access to shopping cart
            </Drawer.Description>
          </VisuallyHidden>

          <Drawer.Close asChild>
            <button className="mb-8" aria-label="Close menu">
              <FiX size={22} />
            </button>
          </Drawer.Close>
          <Drawer.Close asChild>
            <h1 className="font-sora text-lg font-bold tracking-widest uppercase mb-4">
              Shopping Cart
            </h1>
          </Drawer.Close>
          <div className="my-2 h-px bg-black/10"> </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
