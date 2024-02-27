import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlexiConvert - Free Unlimited File Converter',
  description: `FlexiConvert offers a comprehensive suite of conversion tools, enabling users to effortlessly modify file formats and enhance their digital assets. Whether you're a professional designer, a budding content creator, or simply looking to streamline your media library, FlexiConvert provides the versatility and reliability you need to achieve your vision
  Image conversion: Convert between various image formats such as JPEG, PNG, GIF, BMP, TIFF, etc.
  Video conversion: Convert video files between different formats such as MP4, AVI, MOV, MKV, etc., and adjust parameters like resolution, frame rate, and bitrate.
  Audio conversion: Convert audio files between different formats such as MP3, WAV, AAC, FLAC, etc., and adjust parameters like bitrate and sample rate.
  Document conversion: Convert documents between different formats such as PDF, DOCX, TXT, RTF, etc., and perform tasks like merging, splitting, and compressing PDF files.
  `,
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
      <body className={inter.className}>
        <BackgroundGradientAnimation>
          <Navbar />
          <Toaster />
          <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}