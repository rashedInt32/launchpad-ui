import { SassHeader } from "@/components/headers";
import { SassHero } from "@/components/heroes";
import { SaasPricing } from "@/components/pricing";
import { SassFeatures } from "@/components/sections";
import { SaasFooter } from "@/components/footers";
import SocialProof from "@/components/sections/saas-socials";

export default function SassLanding() {
  return (
    <div>
      <SassHeader />
      <SassHero />
      <SocialProof />
      <SassFeatures />
      <SaasPricing />
      <SaasFooter />
    </div>
  );
}
