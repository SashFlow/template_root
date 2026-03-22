"use client";

import { Card, Carousel } from "@components/marketing/shared/cards-carousel";
import Image from "next/image";
import React from "react";

function Industries() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full h-full py-20 bg-foreground">
			<h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-secondary-foreground">
				Get to know our Domain Experties.
			</h2>
			<Carousel items={cards} />
		</div>
	);
}

const IndustryContent = ({
	features,
}: {
	features: { highlight: string; description: string; image: string }[];
}) => {
	return (
		<>
			{features.map((feature, index) => {
				return (
					<div
						key={"industry-feature-" + index}
						className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
					>
						<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
							<span className="font-bold text-neutral-700 dark:text-neutral-200">
								{feature.highlight}
							</span>{" "}
							{feature.description}
						</p>
						<div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mt-8">
							<Image
								src={feature.image}
								alt={feature.highlight}
								fill
								className="object-cover"
							/>
						</div>
					</div>
				);
			})}
		</>
	);
};

const data = [
	{
		category: "HVAC",
		title: "Optimize scheduling and dispatching with intelligent systems.",
		src: "/images/HVAC.jpg",
		content: (
			<IndustryContent
				features={[
					{
						highlight: "AI-powered route optimization.",
						description:
							"Reduce travel time and fuel costs by dynamically routing technicians based on traffic, priority, and parts availability.",
						image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Predictive maintenance.",
						description:
							"Analyze sensor data to predict system failures before they occur, scheduling proactive service calls and minimizing downtime.",
						image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Automated inventory tracking.",
						description:
							"Generate invoices instantly upon job completion and keep real-time tabs on truck stock and warehouse inventory.",
						image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663b0?q=80&w=800&auto=format&fit=crop",
					},
				]}
			/>
		),
	},
	{
		category: "Legal",
		title: "Streamline contract review and legal research with AI.",
		src: "/images/Legal.jpg",
		content: (
			<IndustryContent
				features={[
					{
						highlight: "Intelligent contract analysis.",
						description:
							"Automatically extract key terms, obligations, and anomalies from lengthy contracts in seconds to speed up the review process.",
						image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Case outcome prediction.",
						description:
							"Leverage historical case data to evaluate risks, predict potential outcomes, and advise clients with data-backed confidence.",
						image: "https://images.unsplash.com/photo-1505664115456-62021fb4a621?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Automated legal drafting.",
						description:
							"Generate preliminary drafts for standard legal documents, motions, and briefs, freeing up billable hours for strategic thinking.",
						image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
					},
				]}
			/>
		),
	},
	{
		category: "Healthcare",
		title: "Improve patient outcomes with predictive analytics and automation.",
		src: "/images/Healthcare.jpg",
		content: (
			<IndustryContent
				features={[
					{
						highlight: "Predictive patient analytics.",
						description:
							"Identify at-risk patients early by analyzing historical medical records and real-time vitals, enabling proactive interventions.",
						image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Streamlined administrative workflows.",
						description:
							"Automate appointment scheduling, medical billing, and insurance verifications to reduce staff burnout and errors.",
						image: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Personalized treatment plans.",
						description:
							"Assist physicians by surfacing relevant medical research and suggesting tailored treatment options based on patient history.",
						image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop",
					},
				]}
			/>
		),
	},

	{
		category: "Real Estate",
		title: "Accelerate property management and closing workflows.",
		src: "/images/RealEstate.jpg",
		content: (
			<IndustryContent
				features={[
					{
						highlight: "Automated property valuations.",
						description:
							"Instantly generate accurate property estimates using real-time market trends, neighborhood comps, and historical data.",
						image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Smart document processing.",
						description:
							"Extract data from lease agreements, mortgage documents, and inspection reports automatically to accelerate closing times.",
						image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Virtual staging and touring.",
						description:
							"Enhance property listings with AI-generated virtual staging, allowing potential buyers to visualize spaces effortlessly.",
						image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
					},
				]}
			/>
		),
	},
	{
		category: "Insurance",
		title: "Automate claims processing and risk assessment.",
		src: "/images/Insurance.jpg",
		content: (
			<IndustryContent
				features={[
					{
						highlight: "Accelerated claims processing.",
						description:
							"Use computer vision to analyze damage photos and instantly estimate repair costs, speeding up payouts and customer satisfaction.",
						image: "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Fraud detection algorithms.",
						description:
							"Detect suspicious patterns and anomalies in claims data in real time, preventing fraudulent payouts before they happen.",
						image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
					},
					{
						highlight: "Dynamic risk assessment.",
						description:
							"Tailor insurance policies and premiums to individual profiles by analyzing vast amounts of behavioral and historical data.",
						image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
					},
				]}
			/>
		),
	},
];

export default Industries;
