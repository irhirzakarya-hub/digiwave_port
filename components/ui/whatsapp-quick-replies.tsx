"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/context/language-context";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

type Option = {
  label: string;
  message: string;
};

type ServiceKey = "all" | "design" | "automation" | "video" | "web" | "ads" | "boost" | "management";

const serviceKeys: ServiceKey[] = [
  "all",
  "design",
  "automation",
  "video",
  "web",
  "ads",
  "boost",
  "management",
];

export default function WhatsappQuickReplies({
  phone,
  role,
  options = [],
  className = "",
  buttonClass = "w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform",
}: {
  phone: string;
  role?: string;
  options?: Option[];
  className?: string;
  buttonClass?: string;
}) {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceKey>("all");
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { t, isRTL } = useLanguage();

  const updateCoords = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const menuWidth = 288;
    let left = isRTL ? rect.left : rect.right - menuWidth;
    if (left < 8) left = 8;
    if (left + menuWidth > window.innerWidth - 8) left = window.innerWidth - menuWidth - 8;
    setCoords({ top: rect.bottom + 10, left });
  }, [isRTL]);

  useLayoutEffect(() => {
    if (open) {
      updateCoords();
    }
  }, [open, updateCoords]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapperRef.current) return;
      const target = e.target as Node;
      if (wrapperRef.current.contains(target)) return;
      if (menuRef.current && menuRef.current.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleResize = () => updateCoords();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, [open, updateCoords]);

  const openWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    const phoneDigits = phone.replace(/\D/g, "");
    const url = `https://wa.me/${phoneDigits}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const serviceOptions = serviceKeys.map((key) => ({
    key,
    label:
      key === "all"
        ? t.whatsapp.allServices
        : t.services.items[key].name,
  }));

  const serviceLabel =
    selectedService === "all"
      ? t.whatsapp.generalServiceLabel
      : t.services.items[selectedService].name;

  const roleLabel = role?.trim() || t.whatsapp.defaultRoleLabel;
  const greetingLine = t.whatsapp.greetingPrefix.replace("{role}", roleLabel);

  const formatMessage = (message: string) => {
    const filled = message.replace("{service}", serviceLabel);
    return `${greetingLine}\n\n${filled}`;
  };

  const defaultOptions: Option[] = t.whatsapp.questions.map((item) => ({
    label: item.label,
    message: formatMessage(item.message),
  }));

  const usedOptions = options.length > 0
    ? options.map((item) => ({
        label: item.label,
        message: formatMessage(item.message),
      }))
    : defaultOptions;

  const menu = coords ? (
    <div
      ref={menuRef}
      className="fixed z-[9999] w-72 max-w-xs bg-background/90 glass rounded-lg shadow-2xl border border-primary/20 p-3"
      style={{ top: coords.top, left: coords.left }}
    >
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {t.whatsapp.selectService}
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {serviceOptions.map((service) => (
          <button
            key={service.key}
            type="button"
            onClick={() => setSelectedService(service.key)}
            className={`px-2 py-1 text-[11px] font-semibold rounded-full border transition-all duration-200 ${
              selectedService === service.key
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background/80 text-silver border-border hover:border-primary hover:text-primary"
            }`}
          >
            {service.label}
          </button>
        ))}
      </div>

      <p className="mb-3 text-xs text-muted-foreground">{t.whatsapp.help}</p>

      <div className="grid gap-2">
        {usedOptions.map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => openWhatsApp(opt.message)}
            className="w-full text-right px-3 py-2 text-sm text-foreground rounded-md border border-border hover:bg-primary/10 transition-colors duration-200"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <div ref={wrapperRef} className={`relative inline-block ${className}`}>
      <button
        ref={buttonRef}
        onClick={() => setOpen((s) => !s)}
        type="button"
        className={buttonClass}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <WhatsAppIcon size={20} />
      </button>
      {open && coords && createPortal(menu, document.body)}
    </div>
  );
}
