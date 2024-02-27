import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlexiConvert - Free Unlimited File Converter',
  description: `Unlock boundless creativity with FlexiConvert – the premier online solution for limitless and complimentary multimedia transformation. Seamlessly convert images, audio, and videos with unparalleled ease and flexibility, without any constraints. Empower your content creation journey today with FlexiConvert, and elevate your projects like never before.

  FlexiConvert offers a comprehensive suite of conversion tools, enabling users to effortlessly modify file formats and enhance their digital assets. Whether you're a professional designer, a budding content creator, or simply looking to streamline your media library, FlexiConvert provides the versatility and reliability you need to achieve your vision`,
  creator: 'Pranshu Basak',
  keywords:
    'image converter, video converter, audio converter, unlimited image converter, unlimited video converter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}