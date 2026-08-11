import { Link } from "@tanstack/react-router";
import { ADDRESS, businesses } from "@/data/business";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-heading text-xl text-foreground">दत्ता कुटुंब व्यवसाय समूह</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ADDRESS}</p>
          <p className="mt-3 text-sm text-muted-foreground">वेळ: दररोज सकाळी ९ ते रात्री ८</p>
        </div>

        <div>
          <h3 className="font-heading text-lg text-foreground">आमचे व्यवसाय</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {businesses.map((b) => (
              <li key={b.slug}>
                {b.name} — <a href={`tel:${b.phone}`} className="text-foreground hover:underline">{b.phone}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-foreground">दुवे</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">आमच्याविषयी</Link></li>
            <li><Link to="/services" className="hover:text-foreground">सेवा व उत्पादने</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">फोटो गॅलरी</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">प्रश्नोत्तरे</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">संपर्क करा</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} दत्ता कुटुंब व्यवसाय समूह, जारावंडी. सर्व हक्क राखीव.
      </div>
    </footer>
  );
}
