"use client";

import { Button } from "../ui/button";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";
import { Smartphone, Download, Star, Shield, Zap } from "lucide-react";

const appStores = [
  {
    id: 1,
    name: "iOS App Store",
    icon: "🍎",
    url: "https://www.apple.com/ios/app-store/",
    description: "Download for iPhone"
  },
  {
    id: 2,
    name: "Google Play Store", 
    icon: "📱",
    url: "https://play.google.com/store/apps?hl=en",
    description: "Download for Android"
  }
];

const appFeatures = [
  {
    icon: Zap,
    title: "Quick Orders",
    description: "Order in just 3 taps"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe & encrypted transactions"
  },
  {
    icon: Star,
    title: "Real-time Tracking",
    description: "Track your order live"
  }
];

export function FoodAppDownload() {
  const appRef = useGsapAnimation({
    preset: 'fadeInUp',
    delay: 0.2,
    triggerOnMount: false
  });

  return (
    <section id="app-section" ref={appRef} className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Better Mobile Experience
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Download our latest app from mobile stores
            </h2>
            
            <p className="text-lg text-orange-100 mb-8 max-w-lg">
              Get the best food delivery experience on your mobile device. Order faster, 
              track easily, and enjoy exclusive app-only offers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {appFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg mb-2">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-orange-100">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {appStores.map((store) => (
                <Button
                  key={store.id}
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white hover:text-white flex items-center gap-3 px-6 py-4 rounded-xl"
                >
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl">{store.icon}</span>
                    <div className="text-left">
                      <div className="text-xs opacity-80">{store.description}</div>
                      <div className="font-semibold">{store.name}</div>
                    </div>
                    <Download className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl">
                    🍕
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">FoodDelivery App</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">4.9 (12K reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Your Order</span>
                    <span className="text-sm font-medium text-orange-500">2 items</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl">🍔</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Chicken Burger</div>
                      <div className="text-xs text-gray-600">Extra cheese, no onions</div>
                    </div>
                    <div className="text-sm font-semibold">$12.99</div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl">🍕</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Margherita Pizza</div>
                      <div className="text-xs text-gray-600">Large size</div>
                    </div>
                    <div className="text-sm font-semibold">$18.99</div>
                  </div>
                  
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-lg text-orange-500">$31.98</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                    Track Order
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}