"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });
import Research from '@assets/lottie/Research.json';
import Deploy from '@assets/lottie/Deployment.json';
import Develop from '@assets/lottie/Develop.json';
import Design from '@assets/lottie/Design.json';
import { FadeUp } from "../shared/Motion";

const Process = () => {
	const [activeStep, setActiveStep] = useState(1);
	const [animatingStep, setAnimatingStep] = useState(1);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimatingStep(activeStep);
		}, 50);
		return () => clearTimeout(timer);
	}, [activeStep]);

	return (
		<section className="bg-accent py-32 px-8 text-accent-foreground overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<FadeUp className="mb-20">
					<h2 className="editorial-headline text-5xl md:text-6xl mb-6 uppercase">
						From Concept to Product
					</h2>
					<p className="font-approachable text-primary-foreground/80 uppercase tracking-widest text-xs font-bold">
						Fast execution without compromising product quality.
					</p>
				</FadeUp>
				<FadeUp className="flex flex-col gap-4">
					<div className="lg:col-span-7 bg-background backdrop-blur-sm relative overflow-hidden flex items-center justify-center p-12 visual-container rounded-[16px]">
						<div
							className={`visual-content flex-col items-center gap-8 w-full max-h-[500px] justify-center ${activeStep === 1 ? "" : "hidden"} ${animatingStep === 1 ? "active" : ""}`}
							id="visual-1"
						>
							<Player
								src={Research}
								loop
								autoplay
								style={{ height: '500px', width: '500px' }} 
							/>	
						</div>
						<div
							className={`visual-content flex-col items-center gap-8 w-full max-h-[500px] justify-center ${activeStep === 2 ? "" : "hidden"} ${animatingStep === 2 ? "active" : ""}`}
							id="visual-2"
						>
							<Player
								src={Design}
								loop
								autoplay
								style={{ height: '500px', width: '500px' }} 
							/>
						</div>
						<div
							className={`visual-content flex-col items-center gap-8 w-full max-h-[500px] justify-center ${activeStep === 3 ? "" : "hidden"} ${animatingStep === 3 ? "active" : ""}`}
							id="visual-3"
						>
							<Player
								src={Develop}
								loop
								autoplay
								style={{ height: '500px', width: '500px' }} 
							/>
						</div>
						<div
							className={`visual-content flex-col items-center gap-8 w-full max-h-[500px] justify-center ${activeStep === 4 ? "" : "hidden"} ${animatingStep === 4 ? "active" : ""}`}
							id="visual-4"
						>
							<Player
								src={Deploy}
								loop
								autoplay
								style={{ height: '500px', width: '500px' }} 
							/>
						</div>
					</div>
					<div
						className="grid grid-cols-4 gap-4"
						role="tablist"
						aria-label="Process steps"
					>
						<button
							type="button"
							role="tab"
							aria-selected={activeStep === 1}
							className={`step-trigger bg-primary-foreground/20 group text-left cursor-pointer p-8 transition-all duration-300 border-l-2 border-border hover:border-primary ${activeStep === 1 ? "active" : ""}`}
							onMouseEnter={() => setActiveStep(1)}
							onClick={() => setActiveStep(1)}
						>
							<div className={`step-number font-industrial text-4xl font-black mb-4 transition-colors ${activeStep === 1 ? "text-tertiary-fixed" : "text-foreground/40"}`}>
								01
							</div>
							<h3 className="font-industrial text-2xl font-black uppercase mb-4 text-primary-foreground">
								Concept
							</h3>
							<p className="font-approachable text-primary-foreground/60 text-sm">
								Strategy and scope definition for the
								vertical integration.
							</p>
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={activeStep === 2}
							className={`step-trigger bg-primary-foreground/20 group text-left cursor-pointer p-8 transition-all duration-300 border-l-2 border-border hover:border-primary ${activeStep === 2 ? "active" : ""}`}
							onMouseEnter={() => setActiveStep(2)}
							onClick={() => setActiveStep(2)}
						>
							<div className={`step-number font-industrial text-4xl font-black mb-4 transition-colors ${activeStep === 2 ? "text-tertiary-fixed" : "text-foreground/40"}`}>
								02
							</div>
							<h3 className="font-industrial text-2xl font-black uppercase mb-4 text-primary-foreground">
								Design
							</h3>
							<p className="font-approachable text-primary-foreground/60 text-sm">
								UX architecture and AI model selection
								for specific workflows.
							</p>
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={activeStep === 3}
							className={`step-trigger group bg-primary-foreground/20 text-left cursor-pointer p-8 transition-all duration-300 border-l-2 border-border hover:border-primary ${activeStep === 3 ? "active" : ""}`}
							onMouseEnter={() => setActiveStep(3)}
							onClick={() => setActiveStep(3)}
						>
							<div className={`step-number font-industrial text-4xl font-black mb-4 transition-colors ${activeStep === 3 ? "text-tertiary-fixed" : "text-foreground/40"}`}>
								03
							</div>
							<h3 className="font-industrial text-2xl font-black uppercase mb-4 text-primary-foreground">
								Development
							</h3>
							<p className="font-approachable text-primary-foreground/60 text-sm">
								Rapid engineering and integration of the
								AI backbone.
							</p>
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={activeStep === 4}
							className={`step-trigger group bg-primary-foreground/20 text-left cursor-pointer p-8 transition-all duration-300 border-l-2 border-border hover:border-primary ${activeStep === 4 ? "text-tertiary-fixed" : ""}`}
							onMouseEnter={() => setActiveStep(4)}
							onClick={() => setActiveStep(4)}
						>
							<div className={`step-number font-industrial text-4xl font-black mb-4 transition-colors ${activeStep === 4 ? "text-tertiary-fixed" : "text-foreground/40"}`}>
								04
							</div>
							<h3 className="font-industrial text-2xl font-black uppercase mb-4 text-primary-foreground">
								Deployment
							</h3>
							<p className="font-approachable text-primary-foreground/60 text-sm">
								Launch and industrial scaling across all
								verticals.
							</p>
						</button>
					</div>
				</FadeUp>
			</div>
		</section>
	);
};

export default Process;
