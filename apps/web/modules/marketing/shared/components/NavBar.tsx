"use client";

import { useSession } from "@saas/auth/hooks/use-session";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useLocalePathname } from "../../../../i18n/routing";

export function NavBar() {
	const t = useTranslations();
	const { user } = useSession();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const localePathname = useLocalePathname();
	const [isTop, setIsTop] = useState(true);

	const handleMobileMenuClose = () => {
		setMobileMenuOpen(false);
	};

	const debouncedScrollHandler = useDebounceCallback(
		() => {
			setIsTop(window.scrollY <= 10);
		},
		150,
		{
			maxWait: 150,
		},
	);

	useEffect(() => {
		window.addEventListener("scroll", debouncedScrollHandler);
		debouncedScrollHandler();
		return () => {
			window.removeEventListener("scroll", debouncedScrollHandler);
		};
	}, [debouncedScrollHandler]);

	useEffect(() => {
		handleMobileMenuClose();
	}, [localePathname]);

	const isDocsPage = localePathname.startsWith("/docs");

	const menuItems: {
		label: string;
		href: string;
	}[] = [
		// {
		// 	label: t("common.menu.team"),
		// 	href: "/#team",
		// },
		// {
		// 	label: t("common.menu.blog"),
		// 	href: "/blog",
		// },
	];

	const isMenuItemActive = (href: string) => localePathname.startsWith(href);

	return (
		<nav className="fixed top-0 w-full z-50 shadow-[0_8px_32px_rgba(27,28,24,0.04)]">
			<div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
				<div className="text-2xl font-black tracking-tighter text-foreground uppercase font-industrial">
					SashFlow
				</div>
				<div className="hidden md:flex items-center gap-10">
					<a
						className="text-primary border-b-2 border-primary pb-1 font-approachable text-sm font-bold uppercase tracking-wider"
						href="#about"
					>
						About
					</a>
					<a
						className="text-foreground opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 font-approachable text-sm uppercase tracking-wider"
						href="#industries"
					>
						Industries
					</a>
					<a
						className="text-foreground opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 font-approachable text-sm uppercase tracking-wider"
						href="#contact"
					>
						Contact
					</a>
				</div>
				<button
					type="button"
					className="bg-primary text-primary-foreground px-6 py-2.5 font-approachable font-bold uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all duration-150"
				>
					Get Started
				</button>
			</div>
		</nav>
	);
}
