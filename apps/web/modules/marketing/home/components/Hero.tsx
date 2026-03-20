export function Hero() {
	return (
		<section className="px-8 max-w-7xl mx-auto mb-32 lg:mb-48 relative">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
				<div className="lg:col-span-8">
					<span className="inline-block bg-tertiary-fixed text-on-tertiary-container px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.1em]">
						Kinetic Infrastructure v1.0
					</span>
					<h1 className="editorial-headline text-6xl md:text-8xl lg:text-9xl mb-8 text-on-surface">
						AI Infrastructure
						<br />
						for Traditional
						<br />
						<span className="text-primary">Industries</span>
					</h1>
				</div>
				<div className="lg:col-span-4 pb-4">
					<p className="font-approachable text-lg leading-relaxed text-on-surface-variant mb-8 border-l-4 border-secondary pl-6">
						SashFlow builds AI-powered products for industries like
						HVAC, Legal, Healthcare, Real Estate, and Insurance —
						from concept to application-ready in 4 weeks.
					</p>
					<div className="flex flex-wrap gap-4">
						<button
							type="button"
							className="bg-primary text-on-primary px-8 py-4 font-approachable font-bold uppercase text-sm tracking-widest hover:brightness-110 transition-all"
						>
							Get in Touch
						</button>
						<button
							type="button"
							className="bg-surface-container-highest text-on-surface px-8 py-4 font-approachable font-bold uppercase text-sm tracking-widest hover:bg-surface-variant transition-all"
						>
							See What We Build
						</button>
					</div>
					<p className="mt-8 font-approachable text-xs font-semibold uppercase tracking-widest opacity-60">
						Built by a team with 25+ years of combined experience.
					</p>
				</div>
			</div>
			<div className="absolute -z-10 top-0 right-0 w-1/3 h-full bg-gradient-to-br from-primary/5 to-transparent opacity-50 blur-3xl" />
		</section>
	);
}
