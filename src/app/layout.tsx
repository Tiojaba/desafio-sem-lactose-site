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
  title: 'Minha Receita',
  description: 'Descubra o sabor sem culpa e ainda faça uma renda extra!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(poppins.className, "antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

    