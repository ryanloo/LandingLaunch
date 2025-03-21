import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is RapidSaaS?",
      answer: "RapidSaaS is a pre-built SaaS boilerplate designed for AI-assisted development. It includes Next.js, Supabase, and Stripe integrations, so you can focus on building features instead of boilerplate setup."
    },
    {
      question: "Who is RapidSaaS for?",
      answer: "It's perfect for developers using AI code editors like Cursor, looking to quickly launch a SaaS product with authentication, payments, and subscriptions already set up."
    },
    {
      question: "How does RapidSaaS complement AI coding tools?",
      answer: "Since RapidSaaS handles the repetitive setup (auth, payments, subscriptions), AI code editors like Cursor can help you rapidly modify and extend the boilerplate without starting from scratch."
    },
    {
      question: "Can I customize RapidSaaS using AI-assisted coding?",
      answer: "Yes! RapidSaaS is structured to work seamlessly with AI code editors. You can use AI to refactor code, generate new components, and add custom business logic effortlessly."
    },
    {
      question: "Is there a subscription fee?",
      answer: "No, RapidSaaS is a one-time purchase with no recurring fees."
    },
    {
      question: "Can I use this for multiple projects?",
      answer: "Yes, you can use RapidSaaS for multiple projects, but reselling or redistributing the code is not allowed."
    },
    {
      question: "How do I get access after purchasing?",
      answer: "After payment, you'll receive an instant download link via email."
    },
    {
      question: "Is there documentation included?",
      answer: "Yes, RapidSaaS includes detailed setup instructions to help you get started quickly."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about RapidSaaS.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 text-lg font-semibold text-gray-900 hover:bg-primary/5 data-[state=open]:bg-primary/5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-2 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
