
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { GrMenu } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FiHome } from 'react-icons/fi';
import { MdOutlineInfo } from 'react-icons/md';
import { PiProjectorScreenChartBold } from 'react-icons/pi';

export default function Navbar({}): any {
  return (
    <nav className="w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-5 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo"
          className="cursor-pointer w-40"
          src="/images/logo.svg"
          height={170}
          width={100}
        />
      </Link>
      <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy
          </Button>
        </Link>
      </div>
      <Link href="https://pranshubasak.co/" target='_blank'>
        <Button
          variant="default"
          className="rounded-full w-fit bg-[#6581f9] gap-2 items-center hidden md:flex"
          size="lg"
        >
          <span>Portfolio</span>
          <span className="text-xl">
            <CgProfile />
          </span>
        </Button>
      </Link>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <span className="text-2xl">
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link href="/">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    <span className='px-2'>
                        <FiHome />
                    </span>
                    Home
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    <span className='px-2'>
                        <MdOutlineInfo />
                    </span>
                    About
                  </Button>
                </Link>
                <Link href="/privacy-policy">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    <span className='px-2'>
                        <PiProjectorScreenChartBold />
                    </span>
                    Privacy
                  </Button>
                </Link>
                <Link href="https://pranshubasak.co/" target='_blank'>
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    <span className='px-2'>
                        <CgProfile />
                    </span>
                    Portfolio
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}