import Image from "next/image";

const founders = [
  {
    name: "Founder 1",
    role: "CEO & AI Strategy",
    initials: "F1",
    index: 1,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Founder 2",
    role: "CTO & Engineering",
    initials: "F2",
    index: 2,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Founder 3",
    role: "COO & Operations",
    initials: "F3",
    index: 3,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Founder 4",
    role: "CPO & Product",
    initials: "F4",
    index: 4,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop",
  },
];

const Team = () => {
  return (
    <section className="relative min-h-screen flex justify-center px-6">
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center">
          The Team
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Four builders turning AI into real products for real industries.
        </p>

        <div className="flex flex-col gap-4">
          {founders.map((f) => (
            <div key={f.initials} className="flex gap-4">
              {f.index % 2 === 1 ? (
                <>
                  <div className="w-full card-gradient border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors group">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      <span className="font-display text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                        {f.initials}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-semibold mb-1">
                      {f.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{f.role}</p>
                  </div>
                  <div className="w-full card-gradient border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors group relative aspect-square">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full card-gradient border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors group relative aspect-square">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="w-full card-gradient border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors group">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      <span className="font-display text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                        {f.initials}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-semibold mb-1">
                      {f.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{f.role}</p>
                  </div>
                </>
              )}
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
