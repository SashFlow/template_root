"use client";

import { AnalyticsScript } from "@analytics";
import { ProgressProvider } from "@bprogress/next/app";
import { config } from "@repo/config";
import { Toaster } from "@repo/ui/sonner";
import { ApiClientProvider } from "@shared/components/ApiClientProvider";
import { ConsentBanner } from "@shared/components/ConsentBanner";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export function ClientProviders({ children }: PropsWithChildren) {
	return (
		<ApiClientProvider>
			<ProgressProvider
				height="4px"
				color="var(--color-primary)"
				options={{ showSpinner: false }}
				shallowRouting
				delay={250}
			>
				<ThemeProvider
					attribute="class"
					disableTransitionOnChange
					enableSystem
					defaultTheme={config.ui.defaultTheme}
					themes={config.ui.enabledThemes}
				>
					<ApiClientProvider>
						{children}

						<Toaster position="top-right" />
						<ConsentBanner />
						<AnalyticsScript />
					</ApiClientProvider>
				</ThemeProvider>
			</ProgressProvider>
		</ApiClientProvider>
	);
}
