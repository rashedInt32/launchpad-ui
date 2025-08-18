import { Activity, Bolt, LineChart } from "lucide-react";

const iconClass = "size-10 text-[var(--primary)]";
const features: { title: string; desc: string; icon: React.ReactElement }[] = [
  {
    title: "Modular Sections",
    desc: "Pick and combine sections like Lego blocks.",
    icon: <Activity className={iconClass} />,
  },
  {
    title: "Responsive by Default",
    desc: "Designed mobile-first with Tailwind.",
    icon: <LineChart className={iconClass} />,
  },
  {
    title: "Modern Stack",
    desc: "Next.js App Router + Tailwind v4.",
    icon: <Bolt className={iconClass} />,
  },
];

export function SassFeatures() {
  return (
    <section id="features" className="py-16 px-6">
      <h2 className="text-3xl font-heading font-bold text-center text-[var(--accent)] mb-12">
        Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="p-6 rounded-xl shadow-sm ">
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
