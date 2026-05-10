"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Essential",
      price: "$49",
      description: "Perfect for intimate weddings.",
      features: [
        "AI Theme Generation",
        "1 Standard Template",
        "Basic RSVP Tracking",
        "Up to 100 Guests",
        "Standard Support"
      ],
      buttonText: "Start Essential",
      popular: false
    },
    {
      name: "Cinematic",
      price: "$149",
      description: "Our most popular luxury experience.",
      features: [
        "Everything in Essential",
        "Premium Cinematic Templates",
        "Custom Domain Name",
        "Unlimited Guests",
        "Priority Concierge Support",
        "Custom Music Integration"
      ],
      buttonText: "Experience Cinematic",
      popular: true
    },
    {
      name: "Bespoke",
      price: "$499",
      description: "A completely custom 1-on-1 design.",
      features: [
        "Everything in Cinematic",
        "Dedicated UI/UX Designer",
        "Custom 3D Animations",
        "Printed QR Code Cards",
        "24/7 White-glove Support"
      ],
      buttonText: "Request Bespoke",
      popular: false
    }
  ];

  return (
    <div className="relative min-h-[100dvh] bg-black text-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,98,7,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-yellow-500 mb-4"
          >
            Investment
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="playfair text-4xl md:text-6xl mb-6"
          >
            A Masterpiece for Every Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            Transparent pricing for an experience that lasts a lifetime. Select the tier that matches the grandeur of your celebration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className={`relative p-8 md:p-10 rounded-[32px] border ${
                plan.popular 
                  ? "border-yellow-500/50 bg-gradient-to-b from-yellow-500/10 to-transparent" 
                  : "border-white/10 bg-white/5"
              } backdrop-blur-xl flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                  Most Chosen
                </div>
              )}
              <h3 className="playfair text-2xl mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-light">{plan.price}</span>
                <span className="text-neutral-500 text-sm ml-2">/ event</span>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/create"
                className={`w-full py-4 text-center rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all ${
                  plan.popular
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "border border-white/20 hover:border-yellow-500 hover:text-yellow-500"
                }`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
