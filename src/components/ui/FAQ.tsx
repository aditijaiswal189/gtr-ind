"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeader } from "./section-header";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation, and more. Our services cover various visa categories including business, student, family, and tourist visas.",
    },
    {
      question: "What is the consultation process like?",
      answer:
        "Our consultation process begins with an initial assessment of your needs and eligibility. We then provide detailed guidance on visa options, required documentation, and application procedures. Throughout the process, we maintain clear communication and transparency.",
    },
    {
      question: "How long does the visa process take?",
      answer:
        "The visa processing time varies depending on the type of visa and destination country. Generally, it can take anywhere from a few weeks to several months. We'll provide you with specific timelines based on your case.",
    },
    {
      question: "What documents are required?",
      answer:
        "Required documents vary by visa type but typically include passport, photographs, financial statements, educational certificates, and employment records. We'll provide a comprehensive checklist based on your specific visa application.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* <h2 className="text-4xl font-bold mb-4 text-foreground">
            
          </h2>
          <p className="text-muted-foreground mb-8">
           
          </p> */}
          <SectionHeader title="Common questions answered" subtitle="Our commitment to providing exceptional immigration solutions"/>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              
              <div
                key={index}
                className="border border-border  rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-card hover:bg-muted transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-semibold text-lg text-foreground">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-muted">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
