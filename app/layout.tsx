import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jasraj Sandhu - Portfolio',
	description:
		'Welcome to my portfolio! I am a passionate developer who believes in simplicity and effectiveness. I focus on creating straightforward solutions that solve real problems, with clean code and intuitive user experiences.',
	keywords: [
		'Software Developer',
		'Web Developer',
		'Game Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Problem Solving',
		'Web Development',
		'Backend Development',
		'Jasraj Sandhu',
	],
	authors: [{ name: 'Jasraj Sandhu' }],
	creator: 'Jasraj Sandhu',
	openGraph: {
		title: 'Jasraj Sandhu - Developer Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: 'https://jsandhu.dev',
		siteName: 'Jasraj Sandhu - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jasraj Sandhu - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Jasraj Sandhu - Developer',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
