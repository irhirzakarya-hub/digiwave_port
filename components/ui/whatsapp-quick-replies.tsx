"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

type Option = {
  label: string;
  message: string;
};

export default function WhatsappQuickReplies({
  phone,
  options = [],
  className = "",
  buttonClass = "w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform",
}: {
  phone: string;
  options?: Option[];
  className?: string;
  buttonClass?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    const phoneDigits = phone.replace(/\D/g, "");
    const url = `https://wa.me/${phoneDigits}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fallbackOptions: Option[] = [
    { label: "أسعار الخدمات", message: "مرحبًا، أود معرفة أسعار خدماتكم للـ [الخدمة]" },
    { label: "طلب عرض سعر", message: "أريد عرض سعر لمشروع: [أدخل وصفًا موجزًا]" },
    { label: "مواعيد/اتصال", message: "هل يمكن ترتيب مكالمة قصيرة لمناقشة التفاصيل؟" },
  ];

  const usedOptions = options.length > 0 ? options : fallbackOptions;

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setOpen((s) => !s)}
        type="button"
        className={buttonClass}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <WhatsAppIcon size={20} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-background/90 glass rounded-lg shadow-lg border border-primary/20 p-2 z-50">
          {usedOptions.map((opt) => (
            <button
              key={opt.label}
              onClick={() => openWhatsApp(opt.message)}
              className="w-full text-right px-3 py-2 text-sm hover:bg-primary/10 rounded-md"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
