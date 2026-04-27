import PageShell from "@/components/site/PageShell";
import SectionHeading from "@/components/site/SectionHeading";
import { Droplets, Zap, Leaf, HeartPulse, Brain, Activity } from "lucide-react";

const articles = [
  { icon: Droplets, title: "Why alkaline water?", body: "Higher pH water can help neutralize acidity, support hydration, and fit naturally into a wellness routine. We explain what's real, what's marketing, and what to look for in a refill." },
  { icon: Zap, title: "Electrolytes 101", body: "Sodium, potassium, magnesium — the trio that makes hydration actually stick. Learn why a glass of plain water sometimes isn't enough in the desert." },
  { icon: Leaf, title: "The plastic problem", body: "The average American throws away 156 single-use bottles a year. Refilling at the Spot is the easiest sustainability swap your family can make." },
  { icon: HeartPulse, title: "Hydration & heart health", body: "Chronic mild dehydration stresses your cardiovascular system. Consistent intake — paired with the right minerals — keeps things flowing." },
  { icon: Brain, title: "Hydration & focus", body: "Even 1–2% dehydration measurably affects mood, energy and cognition. Keep a refilled bottle on your desk and in the car." },
  { icon: Activity, title: "Training in the desert", body: "Tucson athletes burn through fluid fast. Our LMNT + cold refill combo is the go-to before, during and after long sessions." },
];

const Learn = () => (
  <PageShell title="Learn — H2O Hydration Spot" description="Hydration education, electrolyte science, and sustainability tips from your Tucson hydration shop.">
    <section className="container-x py-20 md:py-28">
      <SectionHeading
        eyebrow="Learn"
        title={<>Hydration, <span className="text-gradient">demystified.</span></>}
        description="Short, honest reads on water, electrolytes, and the small daily habits that change how you feel."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(({ icon: Icon, title, body }) => (
          <article key={title} className="card-elevated p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl hero-gradient text-ink">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  </PageShell>
);

export default Learn;
