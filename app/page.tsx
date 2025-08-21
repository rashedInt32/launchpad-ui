"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold text-[var(--color-primary)]">
        <Link href="variants/saas">Saas Landing demo</Link>
      </h1>
    </div>
  );
}
