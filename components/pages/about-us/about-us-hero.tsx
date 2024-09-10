import Container from "@/components/layout/container";
import GlobalSearch from "@/icons/global-search";
import Image from "next/image";
import Link from "next/link";

const AboutUsHero = () => {
  return (
    <section className="w-full flex flex-col gap-[50px] md:gap-[78px] items-center justify-center bg-white pt-[160px] pb-[72px] md:pb-[128px]">
      <div className="w-full flex flex-col justify-center items-center bg-[url(/assets/home/home-hero-bg-1.png)] bg-cover bg-no-repeat pt-[20px]">
        <Container className="flex flex-col items-center justify-center gap-[60px] md:gap-[157px]">
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="w-fit flex justify-center items-center py-1 px-2.5 rounded-[20px] bg-[#00ca720f]">
              <p className="font-inter text-[16px] md:text-[24px] text-[#00CA72]/90 leading-[21.49px] md:leading-[32.234px]">
                About Us
              </p>
            </div>

            <h1 className="w-full max-w-[841px] text-[#1E1E1E] font-publicSans text-center text-[36px] md:text-[96px] font-semibold leading-[36px] md:leading-[96px]">
              Innovating Across Dimensions
            </h1>
            <p className="w-full max-w-[703px] font-inter text-center text-[16px] md:text-[24px] leading-[21.49px] md:leading-[32.234px] text-[#1E1E1E]/55">
              An ecosystem of innovation, consultation, and collaboration.
            </p>
          </div>

          <div className="bg-black w-full h-[562px] rounded-[11px]"></div>
        </Container>
      </div>
      <Container className="flex flex-col justify-center items-center">
        <article className="w-full max-w-[1077px] flex flex-col gap-[15px] md:gap-[17px]">
          <p className="font-inter font-medium text-justify text-[#1E1E1E]/80 text-[16px] md:text-[24px] leading-[23.2px] md:leading-[34.8px]">
            Varscon operates through three dynamic facets: Motherbot, our
            innovative product studio; Varscon Services, our expert consultancy
            arm; and through strategic partnership, fostering collaboration
            across industries.
          </p>

          <p className="font-inter font-medium text-justify text-[#1E1E1E]/80 text-[16px] md:text-[24px] leading-[23.2px] md:leading-[34.8px]">
            Motherbot is the beating heart of our creative process. It is where
            groundbreaking ideas are born and nurtured into cutting-edge tech
            products. Varscon Services is where our expertise meets your
            ambition. As our dedicated consultancy arm, we employ seasoned
            consultants who bring a wealth of knowledge and experience to your
            product development journey. Together, we push the boundaries of
            what's possible in tech, driving innovation and excellence in every
            project we undertake.
          </p>
        </article>
      </Container>
    </section>
  );
};

export default AboutUsHero;
