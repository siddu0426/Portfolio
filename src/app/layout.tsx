import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import CursorSpotlight from '@/components/CursorSpotlight';
import { PERSONAL_INFO } from '@/data/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.heroSubtext,
  keywords: [
    'Siddhartha Mylavarapu',
    'Software Developer',
    'Creative Coder',
    'Full Stack Developer',
    'React Developer',
    'Next.js Portfolio',
    'Tailwind CSS',
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.heroSubtext,
    type: 'website',
    url: 'https://github.com/siddu0426',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.heroSubtext,
    creator: '@Siddhar63378629',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
