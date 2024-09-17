import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import Image from "next/image";

const CareersHero = () => {
  return (
    <section className="w-full flex flex-col gap-[50px] items-center justify-center bg-white pb-[50px] md:pb-[65px]">
      <div className="career-hero-bg w-full flex flex-col justify-center items-center pt-[180px] pb-[50px] md:pb-[65px]">
        <Container className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-4 md:gap-6 items-center justify-center">
            <div className="w-fit flex justify-center items-center py-1 px-2.5 rounded-[20px] bg-[#00ca720f]">
              <p className="font-inter text-[16px] md:text-[24px] text-[#00CA72]/90 leading-[21.49px] md:leading-[32.234px]">
                Careers
              </p>
            </div>

            <div className="w-full max-w-[589px] flex flex-col gap-3 items-center justify-center">
              <h1 className="w-full text-[#1E1E1E] font-publicSans font-semibold text-center text-[36px] md:text-[64px] leading-[36px] md:leading-[64px]">
                Shape the Future of Technology
              </h1>
              <p className="w-full  font-inter text-center text-[16px] md:text-[24px] leading-[21.49px] md:leading-[32.234px] text-[#1E1E1E]/55">
                Join our team of visionaries, innovators, and problem-solvers as
                we push the boundaries of what’s possible in tech.
              </p>
            </div>
          </div>

          <NavigateButton text="See open roles" url="#" />
        </Container>
      </div>

      <Container className="flex flex-col justify-center gap-[19.68px] md:gap-[43px]">
        <article className="w-full max-w-[927px] flex flex-col gap-3 md:gap-[5.49px] md:mt-[10px]">
          <h3 className="w-full text-[#1E1E1E] font-publicSans font-medium text-[32px] md:text-[40px] leading-[32px] md:leading-[40px]">
            Life at Varscon
          </h3>

          <p className="font-inter text-justify text-[#1E1E1E]/55 text-[16px] md:text-[24px] leading-[21.49px] md:leading-[32.234px]">
            Imagine a workplace where your ideas are not bound by location.
            Where you’re empowered to take risks and make an impact. That is
            life at Varscon. We’re constantly looking for passionate individuals
            who are ready to own their work and contribute to groundbreaking
            projects that will shape industries. Plus, you can get a slice of
            the pie with our stock options benefits available for specific
            roles.
          </p>
        </article>

        {/* Video player */}

        {/* Use Next Video and Mux [mux.com] for video optimization */}

        <div className="bg-black w-full h-[562px] rounded-[11px]"></div>
      </Container>
    </section>
  );
};

export default CareersHero;
