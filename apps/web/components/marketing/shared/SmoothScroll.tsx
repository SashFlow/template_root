"use client";

import Lenis from "lenis";
import { type PropsWithChildren, useEffect } from "react";

export function SmoothScroll({ children }: PropsWithChildren) {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return <>{children}</>;
}
