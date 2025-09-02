import { SaasHeader } from "@/components/headers";
import { SaasHero } from "@/components/heroes";
import { SaasPricing } from "@/components/pricing";
import { SaasFeatures } from "@/components/sections";
import { SaasFooter } from "@/components/footers";
import SocialProof from "@/components/sections/saas-socials";
import { SaasTestimonial } from "@/components/sections/saas-testimonial";

export default function SaasLanding() {
  return (
    <div>
      <SaasHeader />
      <SaasHero />
      <SocialProof />
      <SaasFeatures />
      <SaasTestimonial />
      <SaasPricing />
      <SaasFooter />
    </div>
  );
}
