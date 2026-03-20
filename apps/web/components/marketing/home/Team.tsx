const founders = [
	{
		name: "Founder 1",
		role: "CEO & AI Strategy",
		initials: "F1",
		index: 1,
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop",
	},
	{
		name: "Founder 2",
		role: "CTO & Engineering",
		initials: "F2",
		index: 2,
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop",
	},
	{
		name: "Founder 3",
		role: "COO & Operations",
		initials: "F3",
		index: 3,
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
	},
	{
		name: "Founder 4",
		role: "CPO & Product",
		initials: "F4",
		index: 4,
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop",
	},
];

const Team = () => {	
	return (
		<section className="py-32 px-8 	bg-secondary-foreground/80">
			<div className="max-w-3xl mx-auto text-center">
				<span className="inline-block bg-primary text-on-primary px-4 py-1 mb-10 text-[10px] font-bold uppercase tracking-[0.2em]">
					The Team
				</span>
				<h2 className="editorial-headline text-5xl mb-12 uppercase text-foreground">
					About SashFlow
				</h2>
				<div className="space-y-6 font-approachable text-xl leading-relaxed text-on-surface">
					<p>
						SashFlow is a team of four builders focused on creating
						AI-driven products for real-world industries.
					</p>
					<p className="font-bold border-y border-outline-variant/30 py-8">
						Combined experience: 25+ years across AI, automation,
						and multiple sectors.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Team;
