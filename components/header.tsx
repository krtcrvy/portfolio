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
      className={`fixed top-0 w-full flex justify-center ${
        scrolled
          ? "shadow-sm bg-transparent backdrop-blur-xl"
          : "bg-transparent"
      } z-30 transition-all ease-in`}
    >
      <div className="flex flex-wrap justify-between items-center py-2.5 container">
        <Link href="#">
          <Image src={logo} alt="Logo" className="w-12 h-12" />
        </Link>

        <nav className="lg:block hidden">
          <ul className="flex gap-16">
            <li>
              <Link
                href="#"
                className="text-stone-400 hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-stone-400 hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-stone-400 hover:text-primary transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-stone-400 hover:text-primary transition-colors"
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
              className="md:hidden shrink-0"
            >
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="gap-6 grid font-medium text-lg">
              <Link
                href="#"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <Image src={logo} alt="Logo" className="w-12 h-12" />
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
