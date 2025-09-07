"use client";

import Link from "next/link";

export const SaasFooter = () => {
  return (
    <footer className="bg-white text-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-200 pb-12">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Your SaaS
            </Link>
            <p className="text-sm leading-relaxed">
              The all-in-one platform for modern teams.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  ...
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  ...
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-gray-900">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-gray-900">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-gray-900">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-900">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-gray-900">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-900">
                  Careers{" "}
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-gray-900">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between text-sm">
          <p>&copy; 2025 Your SaaS Name, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
