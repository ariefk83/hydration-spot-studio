import PageShell from "@/components/site/PageShell";
import SectionHeading from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import storefront from "@/assets/storefront.jpg";

const About = () => (
  <PageShell title="About — H2O Hydration Spot" description="The story behind H2O Hydration Spot — a Tucson family business committed to wellness, sustainability and community.">
    <section className="container-x py-20 md:py-28">
      <SectionHeading
        eyebrow="Our story"
        title={<>A family business with a <span className="text-gradient">simple mission</span>.</>}
        description="Help our neighbors stay hydrated, cut single-use plastic out of daily life, and bring the highest-quality hydration products to Tucson under one roof."
      />

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            H2O Hydration Spot was born out of our family's love for the desert and frustration with the plastic
            stacking up in every recycling bin in town. We knew there had to be a better way — one that made
            premium hydration easy, affordable and good for the planet.
          </p>
          <p>
            What started as a single refill counter has grown into a full hydration storefront: alkaline water on
            tap, ice for everything from race days to backyard parties, dispensers for home and office, the full
            LMNT lineup, and our own line of refillable aluminum bottles under the H2O Hydration Co. brand.
          </p>
          <p>
            We're proud to be family-owned, locally rooted, and obsessed with the small details — the temperature
            of the water, the click of the cap, the smile when a regular walks in. That's the Spot.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Visit the storefront</Link></Button>
            <Button asChild variant="soft" size="lg">
              <a href="https://www.h2ohydrationco.com" target="_blank" rel="noopener noreferrer">See our bottle brand ↗</a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-2 relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] hero-gradient opacity-30 blur-2xl" />
          <img src={storefront} alt="H2O Hydration Spot storefront interior" loading="lazy" className="rounded-[1.75rem] shadow-[var(--shadow-pop)] w-full" />
        </div>
      </div>
    </section>
  </PageShell>
);

export default About;
