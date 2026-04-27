import { Link } from "react-router-dom";
import { Droplets, Instagram, Facebook, MapPin } from "lucide-react";

export const SiteFooter = () => (
  <footer className="ink-gradient text-paper mt-24">
    <div className="container-x py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl hero-gradient">
              <Droplets className="h-5 w-5 text-ink" />
            </span>
            <span className="font-display text-lg font-bold">H2O Hydration Spot</span>
          </div>
          <p className="mt-5 max-w-md text-paper/70">
            Tucson's family-owned refill station, hydration shop and community wellness spot.
            Stay healthy. Stay hydrated.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-paper/60">
            <MapPin className="h-4 w-4" /> Proudly serving Tucson, Arizona
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50">Explore</h4>
          <ul className="mt-4 space-y-3 text-paper/80">
            <li><Link to="/shop" className="hover:text-aqua transition-colors">Shop</Link></li>
            <li><Link to="/learn" className="hover:text-aqua transition-colors">Learn</Link></li>
            <li><Link to="/community" className="hover:text-aqua transition-colors">Community</Link></li>
            <li><Link to="/about" className="hover:text-aqua transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-aqua transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50">Brands</h4>
          <ul className="mt-4 space-y-3 text-paper/80">
            <li>
              <a href="https://www.h2ohydrationco.com" target="_blank" rel="noopener noreferrer" className="hover:text-aqua transition-colors">
                H2O Hydration Co. ↗
              </a>
            </li>
            <li><span className="text-paper/60">LMNT Authorized Dealer</span></li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-paper/20 hover:border-aqua hover:text-aqua transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-paper/20 hover:border-aqua hover:text-aqua transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-paper/10 pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm text-paper/50">
        <p>© {new Date().getFullYear()} H2O Hydration Spot. All rights reserved.</p>
        <p>Family-owned in Tucson, AZ</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
