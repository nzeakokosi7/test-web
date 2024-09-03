"use client";

import Container from "@/components/layout/container";
import Image from "next/image";
import Link from "next/link";

const MotherbotHero = () => {
  return (
    <section className="w-full bg-[#F5F5F5] pb-[50px]">
      <section className="w-full flex flex-col items-center justify-center bg-[url(/assets/products/motherbot-hero-bg.png)] bg-cover bg-no-repeat rounded-b-[60px] pt-[60px] ">
        <Container className="flex flex-col gap-[53px] pt-[109px]">
          <div className="flex flex-col gap-3 w-full max-w-[886px]">
            <h2 className="text-[#1E1E1E] font-publicSans text-[64px] font-semibold">
              Birthing the Next Generation of Technology Solutions
            </h2>
            <p className="font-inter text-[24px] leading-[32.234px] text-black/55">
              Motherbot is the creative powerhouse behind groundbreaking
              products that redefine industries. Our multidisciplinary team of
              visionaries, engineers, and designers work harmoniously to
              transform bold ideas into tangible realities.
            </p>
          </div>

          <div className="w-full">
            <Image
              src={"/assets/products/motherbot-hero.png"}
              alt="motherbot"
              width={1300}
              height={408}
              className="w-full"
            />
          </div>
        </Container>
      </section>
    </section>
  );
};

export default MotherbotHero;
