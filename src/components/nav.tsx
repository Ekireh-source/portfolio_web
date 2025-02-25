"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
       <Menu setActive={setActive}>
    <Link href="/" passHref>
      <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href="/education" passHref>
            <MenuItem setActive={setActive} active={active} item="Education" />
          </Link>
          <Link href="/projects" passHref>
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </Link>
          <Link href="/skills" passHref>
            <MenuItem setActive={setActive} active={active} item="Skills" />
          </Link>
          <Link href="/contact" passHref>
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </Link>
          <Link href="/about" passHref>
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
        </Menu>
      </div>
    );
  }