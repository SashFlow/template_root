import { FadeUp, StaggerContainer, StaggerItem } from "../shared/Motion";

const Industries = () => {
	return (
		<section
			className="bg-secondary-foreground/80 py-24 px-8 overflow-hidden"
			id="industries"
		>
			<div className="max-w-7xl mx-auto">
				<FadeUp className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16">
					<h2 className="editorial-headline text-5xl text-foreground uppercase">
						Industries We Enable
					</h2>
					<p className="font-approachable text-on-surface-variant max-w-md">
						We build AI systems that automate workflows and unlock
						new capabilities for entire industries.
					</p>
				</FadeUp>
				<StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-outline-variant/20">
					<StaggerItem className="bg-surface p-10 group hover:bg-accent transition-all duration-500 flex flex-col justify-between aspect-square items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-primary group-hover:text-tertiary-fixed transition-colors">
							<path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/>
							<circle cx="12" cy="12" r="2"/>
						</svg>
						<h3 className="font-black font-industrial text-2xl uppercase group-hover:text-primary-foreground transition-colors">
							HVAC
						</h3>
					</StaggerItem>
					<StaggerItem className="bg-surface p-10 group hover:bg-accent transition-all duration-500 flex flex-col justify-between aspect-square items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-primary group-hover:text-tertiary-fixed transition-colors">
							<path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/>
							<path d="m16 16 6-6"/>
							<path d="m8 8 6-6"/>
							<path d="m9 7 8 8"/>
							<path d="m21 11-8-8"/>
						</svg>
						<h3 className="font-black font-industrial text-2xl uppercase group-hover:text-primary-foreground transition-colors">
							Legal
						</h3>
					</StaggerItem>
					<StaggerItem className="bg-surface p-10 group hover:bg-accent transition-all duration-500 flex flex-col justify-between aspect-square items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-primary group-hover:text-tertiary-fixed transition-colors">
							<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
							<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
							<path d="M9 14h6"/>
							<path d="M12 11v6"/>
						</svg>
						<h3 className="font-black font-industrial text-2xl uppercase group-hover:text-primary-foreground transition-colors">
							Healthcare
						</h3>
					</StaggerItem>
					<StaggerItem className="bg-surface p-10 group hover:bg-accent transition-all duration-500 flex flex-col justify-between aspect-square items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-primary group-hover:text-tertiary-fixed transition-colors">
							<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
							<polyline points="9 22 9 12 15 12 15 22"/>
						</svg>
						<h3 className="font-black font-industrial text-2xl uppercase group-hover:text-primary-foreground transition-colors">
							Real Estate
						</h3>
					</StaggerItem>
					<StaggerItem className="bg-surface p-10 group hover:bg-accent transition-all duration-500 flex flex-col justify-between aspect-square items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-primary group-hover:text-tertiary-fixed transition-colors">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
							<path d="M12 16s-3.5-2.5-3.5-4.5A2.5 2.5 0 0 1 11 9c.4 0 .8.1 1 .3.2-.2.6-.3 1-.3a2.5 2.5 0 0 1 2.5 2.5c0 2-3.5 4.5-3.5 4.5z" fill="currentColor"/>
						</svg>
						<h3 className="font-black font-industrial text-2xl uppercase group-hover:text-primary-foreground transition-colors">
							Insurance
						</h3>
					</StaggerItem>
				</StaggerContainer>
			</div>
		</section>
	);
};

export default Industries;
