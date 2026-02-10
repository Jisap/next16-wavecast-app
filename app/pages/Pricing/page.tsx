"use client"

import Button from "@/app/Components/Button/Button"
import PageHeader from "@/app/Components/PageHeader/PageHeader"
import musicWavesImg from "@/public/Images/music-waves.png"
import { useState } from "react"

const faqs = [
  {
    question: "How often are new episodes released?",
    answer: "New episodes are released every Monday with fresh topics and guest interviews."
  },
  {
    question: "Where can I listen to the podcast?",
    answer: "You can listen on Spotify, Apple Podcasts, Google Podcasts, and directly on our website."
  },
  {
    question: "How long are the episodes?",
    answer: "Each episode typically lasts between 30 and 60 minutes."
  },
  {
    question: "Can I suggest a topic or guest?",
    answer: "Yes, we love hearing from our listeners. You can send us your suggestions through the contact form."
  },
  {
    question: "Is the podcast free to listen to?",
    answer: "Yes, all episodes are completely free and available on all supported platforms."
  },
  {
    question: "Do you offer transcripts of the episodes?",
    answer: "Selected episodes include transcripts, which are available on the episode detail page."
  }
]

const pricingPlans = [
  {
    title: "Basic",
    price: "Free",
    monthlyPrice: "0.00",
    yearlyPrice: "0.00",
    description: "Get exclusive podcasts from your favorite hosts on here for free.",
    features: [
      "Latest and freebies topics",
      "Curated speakers",
      "Free content only",
      "Available on all platforms"
    ],
    disabledFeatures: [
      "upto 20 channel Subscribe",
      "Unlimited episodes"
    ]
  },
  {
    title: "Pro",
    price: "39",
    monthlyPrice: "39.00",
    yearlyPrice: "320.00",
    popular: true,
    description: "Unlock premium content and ad-free listening for a better experience.",
    features: [
      "Ad-free listening",
      "Exclusive bonus episodes",
      "High-quality audio (320kbps)",
      "Upto 100 channel Subscribe",
      "Download for offline use",
      "Early access to new releases"
    ],
    disabledFeatures: []
  },
  {
    title: "Enterprise",
    price: "99",
    monthlyPrice: "99.00",
    yearlyPrice: "850.00",
    description: "The ultimate plan for organizations and high-volume listeners.",
    features: [
      "All Pro features included",
      "Dedicated account manager",
      "Custom analytics & reporting",
      "Multiple user profiles",
      "API access for developers",
      "White-label options"
    ],
    disabledFeatures: []
  }
];

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <>
      <PageHeader
        title={<>Pricing <span className="text-prim">Plan</span></>}
      />

      <div className="dark-section pt-20 pb-30">
        <div className="px-[8%] lg:px-[16%]">
          {/* Header Section */}
          <div className="title text-center mb-16">
            <div className="flex flex-col items-center gap-4">
              <h2 className="inline-block px-4 py-2 rounded-full text-prim text-2xl font-normal border border-prim">
                <i className="bi bi-rocket-takeoff pe-4"></i>
                Pricing Plan
              </h2>

              <h1 className="text-5xl md:text-7xl font-semibold mt-4 mb-8">
                Flexible Pricing <span className="text-prim">Options</span>
              </h1>

              {/* Billing Toggle */}
              <div className="flex items-center gap-6 bg-gray-light p-2 rounded-full border border-gray">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`
                    px-8 py-3 rounded-full transition-all duration-300 font-medium 
                    ${billing === "monthly" ? "bg-prim text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className={`px-8 py-3 rounded-full transition-all duration-300 font-medium relative ${billing === "yearly" ? "bg-prim text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
                >
                  Yearly
                  <span className="absolute -top-4 -right-4 bg-second text-white text-[10px] px-2 py-1 rounded-full animate-bounce whitespace-nowrap">
                    -30%
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative bg-gray-light p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl flex flex-col h-full ${plan.popular ? "border-prim scale-105 z-10 shadow-prim/5" : "border-gray hover:border-prim/30"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-prim text-black font-bold px-6 py-2 rounded-full text-sm uppercase tracking-widest shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="text-center border-b border-dashed border-gray pb-8 mb-8">
                  <h4 className={`text-2xl font-bold mb-6 ${plan.popular ? "text-prim" : "text-white"}`}>
                    {plan.title}
                  </h4>

                  <div className="flex justify-center items-end gap-2 mb-6">
                    <span className="text-3xl text-prim font-light opacity-80 mb-2">$</span>
                    <h2 className="text-7xl text-prim font-bold tracking-tighter">
                      {billing === "monthly" ? plan.monthlyPrice.split('.')[0] : plan.yearlyPrice.split('.')[0]}
                    </h2>
                    <span className="text-gray-400 text-xl font-medium mb-2 uppercase">
                      /{billing === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed px-4">
                    {plan.description}
                  </p>
                </div>

                <div className="grow">
                  <ul className="space-y-5 mb-10 list-none">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-4 items-center group/item">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${plan.popular ? "bg-prim/20 text-prim" : "bg-gray text-prim"}`}>
                          <i className="bi bi-check2 text-lg"></i>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 text-left">{feature}</span>
                      </li>
                    ))}
                    {plan.disabledFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-4 items-center opacity-30 grayscale">
                        <div className="w-6 h-6 rounded-full bg-gray/50 flex items-center justify-center text-gray-500">
                          <i className="bi bi-x text-xl"></i>
                        </div>
                        <span className="text-gray-500 line-through decoration-1 text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button
                    variant={plan.popular ? "btn2" : "btn1"}
                    className="w-full py-5! text-lg! rounded-full! transition-all duration-300 hover:scale-105"
                  >
                    {plan.title === "Basic" ? "Use For Free" : "Upgrade Plan"}
                    <i className="bi bi-arrow-right-short ms-2 text-2xl"></i>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing