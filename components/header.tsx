"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useScroll from "@/lib/hooks/use-scroll";
import logo from "@/public/img/logo.png";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const scrolled = useScroll(50);

  return (
    <header
      className={`fixed top-0 flex w-full justify-center ${
        scrolled
          ? "bg-transparent shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      } z-30 transition-all ease-in`}
    >
      <div className="container flex flex-wrap items-center justify-between py-2.5">
        <Link href="#">
          <Image src={logo} alt="Logo" className="h-12 w-12" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex gap-16">
            <li>
              <Link
                href="#"
                className="text-stone-400 transition-colors hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-stone-400 transition-colors hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-stone-400 transition-colors hover:text-primary"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-stone-400 transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 font-medium text-lg">
              <Link
                href="#"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <Image src={logo} alt="Logo" className="h-12 w-12" />
                <span className="sr-only">Karbi</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
