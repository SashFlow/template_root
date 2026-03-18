import heroImage from "@public/images/hero-image.png";
import heroImageDark from "@public/images/hero-image-dark.png";
import { Button } from "@repo/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LocaleLink } from "../../../../i18n/routing";

export function Hero() {
	return (
		<div className="relative max-w-full overflow-x-hidden bg-card">
			<div className="container relative z-20 pt-44 pb-12 lg:pb-16">
				<h1 className="text-balance font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tighter font-serif text-foreground">
					AI Infrastructure for Traditional Industries
				</h1>

				<p className="mt-2 text-foreground/60 text-sm sm:text-lg">
					SashFlow builds AI-powered products for industries like HVAC, Legal,
					Healthcare, Real Estate, and Insurance — from concept to
					application-ready in 4 weeks.
				</p>

				<div className="mt-4 flex items-center justify-start gap-2">
					<Button size="lg" variant="default" asChild>
						<Link href="/contact">
							Get started
							<ArrowRightIcon className="ml-2 size-4" />
						</Link>
					</Button>
				</div>

				<div className="mx-auto mt-12 lg:mt-16 xl:mt-24 lg:flex-1 rounded-4xl bg-primary/10 p-4 lg:p-6">
					<Image
						src={heroImage}
						alt="Our application"
						className="block rounded-xl dark:hidden"
						priority
					/>
					<Image
						src={heroImageDark}
						alt="Our application"
						className="hidden rounded-xl dark:block"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
