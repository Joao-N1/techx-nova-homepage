import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What products can I buy here?",
    answer: "You can buy second-hand electronics, games, DVDs, phones, accessories and more at great prices."
  },
  {
    question: "Can I sell my old devices?",
    answer: "Yes, you can sell your used devices to us for cash or store credit."
  },
  {
    question: "Do you offer trade-in options?",
    answer: "Absolutely. You can trade your old products and use the value towards a new purchase."
  },
  {
    question: "How do I check product availability?",
    answer: "You can browse our catalogue online or contact our support for availability."
  },
  {
    question: "Do you provide warranties on used items?",
    answer: "Yes, most of our products come with a standard 24-month warranty for extra peace of mind."
  },
  {
    question: "How can I contact customer support?",
    answer: "Use the John Bot chat for quick help or our contact form for detailed queries."
  }
];

interface FAQProps {
  isOpen: boolean;
  onClose: () => void;
}

const FAQ = ({ isOpen, onClose }: FAQProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-lg-custom max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors text-xl font-bold"
            >
              ×
            </button>
          </div>
          
          <Accordion type="single" collapsible className="space-y-2">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;