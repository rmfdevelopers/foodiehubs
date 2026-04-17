import { Oswald, Sora } from 'next/font/google';
import './globals.css';

const heading = Oswald({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-heading' 
});

const body = Sora({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600', '800'],
  variable: '--font-body' 
});

export const metadata = {
  title: 'Foodiehubs | The Taste of Home',
  description: 'Premium authentic Nigerian snacks and curated foodstuffs from Command, Lagos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${heading.variable} ${body.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}