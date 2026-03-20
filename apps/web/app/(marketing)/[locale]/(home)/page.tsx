import { Features } from "@marketing/home/components/Features";
import { Hero } from "@marketing/home/components/Hero";
import Industries from "@marketing/home/components/Industries";
import { Newsletter } from "@marketing/home/components/Newsletter";
import Process from "@marketing/home/components/Process";
import Team from "@marketing/home/components/Team";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<Hero />
			<Industries />
			<Features />
			<Process />
			<Team />
			<Newsletter />
		</>
	);
}
