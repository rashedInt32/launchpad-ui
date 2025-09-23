"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGsapStaggerAnimation } from "@/hooks/useGsapAnimation";

export const SaasFAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "How does the free trial work?",
      answer: "Our free trial gives you full access to all features for 14 days. No credit card required. You can upgrade, downgrade, or cancel anytime during the trial period."
    },
    {
      id: "item-2",
      question: "Can I change my plan anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits accordingly."
    },
    {
      id: "item-3",
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with SOC 2, GDPR, and other industry standards. Your data is always protected."
    },
    {
      id: "item-4",
      question: "Do you offer customer support?",
      answer: "Yes, we provide 24/7 customer support through email, live chat, and phone. Premium plans include priority support and dedicated account managers."
    },
    {
      id: "item-5",
      question: "Can I integrate with other tools?",
      answer: "Definitely! We offer integrations with over 200+ popular tools including Slack, Zapier, Google Workspace, Microsoft Teams, and many more through our API and Zapier integration."
    },
    {
      id: "item-6",
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional usage. We never automatically charge you without your approval."
    }
  ];

  const titleRef = useGsapStaggerAnimation({ preset: 'fadeInUp' });
  const faqRef = useGsapStaggerAnimation({
    preset: 'staggerFadeIn',
    delay: 0.2,
    stagger: 0.08
  });

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our platform. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        <div ref={faqRef}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent)]/90 transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};