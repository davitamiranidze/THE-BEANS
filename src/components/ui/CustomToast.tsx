import toast from "react-hot-toast";

type ToastType = "success" | "error" | "info";

export function showToast(message: string, type: ToastType = "info") {
  toast.custom(
    (t) => (
      <div
        className={`
        flex items-start gap-4
        rounded-xl px-4 py-3 shadow-lg
        min-w-70 max-w-sm
        ${
          type === "success"
            ? "bg-[#17352E] text-[#D6F2C2]"
            : type === "error"
            ? "bg-red-600 text-white"
            : "bg-neutral-800 text-white"
        }
      `}
      >
        <span className="text-sm leading-5">{message}</span>

        <button
          onClick={() => toast.dismiss(t.id)}
          className="
          ml-auto text-xs font-bold
          opacity-70 hover:opacity-100
          transition
        "
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    ),
    {
      duration: 10000,
    }
  );
}
