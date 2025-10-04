"use client";

import { useGsapAnimation } from "@/hooks/useGsapAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Blog", href: "#blog" }
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Restaurant Partners", href: "#partners" },
    { name: "Delivery Partners", href: "#delivery" }
  ],
  legal: [
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Refund Policy", href: "#refunds" }
  ]
};

const socialLinks = [
  { name: "Facebook", icon: "📘", href: "#", color: "hover:text-blue-500" },
  { name: "Twitter", icon: "🐦", href: "#", color: "hover:text-sky-400" },
  { name: "Instagram", icon: "📷", href: "#", color: "hover:text-pink-500" },
  { name: "YouTube", icon: "📺", href: "#", color: "hover:text-red-500" }
];

const contactInfo = [
  { icon: Phone, text: "+1 631 123 4567", href: "tel:+16311234567" },
  { icon: Mail, text: "hello@fooddelivery.com", href: "mailto:hello@fooddelivery.com" },
  { icon: MapPin, text: "123 Food Street, Delivery City, DC 12345", href: "#" },
  { icon: Clock, text: "24/7 Customer Support", href: "#" }
];

export function FoodFooter() {
  const footerRef = useGsapAnimation({
    preset: 'fadeInUp',
    delay: 0.2,
    triggerOnMount: false
  });

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-3xl">🍕</div>
              <div className="text-2xl font-bold text-orange-500">FoodDelivery</div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are behind the delicious food delivery experience. Fresh ingredients, 
              fast delivery, and amazing customer service - that&apos;s our promise to you.
            </p>
            
            <div className="space-y-3">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={info.text}
                    href={info.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{info.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © 2024 FoodDelivery. Made with ❤️ for food lovers everywhere.
            </div>
            
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors p-2 hover:bg-gray-800 rounded-full text-xl`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold text-orange-500 mb-1">Fast Delivery</h4>
              <p className="text-gray-400 text-sm">Average delivery time: 30 minutes</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="text-2xl mb-2">🏆</div>
              <h4 className="font-semibold text-orange-500 mb-1">Quality Food</h4>
              <p className="text-gray-400 text-sm">Fresh ingredients from trusted partners</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="text-2xl mb-2">💝</div>
              <h4 className="font-semibold text-orange-500 mb-1">Customer Care</h4>
              <p className="text-gray-400 text-sm">24/7 support for all your needs</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}