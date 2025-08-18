import { SassHeader } from "@/components/headers";
import { SassHero } from "@/components/heroes";
import { SaasPricing } from "@/components/pricing";
import { SassFeatures } from "@/components/sections";

export default function SassLanding() {
  return (
    <div>
      <SassHeader />
      <SassHero />
      <SassFeatures />
      <SaasPricing />
    </div>
  );
}
