"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
} from "@openstarter/ui";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuLogOut, LuMenu, LuRocket } from "react-icons/lu";

const navItems = [
  {
    name: "Features",
    href: "/#features",
  },
  {
    name: "Documentation",
    href: "/documentation",
  },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const handleLogout = async () => await signOut();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:p-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1">
            <LuRocket className="w-6 h-6" />
            <span className="text-xl font-semibold">Open Starter</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 inline-flex items-center justify-center rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <LuMenu className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {status !== "loading" && !session?.user && (
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Login
            </Link>
          )}
          {status !== "loading" && session?.user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="rounded-full bg-gray-300 w-10 h-10 hover:bg-gray-300/80"
                >
                  {session.user.image ? (
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={session.user.image}
                      alt={session.user.name || ""}
                    />
                  ) : (
                    <span>{session.user.name?.charAt(0)}</span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600"
                >
                  <LuLogOut className="w-4 h-4 mr-2" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1">
              <LuRocket className="w-6 h-6" />
              <span className="text-xl font-semibold">Open Starter</span>
            </Link>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {status !== "loading" && !session?.user && (
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </Link>
                )}{" "}
                {status !== "loading" && session?.user && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="rounded-full bg-gray-300 w-10 h-10 hover:bg-gray-300/80"
                      >
                        {session.user.image ? (
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            src={session.user.image}
                            alt={session.user.name || ""}
                          />
                        ) : (
                          <span>{session.user.name?.charAt(0)}</span>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="text-red-600"
                      >
                        <LuLogOut className="w-4 h-4 mr-2" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navigation;
