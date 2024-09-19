import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import Image from "next/image";

const VarsconServicesHero = () => {
  return (
    <section className="w-full flex flex-col gap-[55.44px] md:gap-[120px] items-center justify-center pb-[85.98px] md:pb-[77px]">
      <div className="w-full flex flex-col items-center justify-center pt-[110px] md:pt-[200px] bg-[url(/assets/products/varscon-services-bg.png)] bg-cover bg-no-repeat">
        <Container className="flex flex-col gap-6 items-center">
          <div className="w-fit flex gap-[7.8px] md:gap-3 items-center py-[2.6px] md:py-1 px-[6.5px] md:px-2.5 rounded-[13px] md:rounded-[20px] bg-[#00ca720f]">
            <div className="w-[15px] md:w-[24px] h-[15px] md:h-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0303 22.85L11.6602 22.67C11.5602 22.62 1.24023 17.32 1.24023 5.00005V4.58005L1.60022 4.36005C1.70022 4.30005 12.1102 -1.79995 22.3702 4.36005L22.7302 4.58005V5.00005C22.7302 5.47005 22.6102 16.5 12.3702 22.64L12.0303 22.85ZM2.75024 5.44005C2.96024 15.28 10.2702 20.13 11.9802 21.13C20.0602 16.05 21.1002 7.42004 21.2302 5.42004C12.9202 0.700044 4.59024 4.49005 2.75024 5.44005Z"
                  fill="#00CA72"
                  fill-opacity="0.9"
                />
                <path
                  d="M7.10033 13.21C6.76033 13.21 6.42036 13.17 6.07036 13.09C3.99036 12.6 2.42036 10.65 1.38036 7.28998C1.26036 6.88998 1.48036 6.46998 1.88036 6.34998C2.28036 6.22998 2.70036 6.44998 2.82036 6.84998C3.69036 9.65998 4.90034 11.27 6.42034 11.63C8.23034 12.05 10.2904 10.58 11.2004 9.72998C10.3804 3.43998 15.8603 2.20998 15.9203 2.19997L16.5204 2.07998C16.9204 1.99998 17.3204 2.26998 17.4004 2.66998C17.4804 3.06998 17.2104 3.46998 16.8104 3.54998L16.2203 3.65998C16.0603 3.69998 11.8803 4.66998 12.7403 9.85998C12.7803 10.09 12.7103 10.33 12.5403 10.5C12.4303 10.64 9.95033 13.21 7.10033 13.21Z"
                  fill="#00CA72"
                  fill-opacity="0.9"
                />
                <path
                  d="M16.3501 19.2601C16.2401 19.2601 16.1301 19.2401 16.0301 19.1901C15.6601 19.0101 15.5001 18.5701 15.6801 18.1901C15.6901 18.1701 16.5401 16.3301 15.7901 14.3601C15.2101 12.8401 13.8401 11.6101 11.7101 10.6901C11.3301 10.5301 11.1501 10.0901 11.3201 9.71012C11.4901 9.33012 11.9201 9.15012 12.3101 9.32012C14.8401 10.4001 16.4801 11.9301 17.2101 13.8601C18.1801 16.4401 17.0901 18.7501 17.0401 18.8501C16.9001 19.1001 16.6301 19.2601 16.3501 19.2601Z"
                  fill="#00CA72"
                  fill-opacity="0.9"
                />
              </svg>
            </div>

            <p className="font-inter text-[15.6px] md:text-[24px] text-[#00CA72]/90 leading-[20.952px] md:leading-[32.234px]">
              Varscon services
            </p>
          </div>
          <div className="w-full max-w-[960px] flex flex-col items-center gap-3">
            <h2 className="w-full max-w-[827px] text-[#1E1E1E] font-publicSans text-[32px] md:text-[64px] text-center font-semibold leading-normal">
              Powering Product Excellence for{" "}
              <span className="text-[#00CA72]">Varscon</span> Clientele
            </h2>
            <p className="w-full font-inter text-[16px] md:text-[24px] text-center leading-[21.49px] md:leading-[32.234px] text-black/55">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <NavigateButton url="/contact-us" text="Contact Us" />
        </Container>
      </div>
      <Container className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[22.92px] md:gap-[54px]">
          <p className="font-inter font-medium text-center text-[8.489px] md:text-[20px] text-[#94A3B8] leading-[10.187px] md:leading-6">
            Trusted by companies and developers worldwide
          </p>

          <div className="grid grid-cols-4 gap-x-[22px] md:gap-x-[51.84px] gap-y-[27.47px] md:gap-y-[64.71px]">
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
      </Container>
    </section>
  );
};

export default VarsconServicesHero;
