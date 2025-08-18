import { Button } from "../ui/button";

export function SassHero() {
  return (
    <section className="text-center py-20 px-6 min-h-[80vh] items-center flex flex-col justify-center">
      <h1 className="text-5xl font-heading font-bold mb-4">
        Landing pages for your landing page kit 😄
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        Build fully responsive landing pages with modular headers, hero banners,
        features, pricing, and footers.
      </p>
      <div className="flex justify-center gap-4">
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
    </section>
  );
}
