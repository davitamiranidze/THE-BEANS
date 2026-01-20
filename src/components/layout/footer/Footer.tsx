import { footerColumns } from "./footer.data";

export default function Footer() {
  return (
    <footer className="rounded-t-[40px] bg-[#D6F2C2] text-[#12352E]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <img src="/coffee-1-hover.avif" alt="The Beans" className="w-40" />
            <h1 className="text-4xl font-serif">THE BEANS</h1>
            <p className="text-sm opacity-70">
              © 2026 by The Beans
            </p>
          </div>

          {/* RIGHT (data-driven) */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title} className="space-y-2 text-sm">
                <h2 className="mb-4 text-md font-bold uppercase tracking-wider">
                  {col.title}
                </h2>

                {col.items.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:underline"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <p key={item.label}>{item.label}</p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-16 max-w-xl">
          <label className="mb-3 block text-xs font-semibold uppercase tracking-wider">
            Stay Connected
          </label>

          <div className="flex gap-4">
            <input
              placeholder="Enter email"
              className="w-full rounded-full border border-[#12352E]/30 bg-transparent px-6 py-3 text-sm outline-none placeholder:text-[#12352E]/50"
            />
            <button className="rounded-full bg-[#12352E] px-8 py-3 text-sm font-medium text-[#D6F2C2] transition hover:opacity-90">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
