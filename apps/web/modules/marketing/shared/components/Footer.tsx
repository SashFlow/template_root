export function Footer() {
	return (
		<footer className="bg-secondary w-full py-16 px-8 text-surface">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-7xl mx-auto">
				<div>
					<div className="text-3xl font-black text-surface font-industrial uppercase tracking-tighter mb-2">
						SashFlow
					</div>
					<p className="font-approachable text-xs tracking-wide text-surface/60 uppercase">
						AI infrastructure for industries.
					</p>
				</div>
				<div className="flex gap-12">
					<a
						className="font-approachable text-xs tracking-[+0.04em] uppercase text-tertiary-fixed font-bold"
						href="#about"
					>
						About
					</a>
					<a
						className="font-approachable text-xs tracking-[+0.04em] uppercase text-surface/70 hover:text-surface transition-colors"
						href="#industries"
					>
						Industries
					</a>
					<a
						className="font-approachable text-xs tracking-[+0.04em] uppercase text-surface/70 hover:text-surface transition-colors"
						href="#contact"
					>
						Contact
					</a>
				</div>
			</div>
			<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4">
				<p className="font-approachable text-[10px] tracking-widest uppercase text-surface/40">
					© 2024 SashFlow AI. Engineering the Industrial Renaissance.
				</p>
				<div className="flex gap-6 text-[10px] tracking-widest uppercase text-surface/40">
					<span>Privacy</span>
					<span>Security</span>
					<span>Documentation</span>
					<span>Infrastructure Status</span>
				</div>
			</div>
		</footer>
	);
}
