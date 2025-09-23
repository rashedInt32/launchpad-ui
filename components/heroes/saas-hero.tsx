"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useGsapSequenceAnimation } from "@/hooks/useGsapAnimation";

export function SaasHero() {
  const heroRef = useGsapSequenceAnimation([
    { preset: "fadeInUp", delay: 0.0 },
    { preset: "fadeInUp", delay: 0.0 },
    { preset: "fadeInUp", delay: 0.0 },
    { preset: "scaleIn", delay: 0.0 },
  ]);

  return (
    <section
      ref={heroRef}
      className="pt-10 lg:pt-20 px-6 items-center flex-col flex justify-center gap-2 flex-wrap mt-18 lg:mt-18 bg-gradient-to-t from-white to-blue-200 rounded-lg mx-3 lg:mx-10"
    >
      <h1 className="text-2xl lg:text-7xl font-heading font-extrabold mb-4 text-center text-[var(--text)] tracking-tighter">
        Precision Finance at <br />{" "}
        <span className="text-[var(--accent)]">You FingerTips</span>
      </h1>
      <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
        Build fully responsive landing pages with modular headers, hero banners,
        features, pricing, and footers.
      </p>
      <div className="flex gap-4 itemx-center justify-center flex-wrap">
        <Button variant="defaultRounded">View Templates</Button>
        <Button variant="outlineRounded" asChild className="bg-white py-5">
          <a
            href="https://github.com/rashedInt32/launchpad-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star on GitHub ⭐
          </a>
        </Button>
      </div>
      <div className="w-full lg:px-20 pt-12">
        <Image
          src="/assets/saas/saas-hero.png"
          alt="Saas Hero Image"
          width={900}
          height={400}
          className="flex-1 w-full rounded-lg"
        />
      </div>
    </section>
  );
}
