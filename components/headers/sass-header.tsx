export function SassHeader() {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <div className="text-xl font-heading font-bold">LandingKit</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="hover:text-[var(--accent)]">
          Features
        </a>
        <a href="#pricing" className="hover:text-[var(--accent)]">
          Pricing
        </a>
        <a href="#contact" className="hover:text-[var(--accent)]">
          Contact
        </a>
      </nav>
      <button className="ml-4 px-4 py-2 rounded-xl bg-[var(--accent)] text-white">
        Started
      </button>
    </header>
  );
}
