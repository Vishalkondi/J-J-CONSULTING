"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const toggle = toggleRef.current;
    const focusable = () =>
      [toggle, ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? [])].filter((el): el is HTMLElement =>
        Boolean(el),
      );
    // Move focus into the menu, keep Tab inside it, close on Escape and return focus to the toggle.
    menuRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const els = focusable();
      const first = els[0],
        last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,border-color,padding] duration-500",
          scrolled || open ? "border-b border-white/10 bg-midnight/95 py-3 backdrop-blur-sm" : "border-b border-transparent py-6",
        )}
        style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + ${scrolled || open ? "0.75rem" : "1.5rem"})` }}
      >
        <div className="wrap flex items-center justify-between">
          <Link href="/" aria-label="J & J Consulting — home" className="relative z-[60]">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {nav
                .filter((n) => n.href !== "/")
                .map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      aria-current={isActive(n.href) ? "page" : undefined}
                      className={cn(
                        "relative py-2 text-[13px] tracking-wide text-white/80 transition-colors hover:text-white",
                        isActive(n.href) && "text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold",
                      )}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="btn btn-gold hidden !py-2.5 sm:inline-flex">
              Talk to Us
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[6px] xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={cn("h-px w-6 bg-white transition-transform duration-300", open && "translate-y-[7px] rotate-45")} />
              <span className={cn("h-px w-6 bg-white transition-opacity duration-300", open && "opacity-0")} />
              <span className={cn("h-px w-6 bg-white transition-transform duration-300", open && "-translate-y-[7px] -rotate-45")} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="blueprint fixed inset-0 z-40 overflow-y-auto bg-midnight xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="wrap flex min-h-full flex-col justify-between pb-10 pt-28">
              <ul className="space-y-1">
                {nav.map((n, i) => (
                  <motion.li
                    key={n.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={n.href}
                      className={cn(
                        "block border-b border-white/10 py-3.5 font-display text-3xl text-white/90",
                        isActive(n.href) && "text-gold-light",
                      )}
                    >
                      {n.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/contact" className="btn btn-gold w-full justify-center">
                  Talk to Us
                </Link>
                <p className="mt-6 font-mono text-[11px] leading-relaxed text-white/50">
                  Hamilton House, 87–89 Bell Street, Reigate, Surrey RH2 7AN
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
