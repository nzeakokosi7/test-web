"use client";

import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import BackArrow from "@/icons/back-arrow";

import { useRouter } from "next/navigation";

const MotherbotRandDProducts = () => {
  const router = useRouter();
  return (
    <section className="w-full bg-white pb-[10px]">
      <section className="w-full flex flex-col items-center justify-center bg-[#F5F5F5] pt-[30px] md:pt-[45px] pb-[80px] md:pb-[150px] rounded-b-[40px] md:rounded-b-[80px] border-b-[1px] border-b-[#94A3B8]">
        <Container className="flex flex-col gap-[33.14px] md:gap-[42px]">
          <button
            onClick={() => router.back()}
            className="group w-fit flex gap-[8.57px] md:gap-3 items-center px-[7.14px] md:px-[10px] py-[2.86px] md:py-1 bg-white rounded-[5.714px] md:rounded-[8px] border-[0.4px] border-[#D9D9D9]"
          >
            <div className="w-[17.143px] md:w-[24px] text-[#292D32] group-hover:-translate-x-2 transition-all">
              <BackArrow />
            </div>

            <p className="font-inter text-[14.286px] md:text-[20px] text-[#1E1E1E]/50 leading-[19.187px] md:leading-[26.862px]">
              Back
            </p>
          </button>

          <div className="w-full md:relative md:mt-[40px]">
            <h1 className="font-publicSans font-medium text-[48px] md:text-[64px] text-[#1E1E1E] md:absolute md:-bottom-6 z-50">
              R & D Products
            </h1>
            <div className="hidden md:block w-full max-w-[525px] h-[17px] bg-[#00CA72] z-10"></div>
          </div>

          <div className="flex flex-col gap-5 mt-[50px] md:mt-[70px]">
            <p className="font-inter text-[16px] md:text-[20px] text-[#1E1E1E]/50 leading-[21.49px] md:leading-[26.862px]">
              More products
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3 md:gap-[18px] items-center">
                <h2 className="font-publicSans font-medium text-[32px] md:text-[40px] text-[#1E1E1E]">
                  Hardware
                </h2>

                <p className="bg-[#ff7705d4] rounded-[2.727px] md:rounded-[5.243px] py-[0.45px] md:py-[0.87px] px-[3.64px] md:px-[6.99px] font-inter font-medium text-[#272727] text-[6.364px] md:text-[12.233px] leading-[14.104px] md:leading-[27.113px]">
                  Coming soon
                </p>
              </div>

              {/* <p className="w-full max-w-[623px] font-inter text-[16px] md:text-[24px] text-[#1E1E1E]/55 leading-[21.49px] md:leading-[32.234px]">
                We craft intuitive, scalable, and secure software platforms that
                adapt to the evolving needs of modern enterprises, ensuring our
                clients stay ahead in the digital landscape
              </p> */}
              {/* <NavigateButton
                url="/products/motherbot/hardware"
                text="View products"
              /> */}
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default MotherbotRandDProducts;
