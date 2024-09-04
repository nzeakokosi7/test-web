import Container from "@/components/layout/container";
import GlobalSearch from "@/icons/global-search";
import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#F5F5F5] pt-[28px] pb-[60px] md:pt-[60px] md:pb-[105px]">
      <div className="w-full flex flex-col justify-center items-center bg-[url(/assets/home/home-hero-bg-1.png)] bg-cover bg-no-repeat pt-[210px] pb-[330px]">
        <Container className="flex flex-col">
          <h1 className="w-full max-w-[1150px] text-black font-publicSans text-[96px] font-semibold">
            Varscon, the powerhouse of innovation
          </h1>
          <p className="w-full max-w-[529px] font-inter text-[24px] leading-[32.234px] text-black/55">
            Sculpting the future of industries, one product at a time
          </p>

          <div className="flex gap-[37px] my-[37px]">
            <Link
              href={"#"}
              className="green-button-box-shadow bg-[#0ABD3C] rounded-[8px] p-[10px] font-inter font-medium text-white text-[24px] leading-[32.234px]"
            >
              Visit our studio
            </Link>
            <Link
              href={"#"}
              className="white-button-box-shadow bg-white rounded-[8px] p-[10px] font-inter font-medium text-[#1E1E1E] text-[24px] leading-[32.234px]"
            >
              Book consultation
            </Link>
          </div>
        </Container>
      </div>
      <Container className="flex flex-col gap-[120px] justify-centers pt-[30px]">
        <div className="flex flex-col justify-center items-center gap-[54px]">
          <p className="font-inter font-medium text-center text-[20px] text-[#94A3B8] leading-6">
            Trusted by companies and developers worldwide
          </p>

          <div className="grid grid-cols-4 gap-x-[51.84px] gap-y-[64.71px]">
            <Image
              src={"/assets/company-logo/webflow.svg"}
              alt="webflow_logo"
              width={181}
              height={45}
            />
            <Image
              src={"/assets/company-logo/instacart.svg"}
              alt="instacart_logo"
              width={181}
              height={45}
            />
            <Image
              src={"/assets/company-logo/sketch.svg"}
              alt="sketch_logo"
              width={181}
              height={45}
            />
            <Image
              src={"/assets/company-logo/basecamp.svg"}
              alt="basecamp_logo"
              width={181}
              height={45}
            />

            <Image
              src={"/assets/company-logo/zapier.svg"}
              alt="zapier_logo"
              width={181}
              height={45}
            />
            <Image
              src={"/assets/company-logo/monday.svg"}
              alt="monday_logo"
              width={181}
              height={45}
            />
            <Image
              src={"/assets/company-logo/heroku.svg"}
              alt="heroku_logo"
              width={181}
              height={45}
            />
            <Image
              src={"/assets/company-logo/gitlab.svg"}
              alt="gitlab_logo"
              width={181}
              height={45}
            />
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex gap-[25px]">
            <p className="font-publicSans text-[40px] text-[#1E1E1E] leading-[#1E1E1E]">
              Varscon operates through
            </p>

            <div className="w-[40px] text-[#292D32] flex justify-center items-center">
              <GlobalSearch />
            </div>

            <p className="font-publicSans text-[40px] text-[#1E1E1E] leading-[#1E1E1E]">
              three dynamic facets
            </p>
          </div>

          <p className="w-full max-w-[1150px] font-publicSans text-[40px] text-black/55 leading-[52.135px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="62"
              viewBox="0 0 6 62"
              fill="none"
              className="inline-block"
            >
              <path
                d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM2.5 61C2.5 61.2761 2.72386 61.5 3 61.5C3.27614 61.5 3.5 61.2761 3.5 61H2.5ZM2.5 3V61H3.5V3H2.5Z"
                fill="#49E073"
              />
            </svg>
            <mark className="bg-[#49E073]/20 text-black/55">
              Motherbot, our innovative product studio; Varscon Services, our
              expert consultancy arm; and through strategic
            </mark>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="58"
              viewBox="0 0 6 58"
              fill="none"
              className="inline-block"
            >
              <path
                d="M0.333333 55C0.333333 56.4728 1.52724 57.6667 3 57.6667C4.47276 57.6667 5.66667 56.4728 5.66667 55C5.66667 53.5272 4.47276 52.3333 3 52.3333C1.52724 52.3333 0.333333 53.5272 0.333333 55ZM2.5 0V55H3.5V0H2.5Z"
                fill="#49E073"
              />
            </svg>
            partnership, fostering collaboration across industries.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
