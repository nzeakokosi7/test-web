"use client";

import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import BackArrow from "@/icons/back-arrow";

import { useRouter } from "next/navigation";

const MotherbotSaaSProducts = () => {
  const router = useRouter();
  return (
    <section className="w-full bg-white pb-[10px]">
      <section className="w-full flex flex-col items-center justify-center bg-[#F5F5F5] py-[45px] rounded-b-[80px] border-b-[1px] border-b-[#94A3B8]">
        <Container className="flex flex-col gap-[42px]">
          <button
            onClick={() => router.back()}
            className="group w-fit flex gap-3 items-center px-[10px] py-1 bg-white rounded-[8px] border-[0.4px] border-[#D9D9D9]"
          >
            <div className="text-[#292D32] group-hover:-translate-x-2 transition-all">
              <BackArrow />
            </div>

            <p className="font-inter text-[20px] text-[#1E1E1E]/50 leading-[26.862px]">
              Back
            </p>
          </button>
          <div className="w-full relative mt-[40px]">
            <h1 className="font-publicSans font-medium text-[64px] text-[#1E1E1E] absolute -bottom-6 z-50">
              SAAS Products
            </h1>
            <div className="w-full max-w-[525px] h-[17px] bg-[#00CA72] z-10"></div>
          </div>

          <div className="flex flex-col gap-10">
            <p className="font-inter text-[20px] text-[#1E1E1E]/50 leading-[26.862px]">
              More products
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="font-publicSans font-medium text-[40px] text-[#1E1E1E]">
                R & D
              </h2>
              <p className="w-full max-w-[623px] font-inter text-[24px] text-[#1E1E1E]/55 leading-[32.234px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <NavigateButton
                url="/products/motherbot/randd"
                text="View products"
              />
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default MotherbotSaaSProducts;
