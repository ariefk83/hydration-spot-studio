import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "left" }: SectionHeadingProps) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {eyebrow && (
      <span className="pill">
        <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
        {eyebrow}
      </span>
    )}
    <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
    {description && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>}
  </div>
);

export default SectionHeading;
