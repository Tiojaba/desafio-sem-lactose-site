import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900']
});

export const metadata: Metadata = {
  title: 'Desafio 7 Dias Sem Lactose',
  description: 'Descubra como é fácil viver sem lactose, comendo com prazer!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(poppins.className, "antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
