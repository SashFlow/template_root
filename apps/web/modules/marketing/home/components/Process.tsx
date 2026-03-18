import { processSteps } from "@constants";

const Process = () => {
  return (
    <section className="relative min-h-screen flex justify-center px-6">
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-center">
          From Concept to Product
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div key={step.week} className="relative">
              <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
                {step.week}
              </div>
              <div className="border-t-2 border-primary/30 pt-4">
                <h3 className="font-display text-base font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Fast execution without compromising product quality.
        </p>
      </div>
    </section>
  );
};

export default Process;
