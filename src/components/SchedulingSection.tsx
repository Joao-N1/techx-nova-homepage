import { useEffect } from "react";

const SchedulingSection = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a 30-minute consultation to discuss your technology needs and find the perfect solutions for you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="cal-embed bg-card rounded-lg shadow-lg overflow-hidden border border-border"
            data-cal-link="joao-neves-ozvx1l/30min"
            data-cal-config='{"layout":"month_view","theme":"light"}'
            style={{ width: "100%", height: "600px", overflow: "scroll" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;