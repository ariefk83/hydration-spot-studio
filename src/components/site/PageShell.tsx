import { ReactNode, useEffect } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

interface PageShellProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const PageShell = ({ children, title, description }: PageShellProps) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-16 md:pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default PageShell;
