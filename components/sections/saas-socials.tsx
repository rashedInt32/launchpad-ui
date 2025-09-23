"use client";

import { Title } from "../ui/title";
import { useGsapStaggerAnimation } from "@/hooks/useGsapAnimation";

export default function SocialProof() {
  const brands = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    },
    {
      name: "Dropbox",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    },
  ];

  const titleRef = useGsapStaggerAnimation({ preset: 'fadeInUp' });
  const logosRef = useGsapStaggerAnimation({
    preset: 'staggerFadeIn',
    delay: 0.2,
    stagger: 0.06
  });

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div ref={titleRef}>
          <Title
            text="Trusted by over 5000+ Companies worldwide"
            breakText="Companies worldwide"
          />
        </div>
        <div ref={logosRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
