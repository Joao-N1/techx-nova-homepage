import { useEffect } from "react";

const SchedulingSection = () => {
  useEffect(() => {
    // Cal inline embed initialization
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
    (window as any).Cal("init", "30min", {origin:"https://app.cal.com"});

    (window as any).Cal.ns["30min"]("inline", {
      elementOrSelector:"#my-cal-inline-30min",
      config: {"layout":"month_view"},
      calLink: "joao-neves-ozvx1l/30min",
    });

    (window as any).Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
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
            className="bg-card rounded-lg shadow-lg overflow-hidden border border-border"
            style={{ width: "100%", height: "600px" }}
          >
            <div 
              style={{width:"100%",height:"100%",overflow:"scroll"}} 
              id="my-cal-inline-30min"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;