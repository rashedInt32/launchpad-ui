import Image from "next/image";
import { Button } from "../ui/button";

export function SassHero() {
  return (
    <section className="py-20 px-6 min-h-[50vh] items-center flex justify-center container mx-auto  md:flex-row-reverse gap-8 flex-wrap">
      <Image
        src="/assets/saas-hero.svg"
        alt="Sass Hero Image"
        width={600}
        height={400}
        className="flex-1"
      />
      <div className="flex flex-col flex-1">
        <h1 className="text-5xl font-heading font-bold mb-4 text-[var(--accent)]">
          Landing pages for your landing page kit 😄
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Build fully responsive landing pages with modular headers, hero
          banners, features, pricing, and footers.
        </p>
        <div className="flex gap-4">
          <Button>View Templates</Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/rashedInt32/launchpad-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub ⭐
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
