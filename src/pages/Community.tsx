import PageShell from "@/components/site/PageShell";
import SectionHeading from "@/components/site/SectionHeading";
import family from "@/assets/family-community.jpg";
import { Heart, Users, Leaf, MapPin } from "lucide-react";

const Community = () => (
  <PageShell title="Community — H2O Hydration Spot" description="Family values, Tucson partnerships, and the community we serve at H2O Hydration Spot.">
    <section className="container-x py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] hero-gradient opacity-30 blur-2xl" />
          <img src={family} alt="Tucson family" loading="lazy" className="rounded-[1.75rem] shadow-[var(--shadow-pop)] w-full" />
        </div>
        <div>
          <SectionHeading
            eyebrow="Our community"
            title={<>Built <span className="text-gradient">with</span> Tucson, <span className="text-gradient">for</span> Tucson.</>}
            description="We aren't just a shop on the corner — we're neighbors, parents, athletes and small-business owners. The Hydration Spot exists to make wellness easier and more affordable for the people we live next to."
          />
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Heart, t: "Family-owned", d: "Three generations behind the counter." },
          { icon: Users, t: "Local partnerships", d: "Schools, gyms, races and small cafés we love." },
          { icon: Leaf, t: "Refill rewards", d: "Bring back a bottle, save on the next fill." },
          { icon: MapPin, t: "Rooted in Tucson", d: "Born under the saguaros, here to stay." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="card-elevated p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-azure">
              <Icon className="h-5 w-5" />
            </span>
            <h4 className="mt-4 font-display text-lg font-semibold">{t}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);

export default Community;
