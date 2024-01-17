import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
	title: 'Simple Sanity Blog',
	description: 'Generated to practice Next.js and Sanity.io integration',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className="min-h-screen">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{' '}
					<Navbar />
					<main className="max-w-6xl mx-auto p-4">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
