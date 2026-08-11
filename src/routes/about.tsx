import { createFileRoute } from "@tanstack/react-router";
import { ADDRESS, businesses } from "@/data/business";

const title = "आमच्याविषयी | दत्ता कुटुंब व्यवसाय समूह, जारावंडी";
const description =
  "जारावंडी येथील दत्ता कुटुंबाची चार दुकाने — CSC सेवा केंद्र, बांगडी भंडार, शू शॉप आणि टेलरिंग शॉप. आमचा प्रवास, मूल्ये आणि कुटुंबातील सदस्यांची ओळख.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="section">
      <h1 className="text-3xl text-foreground sm:text-4xl">आमच्याविषयी</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
        दत्ता कुटुंब व्यवसाय समूह म्हणजे जारावंडी व परिसरातील गावकऱ्यांच्या रोजच्या गरजा एका
        ठिकाणी पूर्ण करणारा कुटुंबीय उपक्रम. सुरुवात एका छोट्या दुकानापासून झाली आणि आज आमच्या
        चार सेवा-दुकानांवर परिसरातील शेकडो कुटुंबे विश्वास ठेवतात.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
        आमचे तत्त्व साधे आहे — प्रामाणिक व्यवहार, वाजवी दर आणि वेळेत सेवा. प्रत्येक दुकान
        कुटुंबातील सदस्य स्वतः सांभाळतात, त्यामुळे ग्राहकांना नेहमी थेट आणि आपुलकीची सेवा मिळते.
      </p>

      <h2 className="mt-12 text-2xl text-foreground">आमचे कुटुंब, आमचे व्यवसाय</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {businesses.map((b) => (
          <div key={b.slug} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg text-foreground">{b.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b.tagline}</p>
            <p className="mt-3 text-sm text-foreground">{b.owner}</p>
            <a href={`tel:${b.phone}`} className="text-sm text-primary hover:underline">
              {b.phone}
            </a>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-2xl text-foreground">आमची मूल्ये</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["प्रामाणिकपणा", "स्पष्ट दर, लपवलेले शुल्क नाही."],
          ["गुणवत्ता", "तपासलेला माल आणि नीटनेटके काम."],
          ["आपुलकी", "प्रत्येक ग्राहक आमच्या कुटुंबाचा भाग."],
        ].map(([t, d]) => (
          <li key={t} className="rounded-2xl bg-secondary p-5">
            <p className="font-medium text-foreground">{t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
        पत्ता: {ADDRESS}
      </p>
    </div>
  );
}
