import { SaasHeader } from "@/components/headers";
import { SaasHero } from "@/components/heroes";
import { SaasPricing } from "@/components/pricing";
import { SaasFeatures } from "@/components/sections";
import { SaasFooter } from "@/components/footers";
import SocialProof from "@/components/sections/saas-socials";
import { SaasTestimonial } from "@/components/sections/saas-testimonial";
import { SaasStats } from "@/components/sections/saas-stats";
import { SaasFAQ } from "@/components/sections/saas-faq";
import { AnimationProvider } from "@/contexts/AnimationContext";

export default function SaasLanding() {
  return (
    <AnimationProvider>
      <div>
        <SaasHeader />
        <SaasHero />
        <SocialProof />
        <SaasStats />
        <SaasFeatures />
        <SaasTestimonial />
        <SaasPricing />
        <SaasFAQ />
        <SaasFooter />
      </div>
    </AnimationProvider>
  );
}
