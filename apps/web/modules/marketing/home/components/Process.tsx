"use client";

import { useEffect, useState } from "react";

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
		<section className="bg-secondary py-32 px-8 text-surface overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="mb-20">
					<h2 className="editorial-headline text-5xl md:text-6xl mb-6">
						From Concept to Product
					</h2>
					<p className="font-approachable text-surface/70 uppercase tracking-widest text-xs font-bold">
						Fast execution without compromising product quality.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
					<div
						className="lg:col-span-5 flex flex-col gap-4"
						role="tablist"
						aria-label="Process steps"
					>
						<button
							type="button"
							role="tab"
							aria-selected={activeStep === 1}
							className={`step-trigger group text-left cursor-pointer p-8 transition-all duration-300 border-l-2 border-surface/10 hover:border-tertiary-fixed ${activeStep === 1 ? "active" : ""}`}
							onMouseEnter={() => setActiveStep(1)}
							onClick={() => setActiveStep(1)}
						>
							<div className="step-number text-surface/40 font-industrial text-4xl font-black mb-4 transition-colors">
								01
							</div>
							<h3 className="font-industrial text-2xl font-black uppercase mb-4 text-surface">
								Concept
							</h3>
							<p className="font-approachable text-surface/80 text-sm">
								Week 1: Strategy and scope definition for the
								vertical integration.
							</p>
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={activeStep === 2}
							className={`step-trigger group text-left cursor-pointer p-8 transition-all duration-300 border-l-2 border-surface/10 hover:border-tertiary-fixed ${activeStep === 2 ? "active" : ""}`}
							onMouseEnter={() => setActiveStep(2)}
							onClick={() => setActiveStep(2)}
						>
							<div className="step-number text-surface/40 font-industrial text-4xl font-black mb-4 transition-colors">
								02
							</div>
							<h3 className="font-industrial text-2xl font-black uppercase mb-4 text-surface">
								Design
							</h3>
							<p className="font-approachable text-surface/80 text-sm">
								Week 2: UX architecture and AI model selection
								for specific workflows.
							</p>
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={activeStep === 3}
							className={`step-trigger group text-left cursor-pointer p-8 transition-all duration-300 border-l-2 border-surface/10 hover:border-tertiary-fixed ${activeStep === 3 ? "active" : ""}`}
							onMouseEnter={() => setActiveStep(3)}
							onClick={() => setActiveStep(3)}
						>
							<div className="step-number text-surface/40 font-industrial text-4xl font-black mb-4 transition-colors">
								03
							</div>
							<h3 className="font-industrial text-2xl font-black uppercase mb-4 text-surface">
								Development
							</h3>
							<p className="font-approachable text-surface/80 text-sm">
								Week 3: Rapid engineering and integration of the
								AI backbone.
							</p>
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={activeStep === 4}
							className={`step-trigger group text-left cursor-pointer p-8 transition-all duration-300 border-l-2 border-surface/10 hover:border-tertiary-fixed ${activeStep === 4 ? "active" : ""}`}
							onMouseEnter={() => setActiveStep(4)}
							onClick={() => setActiveStep(4)}
						>
							<div className="step-number text-surface/40 font-industrial text-4xl font-black mb-4 transition-colors">
								04
							</div>
							<h3 className="font-industrial text-2xl font-black uppercase mb-4 text-surface">
								Deployment
							</h3>
							<p className="font-approachable text-surface/80 text-sm">
								Week 4: Launch and industrial scaling across all
								verticals.
							</p>
						</button>
					</div>
					<div className="lg:col-span-7 h-[600px] bg-white/5 backdrop-blur-sm relative overflow-hidden flex items-center justify-center p-12 visual-container">
						<div
							className={`visual-content flex-col items-center gap-8 w-full h-full justify-center ${activeStep === 1 ? "" : "hidden"} ${animatingStep === 1 ? "active" : ""}`}
							id="visual-1"
						>
							{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								className="w-full max-w-md h-auto"
								fill="none"
								viewBox="0 0 400 300"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									className="animate-draw"
									height="60"
									rx="4"
									stroke="#f5e46f"
									strokeWidth="2"
									width="100"
									x="50"
									y="50"
								/>
								<rect
									className="animate-draw"
									height="60"
									rx="4"
									stroke="#f5e46f"
									strokeWidth="2"
									style={{ animationDelay: "0.5s" }}
									width="100"
									x="250"
									y="50"
								/>
								<rect
									className="animate-draw"
									height="60"
									rx="4"
									stroke="#f5e46f"
									strokeWidth="2"
									style={{ animationDelay: "1s" }}
									width="100"
									x="150"
									y="180"
								/>
								<path
									className="animate-draw"
									d="M150 80H250"
									stroke="#f5e46f"
									strokeDasharray="4 4"
									strokeWidth="1"
									style={{ animationDelay: "1.5s" }}
								/>
								<path
									className="animate-draw"
									d="M100 110V180H150"
									stroke="#f5e46f"
									strokeDasharray="4 4"
									strokeWidth="1"
									style={{ animationDelay: "2s" }}
								/>
								<path
									className="animate-draw"
									d="M300 110V180H250"
									stroke="#f5e46f"
									strokeDasharray="4 4"
									strokeWidth="1"
									style={{ animationDelay: "2.5s" }}
								/>
							</svg>
							<p className="font-industrial text-sm tracking-widest text-tertiary-fixed font-bold uppercase">
								Architecture Mapping
							</p>
						</div>
						<div
							className={`visual-content flex-col items-center gap-8 w-full h-full justify-center ${activeStep === 2 ? "" : "hidden"} ${animatingStep === 2 ? "active" : ""}`}
							id="visual-2"
						>
							<div className="w-full max-w-md aspect-video border border-surface/20 p-4 relative overflow-hidden bg-secondary-container/5">
								<div className="flex gap-2 mb-4">
									<div className="w-3 h-3 rounded-full bg-red-500/50" />
									<div className="w-3 h-3 rounded-full bg-yellow-500/50" />
									<div className="w-3 h-3 rounded-full bg-green-500/50" />
								</div>
								<div className="grid grid-cols-12 gap-4">
									<div className="col-span-4 space-y-2">
										<div className="h-2 w-full bg-surface/20 rounded" />
										<div className="h-2 w-2/3 bg-surface/20 rounded" />
										<div className="h-8 w-full bg-primary/20 border border-primary/30 rounded" />
									</div>
									<div className="col-span-8 h-32 bg-surface/5 border border-surface/20 rounded flex items-center justify-center">
										<span className="material-symbols-outlined text-4xl text-surface/20 animate-pulse">
											schema
										</span>
									</div>
								</div>
								<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-tertiary-fixed/5 to-transparent animate-float" />
							</div>
							<p className="font-industrial text-sm tracking-widest text-tertiary-fixed font-bold uppercase">
								UI/UX Node Synthesis
							</p>
						</div>
						<div
							className={`visual-content flex-col items-center gap-8 w-full h-full justify-center ${activeStep === 3 ? "" : "hidden"} ${animatingStep === 3 ? "active" : ""}`}
							id="visual-3"
						>
							<div className="font-mono text-xs text-tertiary-fixed/80 space-y-2 w-full max-w-sm">
								<div className="overflow-hidden whitespace-nowrap border-r-2 border-tertiary-fixed animate-[typing_3s_steps(40)_infinite]">
									<span className="text-secondary-fixed">
										const
									</span>{" "}
									engine ={" "}
									<span className="text-surface">new</span>{" "}
									SashFlowAI(
									{
										<div>
											<div className="pl-4">
												vertical:{" "}
												<span className="text-primary-fixed-dim">
													'HVAC'
												</span>
												,
											</div>
											<div className="pl-4">
												latency:{" "}
												<span className="text-primary-fixed-dim">
													'&lt;200ms'
												</span>
												,
											</div>
											<div className="pl-4">
												precision:{" "}
												<span className="text-primary-fixed-dim">
													0.999
												</span>
											</div>
										</div>
									}
									);
								</div>
								<div className="mt-4 text-surface/40">
									Compiling industry logic...
								</div>
								<div className="w-full bg-surface/10 h-1 mt-2 overflow-hidden">
									<div className="bg-tertiary-fixed h-full w-1/2 animate-[slide_2s_infinite]" />
								</div>
							</div>
							<p className="font-industrial text-sm tracking-widest text-tertiary-fixed font-bold uppercase mt-12">
								Core Engine Integration
							</p>
						</div>
						<div
							className={`visual-content flex-col items-center gap-8 w-full h-full justify-center ${activeStep === 4 ? "" : "hidden"} ${animatingStep === 4 ? "active" : ""}`}
							id="visual-4"
						>
							<div className="relative w-64 h-64 flex items-center justify-center">
								<div className="absolute inset-0 border-2 border-dashed border-tertiary-fixed/20 rounded-full animate-[spin_10s_linear_infinite]" />
								<div className="absolute inset-4 border border-surface/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
								<div className="bg-primary p-6 shadow-2xl shadow-primary/40 relative z-10 animate-float">
									<span
										className="material-symbols-outlined text-5xl text-surface"
										data-icon="rocket_launch"
									>
										rocket_launch
									</span>
								</div>
								<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 bg-surface px-3 py-1 text-[10px] font-bold text-secondary uppercase tracking-widest rounded-full">
									Active
								</div>
							</div>
							<p className="font-industrial text-sm tracking-widest text-tertiary-fixed font-bold uppercase">
								Production Live Status
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
