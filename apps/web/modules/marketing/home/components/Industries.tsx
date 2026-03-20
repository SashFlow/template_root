const Industries = () => {
	return (
		<section
			className="bg-surface-container-low py-24 px-8 overflow-hidden"
			id="industries"
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16">
					<h2 className="editorial-headline text-5xl text-on-surface">
						Industries We Enable
					</h2>
					<p className="font-approachable text-on-surface-variant max-w-md">
						We build AI systems that automate workflows and unlock
						new capabilities for entire industries.
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-outline-variant/20">
					<div className="bg-surface p-10 group hover:bg-secondary transition-all duration-500 flex flex-col justify-between aspect-square">
						<span
							className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary-fixed transition-colors"
							data-icon="hvac"
						>
							hvac
						</span>
						<h3 className="font-industrial text-2xl font-black uppercase group-hover:text-surface transition-colors">
							HVAC
						</h3>
					</div>
					<div className="bg-surface p-10 group hover:bg-secondary transition-all duration-500 flex flex-col justify-between aspect-square">
						<span
							className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary-fixed transition-colors"
							data-icon="gavel"
						>
							gavel
						</span>
						<h3 className="font-industrial text-2xl font-black uppercase group-hover:text-surface transition-colors">
							Legal
						</h3>
					</div>
					<div className="bg-surface p-10 group hover:bg-secondary transition-all duration-500 flex flex-col justify-between aspect-square">
						<span
							className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary-fixed transition-colors"
							data-icon="medical_services"
						>
							medical_services
						</span>
						<h3 className="font-industrial text-2xl font-black uppercase group-hover:text-surface transition-colors">
							Healthcare
						</h3>
					</div>
					<div className="bg-surface p-10 group hover:bg-secondary transition-all duration-500 flex flex-col justify-between aspect-square">
						<span
							className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary-fixed transition-colors"
							data-icon="real_estate_agent"
						>
							real_estate_agent
						</span>
						<h3 className="font-industrial text-2xl font-black uppercase group-hover:text-surface transition-colors">
							Real Estate
						</h3>
					</div>
					<div className="bg-surface p-10 group hover:bg-secondary transition-all duration-500 flex flex-col justify-between aspect-square">
						<span
							className="material-symbols-outlined text-4xl text-primary group-hover:text-tertiary-fixed transition-colors"
							data-icon="shield_with_heart"
						>
							shield_with_heart
						</span>
						<h3 className="font-industrial text-2xl font-black uppercase group-hover:text-surface transition-colors">
							Insurance
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Industries;
