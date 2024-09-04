"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";
import { useState } from "react";
import Image from "next/image";
import Hamburger from "@/icons/hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function handleShow() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="w-full bg-white md:bg-transparent h-[80px] flex items-center justify-center">
      <Container className="hidden md:flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/assets/varscon-logo.svg"}
            alt="varscon_logo"
            width={135}
            height={70}
          />
        </Link>

        <nav className="flex items-center gap-[18px] rounded-[66px] bg-[#D9D9D9]/80 py-[6px] px-2">
          <Link
            href={"/products/motherbot"}
            className={`font-publicSans text-[#1E1E1E]/80 text-[20px] p-2 rounded-[32px] ${
              pathname.includes("/products") ? "bg-white" : "bg-transparent"
            }`}
          >
            Products
          </Link>

          <Link
            href={"/resources"}
            className={`font-publicSans text-[#1E1E1E]/80 text-[20px] p-2 rounded-[32px] ${
              pathname === "/resources" ? "bg-white" : "bg-transparent"
            }`}
          >
            Resources
          </Link>

          <Link
            href={"/careers"}
            className={`font-publicSans text-[#1E1E1E]/80 text-[20px] p-2 rounded-[32px] ${
              pathname === "/careers" ? "bg-white" : "bg-transparent"
            }`}
          >
            Careers
          </Link>

          <Link
            href={"/about-us"}
            className={`font-publicSans text-[#1E1E1E]/80 text-[20px] p-2 rounded-[32px] ${
              pathname === "/about-us" ? "bg-white" : "bg-transparent"
            }`}
          >
            About Us
          </Link>
        </nav>

        <div className="w-[135px]"></div>
      </Container>

      <Container className="flex md:hidden justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/assets/varscon-logo.svg"}
            alt="varscon_logo"
            width={115}
            height={50}
          />
        </Link>

        <button
          className="outline-none border-none relative"
          onClick={handleShow}
        >
          <div
            className={`absolute right-2 text-[#292929] ${
              isOpen ? "top-0" : "-top-2"
            }`}
            style={{
              transform: `rotateZ(${isOpen ? "-225" : "0"}deg)`,
              transition: "all ease 500ms",
            }}
          >
            <Hamburger />
          </div>

          <div
            className={`absolute right-2 top-0 text-[#292929] ${
              isOpen ? "opacity-0" : "opacity-100"
            } transition-all ease-in-out`}
          >
            <Hamburger />
          </div>
          <div
            className={`absolute right-2 text-[#292929] ${
              isOpen ? "top-0" : "top-2"
            }`}
            style={{
              transform: `rotateZ(${isOpen ? "225" : "0"}deg)`,
              transition: "all ease 500ms",
            }}
          >
            <Hamburger />
          </div>
        </button>

        <nav
          className="absolute overflow-hidden left-0 top-[80px] w-full flex flex-col items-left gap-[18px] px-6 bg-[#D9D9D9]"
          style={{
            paddingBlock: isOpen ? "24px" : "0px",
            height: isOpen ? "280px" : "0px",
            transition: "height 200ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
          }}
        >
          <Link
            href={"/products/motherbot"}
            className={`w-fit font-publicSans text-[#1E1E1E]/80 text-[20px] p-2 rounded-[32px] ${
              pathname.includes("/products") ? "bg-white" : "bg-transparent"
            }`}
          >
            Products
          </Link>

          <Link
            href={"/resources"}
            className={`w-fit font-publicSans text-[#1E1E1E]/80 text-[20px] p-2 rounded-[32px] ${
              pathname === "/resources" ? "bg-white" : "bg-transparent"
            }`}
          >
            Resources
          </Link>

          <Link
            href={"/careers"}
            className={`w-fit font-publicSans text-[#1E1E1E]/80 text-[20px] p-2 rounded-[32px] ${
              pathname === "/careers" ? "bg-white" : "bg-transparent"
            }`}
          >
            Careers
          </Link>

          <Link
            href={"/about-us"}
            className={`w-fit font-publicSans text-[#1E1E1E]/80 text-[20px] p-2 rounded-[32px] ${
              pathname === "/about-us" ? "bg-white" : "bg-transparent"
            }`}
          >
            About Us
          </Link>
        </nav>
      </Container>
    </section>
  );
}
