"use client";

import heroImage from "@public/images/feature.svg";
import { MobileIcon } from "@radix-ui/react-icons";
import { CloudIcon, ComputerIcon, StarIcon, WandIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import type { JSXElementConstructor, ReactNode } from "react";

import { FadeUp } from "../shared/Motion";

export const featureTabs: Array<{
	id: string;
	title: string;
	icon: JSXElementConstructor<any>;
	subtitle?: string;
	description?: ReactNode;
	image?: StaticImageData;
	imageBorder?: boolean;
	stack?: {
		title: string;
		href: string;
		icon: JSXElementConstructor<any>;
	}[];
	highlights?: {
		title: string;
		description: string;
		icon: JSXElementConstructor<any>;
		demoLink?: string;
		docsLink?: string;
	}[];
}> = [
	{
		id: "feature1",
		title: "Feature 1",
		icon: StarIcon,
		subtitle: "Do more with our amazing SaaS.",
		description:
			"This is a brilliant feature. And below you can see some reasons why. This is basically just a dummy text.",
		stack: [],
		image: heroImage,
		imageBorder: false,
		highlights: [
			{
				title: "Benefit 1",
				description:
					"This is an awesome benefit. And below you can see some reasons why. This is basically just a dummy text.",
				icon: WandIcon,
			},
			{
				title: "Benefit 2",
				description:
					"This is an awesome benefit. And below you can see some reasons why. This is basically just a dummy text.",
				icon: ComputerIcon,
			},
			{
				title: "Benefit 3",
				description:
					"This is an awesome benefit. And below you can see some reasons why. This is basically just a dummy text.",
				icon: MobileIcon,
			},
		],
	},
	{
		id: "feature2",
		title: "Feature 2",
		icon: CloudIcon,
		subtitle: "Your SaaS can also do this.",
		description: "Another dummy text for another feature.",
		stack: [],
		image: heroImage,
		imageBorder: false,
		highlights: [
			{
				title: "Benefit 1",
				description:
					"This is an awesome benefit. And below you can see some reasons why. This is basically just a dummy text.",
				icon: WandIcon,
			},
			{
				title: "Benefit 2",
				description:
					"This is an awesome benefit. And below you can see some reasons why. This is basically just a dummy text.",
				icon: ComputerIcon,
			},
			{
				title: "Benefit 3",
				description:
					"This is an awesome benefit. And below you can see some reasons why. This is basically just a dummy text.",
				icon: MobileIcon,
			},
		],
	},
];

export function Features() {
	return (
		<section id="features" className="py-32 px-8">
			<div className="max-w-7xl mx-auto">
				<FadeUp className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-8 bg-card border-l-2 border-primary">
						<h4 className="font-approachable font-bold uppercase text-xs tracking-[0.2em] text-accent mb-4">
							Foundation
						</h4>
						<h3 className="font-approachable text-xl font-bold mb-3 leading-tight">
							25+ Years Experience
						</h3>
						<p className="font-approachable text-sm text-on-surface-variant opacity-80">
							Across AI, automation, and industry operations.
						</p>
					</div>
					<div className="p-8 bg-card border-l-2 border-primary">
						<h4 className="font-approachable font-bold uppercase text-xs tracking-[0.2em] text-accent mb-4">
							Context
						</h4>
						<h3 className="font-approachable text-xl font-bold mb-3 leading-tight">
							Industry Workflow Understanding
						</h3>
						<p className="font-approachable text-sm text-on-surface-variant opacity-80">
							We understand how real industries operate.
						</p>
					</div>
					<div className="p-8 bg-card border-l-2 border-primary">
						<h4 className="font-approachable font-bold uppercase text-xs tracking-[0.2em] text-accent mb-4">
							Capability
						</h4>
						<h3 className="font-approachable text-xl font-bold mb-3 leading-tight">
							AI Product Development
						</h3>
						<p className="font-approachable text-sm text-on-surface-variant opacity-80">
							From model design to production systems.
						</p>
					</div>
					<div className="p-8 bg-card border-l-2 border-primary">
						<h4 className="font-approachable font-bold uppercase text-xs tracking-[0.2em] text-accent mb-4">
							Velocity
						</h4>
						<h3 className="font-approachable text-xl font-bold mb-3 leading-tight">
							Rapid Execution
						</h3>
						<p className="font-approachable text-sm text-on-surface-variant opacity-80">
							Products built and ready within weeks.
						</p>
					</div>
				</FadeUp>
			</div>
		</section>
	);
}
