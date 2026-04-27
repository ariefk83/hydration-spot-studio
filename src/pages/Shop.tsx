import PageShell from "@/components/site/PageShell";
import SectionHeading from "@/components/site/SectionHeading";
import { Droplets, Recycle, Snowflake, Zap, Wrench, Coffee } from "lucide-react";
import bottles from "@/assets/bottles.jpg";
import ice from "@/assets/ice.jpg";
import electrolytes from "@/assets/electrolytes.jpg";
import storefront from "@/assets/storefront.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  { icon: Droplets, name: "Alkaline Water Refills", price: "From $0.39 / gal", img: storefront, desc: "Bring your own container or pick one up here. Cold-filled, ultra-purified, alkaline." },
  { icon: Recycle, name: "Reusable Bottles", price: "From $18", img: bottles, desc: "Aluminum and stainless bottles in multiple sizes — the last bottle you'll need to buy." },
  { icon: Wrench, name: "Home & Office Dispensers", price: "Starting $129", img: storefront, desc: "Top-load and bottom-load dispensers, plus 3- and 5-gallon refill jugs." },
  { icon: Snowflake, name: "Cubed & Block Ice", price: "From $3 / bag", img: ice, desc: "Crystal-clear cubed ice and 10 lb blocks. Perfect for events, coolers, and Tucson summers." },
  { icon: Zap, name: "LMNT Electrolytes", price: "Singles & boxes", img: electrolytes, desc: "Full LMNT flavor lineup. Real salt, zero sugar — single packets to value boxes." },
  { icon: Coffee, name: "Refill Supplies", price: "From $4", img: bottles, desc: "Caps, gaskets, cleaning brushes, carriers, and accessories for every bottle in the house." },
];

const Shop = () => (
  <PageShell title="Shop — H2O Hydration Spot" description="Browse refills, bottles, dispensers, ice and LMNT electrolytes at the Hydration Spot in Tucson.">
    <section className="container-x py-20 md:py-28">
      <SectionHeading
        eyebrow="The Shop"
        title={<>Everything to keep <span className="text-gradient">your crew hydrated.</span></>}
        description="Stop in to see the full lineup. Pricing shown is starting — visit the storefront for current sizes, flavors and bundles."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map(({ icon: Icon, name, price, img, desc }) => (
          <article key={name} className="card-elevated overflow-hidden group">
            <div className="aspect-[5/4] overflow-hidden bg-secondary">
              <img src={img} alt={name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-azure">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-azure">{price}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-border ink-gradient text-paper p-10 md:p-14 text-center">
        <h3 className="font-display text-3xl md:text-4xl font-bold">Looking for our premium bottled water?</h3>
        <p className="mt-3 text-paper/70 max-w-xl mx-auto">Our sister brand H2O Hydration Co. ships premium alkaline water in refillable aluminum bottles.</p>
        <div className="mt-6 flex justify-center">
          <Button asChild variant="accent" size="lg">
            <a href="https://www.h2ohydrationco.com" target="_blank" rel="noopener noreferrer">Shop H2O Hydration Co. ↗</a>
          </Button>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Shop;
