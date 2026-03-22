"use client";
import { AnimatedTestimonials } from "@components/marketing/shared/animated-testimonials";
import { motion } from "framer-motion";

function AnimatedTeam() {
	const team = [
		{
			quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
			name: "Sai Yalla",
			designation: "Co-Founder & CEO",
			src: "/images/sai.jpeg",
		},
		{
			quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
			name: "Sandip Patel",
			designation: "Co-Founder & CPO",
			src: "/images/sandip.jpeg",
		},
		{
			quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
			name: "Shipra Goyal",
			designation: "Operations Director at CloudScale",
			src: "/images/shipra.jpeg",
		},
		{
			quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
			name: "Sahil",
			designation: "Co-Founder & CFO",
			src: "/images/sahil.jpg",
		},
	];
	return (
		<section
			id="team"
			className="flex flex-col justify-center py-10 overflow-hidden bg-foreground"
		>
			<div className="m-auto bg-secondary-foreground rounded-2xl p-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex w-full justify-center text-3xl md:text-5xl font-bold tracking-tight mb-10"
				>
					Meet the Team
				</motion.h2>
				<AnimatedTestimonials testimonials={team} autoplay />
			</div>
		</section>
	);
}

export default AnimatedTeam;
