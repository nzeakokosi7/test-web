import Container from "@/components/layout/container";
import ArrowForwardIcon from "@/icons/arrow-forward";
import Image from "next/image";
import Link from "next/link";

const ResourcesHero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-[120px] pb-[70px] md:pb-[120px]">
      <Container className="flex flex-col gap-[30px] md:gap-[60px]">
        <h1 className="font-publicSans font-semibold text-[40px] md:text-[64px] text-[#1E1E1E] leading-[68px]">
          Resources
        </h1>

        <div className="w-full flex flex-col gap-5 md:flex-row-reverse justify-between">
          <Image
            src="/assets/resources/resources-1.png"
            alt="resources-1"
            width={653}
            height={388}
            className="rounded-[24px] md:w-[50%]"
          />

          <div className="w-full md:w-[50%] flex flex-col gap-[22.05px] md:gap-8">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="w-fit mb-[4px] px-[6.89px] md:px-2.5 py-[2.76px] md:py-1 rounded-[13.783px] md:rounded-[20px] bg-[#ff77050f] font-inter text-[16.54px] md:text-[24px] text-[#FF7705] leading[22.215px] md:leading-[32.234px]">
                Guides
              </p>

              <p className="font-publicSans font-medium text-[24px] md:text-[36px] text-[#1E1E1E]">
                Text
              </p>

              <p className="w-full max-w[] font-inter text-[16.54px] md:text-[24px] text-[#1E1E1E]/55 leading-[22.215px] md:leading-[32.234px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex gap-[13.78px] md:gap-5 items-center">
              <div className="flex gap-2 md:gap-3 items-center">
                <Image
                  src="/assets/resources/resources-p.png"
                  alt="resources-p"
                  width={42}
                  height={42}
                />
                <p className="font-inter text-[16.543px] md:text-[24px] text-[#1E1E1E]/55 leading-[22.215px] md:leading-[32.234px]">
                  Varscon
                </p>
              </div>

              <div className="flex gap-[12.4px] md:gap-[18px] items-center">
                <div className="w-[8px] md:w-[11px] h-[8px] md:h-[11px] rounded-full bg-[#D9D9D9]"></div>

                <p className="font-inter text-[13.783px] md:text-[20px] text-[#1E1E1E]/55 leading-[18.512px] md:leading-[26.862px]">
                  July 8, 2024
                </p>
              </div>

              <div className="flex gap-[12.4px] md:gap-[18px] items-center">
                <div className="w-[8px] md:w-[11px] h-[8px] md:h-[11px] rounded-full bg-[#D9D9D9]"></div>

                <p className="font-inter text-[13.783px] md:text-[20px] text-[#1E1E1E]/55 leading-[18.512px] md:leading-[26.862px]">
                  12 min read
                </p>
              </div>
            </div>

            <Link
              href={"#"}
              className="group w-fit green-button-box-shadow bg-[#0ABD3C] rounded-[5.513px] md:rounded-[8px] p-[6.89px] md:p-[10px] flex gap-[5px] items-center"
            >
              <p className="font-inter text-white text-[16.54px] md:text-[24px] leading-[22.215px] md:leading-[32.234px]">
                Read more
              </p>
              <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] text-white group-hover:translate-x-2 transition-all">
                <ArrowForwardIcon />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResourcesHero;
