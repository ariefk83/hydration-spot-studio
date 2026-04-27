import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/learn", label: "Learn" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl hero-gradient text-paper shadow-[var(--shadow-glow)]">
            <Droplets className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            H2O <span className="text-muted-foreground font-medium">Hydration Spot</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-ink bg-secondary" : "text-muted-foreground hover:text-ink"
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="soft" size="sm">
            <a href="https://www.h2ohydrationco.com" target="_blank" rel="noopener noreferrer">
              Bottle Brand ↗
            </a>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">Visit Us</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-4 py-3 text-base font-medium",
                    isActive ? "bg-secondary text-ink" : "text-muted-foreground"
                  )
                }
              >
                {l.label}
              </RouterNavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button asChild variant="soft">
                <a href="https://www.h2ohydrationco.com" target="_blank" rel="noopener noreferrer">
                  Visit Our Bottle Brand
                </a>
              </Button>
              <Button asChild variant="hero">
                <Link to="/contact" onClick={() => setOpen(false)}>Visit the Storefront</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
