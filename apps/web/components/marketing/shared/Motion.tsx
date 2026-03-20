"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

export const FadeUp = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
	({ children, className, ...props }, ref) => {
		return (
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-10%" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={className}
				{...props}
			>
				{children}
			</motion.div>
		);
	}
);

FadeUp.displayName = "FadeUp";

export const FadeIn = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
	({ children, className, ...props }, ref) => {
		return (
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: "-10%" }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className={className}
				{...props}
			>
				{children}
			</motion.div>
		);
	}
);

FadeIn.displayName = "FadeIn";

export const StaggerContainer = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
	({ children, className, ...props }, ref) => {
		return (
			<motion.div
				ref={ref}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-10%" }}
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.15,
						},
					},
				}}
				className={className}
				{...props}
			>
				{children}
			</motion.div>
		);
	}
);

StaggerContainer.displayName = "StaggerContainer";

export const StaggerItem = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
	({ children, className, ...props }, ref) => {
		return (
			<motion.div
				ref={ref}
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: { 
						opacity: 1, 
						y: 0,
						transition: { duration: 0.6, ease: "easeOut" }
					},
				}}
				className={className}
				{...props}
			>
				{children}
			</motion.div>
		);
	}
);

StaggerItem.displayName = "StaggerItem";
