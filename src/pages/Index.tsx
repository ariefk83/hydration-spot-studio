import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Leaf, Heart, Snowflake, Recycle, Zap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/site/PageShell";
import SectionHeading from "@/components/site/SectionHeading";
import heroBottle from "@/assets/hero-bottle-splash.jpg";
import heroBg from "@/assets/hero-unsplash.jpg";
import family from "@/assets/family-community.jpg";
import storefront from "@/assets/storefront.jpg";
import electrolytes from "@/assets/electrolytes.jpg";
import bottles from "@/assets/bottles.jpg";
import ice from "@/assets/ice.jpg";

const offerings = [
  {
    icon: Droplets,
    title: "Water Refills",
    desc: "Cold, ultra-purified alkaline water — bring any container, fill up, and go.",
    img: storefront,
  },
  {
    icon: Recycle,
    title: "Reusable Bottles",
    desc: "Sleek aluminum and stainless bottles built to refill thousands of times.",
    img: bottles,
  },
  {
    icon: Snowflake,
    title: "Bagged & Block Ice",
    desc: "Crystal-clear cubed ice for events, coolers, and everyday Tucson heat.",
    img: ice,
  },
  {
    icon: Zap,
    title: "LMNT Electrolytes",
    desc: "Authorized dealer of LMNT — the cleanest electrolyte mix on the market.",
    img: electrolytes,
  },
];

const stats = [
  { v: "10k+", l: "Single-use bottles diverted" },
  { v: "100%", l: "Family-owned & operated" },
  { v: "1", l: "Tucson, Arizona — our home" },
  { v: "24/7", l: "Hydration mission" },
];

const Index = () => {
  return (
    <PageShell
      title="H2O Hydration Spot — Tucson's Refill, Ice & Hydration Shop"
      description="Tucson's family-owned hydration storefront. Water refills, reusable bottles, dispensers, ice and LMNT electrolytes."
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper">
        {/* Uploaded pink ink background image */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        {/* Very light wash so the pink ink stays vivid but text is still readable */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-paper/40" aria-hidden />
        {/* Subtle left-side fade for headline contrast */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-paper/70 via-paper/20 to-transparent" aria-hidden />

        <div className="container-x relative grid gap-12 pt-20 pb-28 md:pt-28 md:pb-36 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 animate-fade-up text-ink">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/70 px-3.5 py-1.5 text-xs font-medium text-ink backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse" /> Now refilling in Tucson, AZ
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Hydration that <span className="text-gradient">moves</span> with your family.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
              Refill stations, reusable bottles, ice, dispensers and LMNT electrolytes —
              all under one roof. Built for healthier people and a healthier planet.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/shop">
                  Explore the Shop <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="soft" size="xl">
                <Link to="/learn">Why hydration matters</Link>
              </Button>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-azure" /> Authorized LMNT Dealer</span>
              <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-azure" /> Sustainability-first</span>
              <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4 text-azure" /> Family-owned</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-aqua/20 via-azure/10 to-transparent blur-2xl" />
            <div className="relative mx-auto w-full max-w-md animate-float">
              <img
                src={heroBottle}
                alt="Chilled bottle of water with ice and mint"
                width={1080}
                height={1600}
                className="w-full rounded-[2rem] shadow-[var(--shadow-pop)] ring-1 ring-ink/5"
              />
              {/* Floating glass cards */}
              <div className="absolute -left-6 top-10 rounded-2xl border border-ink/10 bg-paper/80 px-4 py-3 text-ink backdrop-blur-md shadow-xl">
                <div className="text-2xl font-bold text-gradient">9.5 pH</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Alkaline refill</div>
              </div>
              <div className="absolute -right-4 bottom-12 rounded-2xl border border-ink/10 bg-paper/80 px-4 py-3 text-ink backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-2 text-sm font-semibold"><Snowflake className="h-4 w-4 text-azure" /> Ice daily</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Cubed & block</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-bold tracking-tight md:text-5xl text-gradient">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="container-x py-24 md:py-32">
        <SectionHeading
          eyebrow="What we offer"
          title={<>One stop for your <span className="text-gradient">hydration ritual</span>.</>}
          description="From everyday refills to electrolyte mixes that fuel desert adventures, the Hydration Spot is stocked for the way Tucson lives."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offerings.map(({ icon: Icon, title, desc, img }) => (
            <article key={title} className="card-elevated overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-azure">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="soft" size="lg">
            <Link to="/shop">See everything in the shop <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* LMNT FEATURE */}
      <section className="container-x">
        <div className="card-elevated overflow-hidden border-0 ink-gradient text-paper">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-10 md:p-16 lg:p-20">
              <span className="pill border-paper/20 bg-paper/5 text-paper/80">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua" /> Authorized LMNT Dealer
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
                Real salt. <span className="text-gradient">Zero sugar.</span> Serious hydration.
              </h2>
              <p className="mt-5 max-w-md text-paper/70 md:text-lg">
                We stock the full LMNT lineup — single packets, sample boxes, and the limited drops
                you can't find on the shelf. Stop in to taste a sample on us.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg">
                  <Link to="/shop">Browse LMNT flavors <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-paper/30 bg-transparent text-paper hover:bg-paper/10 hover:text-paper">
                  <Link to="/learn">Why electrolytes?</Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <img src={electrolytes} alt="LMNT electrolyte packets" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY / COMMUNITY */}
      <section className="container-x py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] hero-gradient opacity-30 blur-2xl" />
            <img
              src={family}
              alt="Family in Tucson with reusable water bottles"
              loading="lazy"
              className="rounded-[1.75rem] shadow-[var(--shadow-pop)] w-full"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Family & community"
              title={<>Hydration is a <span className="text-gradient">family thing.</span></>}
              description="We're a family-owned shop in Tucson, Arizona — and we built the Hydration Spot for the families, athletes, students and neighbors who keep this city moving. Every refill funds a cleaner planet for the next generation."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, t: "Locally rooted", d: "Born and raised in Tucson, AZ." },
                { icon: Heart, t: "Wellness first", d: "Better hydration, better days." },
                { icon: Leaf, t: "Planet positive", d: "Every refill skips a plastic bottle." },
                { icon: Award, t: "Trusted brands", d: "LMNT, premium dispensers, and our own bottles." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-border p-5">
                  <Icon className="h-5 w-5 text-azure" />
                  <h4 className="mt-3 font-display font-semibold">{t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTLE BRAND CTA */}
      <section className="container-x">
        <div className="rounded-[2rem] border border-border soft-gradient p-10 md:p-16 lg:p-20 text-center">
          <span className="pill mx-auto"><span className="h-1.5 w-1.5 rounded-full bg-azure" /> Sister brand</span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Meet <span className="text-gradient">H2O Hydration Co.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Our premium alkaline water in refillable aluminum bottles — designed for active,
            eco-conscious lifestyles, and stocked right here at the Spot.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="hero" size="xl">
              <a href="https://www.h2ohydrationco.com" target="_blank" rel="noopener noreferrer">
                Visit the bottle brand <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Index;
