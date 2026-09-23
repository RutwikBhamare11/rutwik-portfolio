import { FOOTER } from "@/constants/testIds";
import { profile } from "@/data/portfolio";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid={FOOTER.root}
      className="px-6 md:px-12 lg:px-20 py-10 border-t border-[color:var(--border)]"
    >
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-6">
          <p className="font-serif-display text-5xl md:text-6xl leading-none">
            R<span style={{ color: "var(--accent)" }}>B</span>
          </p>
          <p className="font-mono-label mt-3">© {year} {profile.name}. All rights reserved.</p>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-wrap gap-6 md:justify-end">
          <a href="#top" className="hover-underline font-mono-label">Back to top ↑</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover-underline font-mono-label">LinkedIn</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover-underline font-mono-label">Instagram</a>
          <a href={`mailto:${profile.email}`} className="hover-underline font-mono-label">Email</a>
        </div>
      </div>
    </footer>
  );
};
