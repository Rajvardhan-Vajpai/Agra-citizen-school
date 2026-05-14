"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "@/lib/data";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={contact.whatsapp} aria-label="Chat on WhatsApp" className="grid h-13 w-13 place-items-center rounded-full bg-green-500 text-white shadow-xl shadow-green-900/25 transition hover:scale-105">
        <MessageCircle size={22} />
      </a>
      {visible && (
        <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="grid h-13 w-13 place-items-center rounded-full bg-emerald-950 text-white shadow-xl transition hover:scale-105 dark:bg-white dark:text-emerald-950">
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
