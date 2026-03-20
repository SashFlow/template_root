import { Features } from "@components/marketing/home/Features";
import { Hero } from "@components/marketing/home/Hero";
import Industries from "@components/marketing/home/Industries";
import { Newsletter } from "@components/marketing/home/Newsletter";
import Process from "@components/marketing/home/Process";
import Team from "@components/marketing/home/Team";
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
