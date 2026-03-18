import { industries } from "@constants";

const Industries = () => {
  return (
    <section
      id="industries"
      className="relative min-h-screen flex justify-center px-6"
    >
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-center">
          Industries We Enable
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="card-gradient border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors group"
              >
                <ind.icon className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-display text-sm font-semibold">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-full border border-border rounded-lg card-gradient"></div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
