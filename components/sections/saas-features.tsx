import { Shield, Cloud, Layers, BarChart, Bell, Settings } from "lucide-react";
import { Title } from "../ui/title";

export const SaasFeatures = () => {
  const services = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Your data is protected with enterprise-grade security and 99.9% uptime guaranteed. We use the latest encryption protocols to ensure privacy.",
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description:
        "Our cloud-based architecture scales seamlessly to meet your growing business needs, handling millions of requests without a hitch.",
    },
    {
      icon: Layers,
      title: "Integrated Platform",
      description:
        "A single, unified platform for all your business operations. Our tools work together to streamline your workflow and boost productivity.",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with powerful, real-time analytics. Visualize your data and make informed decisions with customizable dashboards.",
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description:
        "Stay updated with instant alerts and notifications. Never miss a critical update or event, whether you're on your desktop or mobile.",
    },
    {
      icon: Settings,
      title: "Customizable Workflows",
      description:
        "Tailor our platform to your specific needs. Our flexible and customizable workflows adapt to your unique business processes effortlessly.",
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24 font-sans text-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Title
            text="Scale your Business"
            colorText="Business"
            subTitle="We offer a comprehensive suite of features designed to help your business thrive."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl bg-gray-50 p-6 shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
