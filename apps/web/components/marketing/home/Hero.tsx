import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "../shared/Motion";

export function Hero() {
	return (
		<section id="about" className="px-8 max-w-7xl mx-auto mb-32 lg:mb-48 relative">
			<StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
				<StaggerItem className="lg:col-span-8">
					<h1 className="editorial-headline uppercase text-6xl md:text-8xl lg:text-9xl mb-8 text-on-surface">
						AI Infrastructure
						<br />
						for Traditional
						<br />
						<span className="text-primary">Industries</span>
					</h1>
				</StaggerItem>
				<StaggerItem className="lg:col-span-4 pb-4">
					<p className="font-approachable text-lg leading-relaxed text-on-surface-variant mb-8 border-l-4 border-accent pl-6">
						SashFlow builds AI-powered products for industries like
						HVAC, Legal, Healthcare, Real Estate, and Insurance —
						from concept to application-ready in 4 weeks.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link
							href="/contact"
							className="bg-primary text-primary-foreground px-8 py-4 font-approachable font-bold uppercase text-sm tracking-widest hover:brightness-110 transition-all inline-block text-center"
						>
							Get in Touch
						</Link>
						<Link
							href="#features"
							className="bg-surface-container-highest text-on-surface px-8 py-4 font-approachable font-bold uppercase text-sm tracking-widest hover:bg-surface-variant transition-all inline-block text-center"
						>
							See What We Build
						</Link>
					</div>
					<p className="mt-8 font-approachable text-xs font-semibold uppercase tracking-widest opacity-60">
						Built by a team with 25+ years of combined experience.
					</p>
				</StaggerItem>
			</StaggerContainer>
			<div className="absolute -z-10 top-0 right-0 w-1/3 h-full bg-linear-to-br from-primary/5 to-transparent opacity-50 blur-3xl" />
		</section>
	);
}
