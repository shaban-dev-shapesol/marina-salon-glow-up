import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book my appointment?",
    answer: "We recommend booking 1-2 weeks in advance for regular services and 3-4 weeks for special occasions like weddings or events. However, we do accept same-day bookings based on availability."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes a detailed consultation where we discuss your hair goals, lifestyle, and maintenance preferences. We'll analyze your hair type and condition before recommending the best treatments and styles for you."
  },
  {
    question: "Do you offer color consultations?",
    answer: "Yes! We provide complimentary color consultations with our expert colorists. We'll help you choose the perfect shade that complements your skin tone and lifestyle, whether you want a subtle change or dramatic transformation."
  },
  {
    question: "What hair care products do you use and sell?",
    answer: "We use premium professional brands including Olaplex, Redken, and Moroccan Oil. All products used in our salon are available for purchase to help you maintain your look at home."
  },
  {
    question: "How long do different services typically take?",
    answer: "Service times vary: Cut & Blow Dry (1-1.5 hours), Full Color (2-3 hours), Highlights (3-4 hours), and Treatments (45 minutes - 1 hour). We'll provide an accurate time estimate when you book."
  },
  {
    question: "Do you accommodate special events and bridal parties?",
    answer: "Absolutely! We specialize in bridal hair and makeup, as well as group bookings for special events. We recommend scheduling a trial run 4-6 weeks before your event to ensure everything is perfect."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24 hours notice for cancellations or rescheduling. Same-day cancellations may incur a 50% charge. We understand emergencies happen and will work with you on a case-by-case basis."
  },
  {
    question: "Do you offer payment plans for expensive treatments?",
    answer: "Yes, we offer flexible payment options for our premium packages and extensive treatments. Please speak with our reception team about available payment plans when booking."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our salon services, booking process, and policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border/50 shadow-soft overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:text-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+441234567890" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Call Us: (0161) 123-4567
            </a>
            <a 
              href="mailto:info@marinasalon.com" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};