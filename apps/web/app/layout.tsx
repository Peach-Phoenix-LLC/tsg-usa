import type { Metadata } from 'next';
import './globals.css';
import { MegaMenu } from '@/components/MegaMenu';
import { ThemeToggle } from '@/components/ThemeToggle';
import { CurrencyToggle } from '@/components/CurrencyToggle';
import { AgenticAssistant } from '@/components/AgenticAssistant';
import { SlideCart } from '@/components/SlideCart';
import { ProactiveCROTrigger } from '@/components/agents/ProactiveCROTrigger';

export const metadata: Metadata = {
  title: 'tsgabrielle',
  description: 'Headless MACH boutique commerce experience'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="top-shell">
          <div className="brand-block">tsgabrielle</div>
          <div className="header-actions">
            <CurrencyToggle />
            <ThemeToggle />
          </div>
          <MegaMenu />
        </header>
        <main>{children}</main>
        <SlideCart />
        <ProactiveCROTrigger />
        <AgenticAssistant />
      </body>
    </html>
  );
}
