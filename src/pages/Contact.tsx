import PageShell from "@/components/site/PageShell";
import SectionHeading from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";

const Contact = () => {
  const { toast } = useToast();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Thanks!", description: "We'll get back to you within one business day." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageShell title="Contact — H2O Hydration Spot" description="Visit, call or message H2O Hydration Spot in Tucson, AZ.">
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Visit & contact"
          title={<>Come <span className="text-gradient">say hi</span>.</>}
          description="Stop by the shop, give us a call, or send a message — we'd love to help you build a better hydration routine."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, t: "Tucson, Arizona", d: "Full address coming soon — call ahead for directions." },
              { icon: Clock, t: "Hours", d: "Mon–Sat 8am–7pm · Sun 9am–5pm" },
              { icon: Phone, t: "Phone", d: "(520) 000-0000" },
              { icon: Mail, t: "Email", d: "hello@h2ohydrationspot.com" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-elevated p-6 flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl hero-gradient text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display font-semibold">{t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 card-elevated p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required className="mt-2 h-11 rounded-xl" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-2 h-11 rounded-xl" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" className="mt-2 h-11 rounded-xl" placeholder="What's this about?" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} required className="mt-2 rounded-xl" placeholder="Tell us a bit more…" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">Send message</Button>
          </form>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
