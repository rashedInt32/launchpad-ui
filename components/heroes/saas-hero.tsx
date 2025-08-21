import Image from "next/image";
import { Button } from "../ui/button";

export function SassHero() {
  return (
    <section className="pt-10 lg:pt-20 px-6 items-center flex-col flex justify-center gap-2 flex-wrap mt-18 lg:mt-24 bg-gradient-to-t from-white to-blue-200 rounded-lg mx-3 lg:mx-6">
      <h1 className="text-2xl lg:text-7xl font-heading font-extrabold mb-4 text-center text-[var(--text)]">
        Precision Finance at <br />{" "}
        <span className="text-[var(--accent)]">You FingerTips</span>
      </h1>
      <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
        Build fully responsive landing pages with modular headers, hero banners,
        features, pricing, and footers.
      </p>
      <div className="flex gap-4 itemx-center justify-center flex-wrap">
        <Button variant="defaultRounded">View Templates</Button>
        <Button variant="outlineRounded" asChild>
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
          alt="Sass Hero Image"
          width={900}
          height={400}
          className="flex-1 w-full rounded-lg"
        />
      </div>
    </section>
  );
}
