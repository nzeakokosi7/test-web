import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import Slider from "@/components/ui/slider";
import BackArrow from "@/icons/back-arrow";
import Image from "next/image";

const VarsconServicesTools = () => {
  const toolsLogos = [
    { alt: "stackoverflow", url: "/assets/icons/stackoverflow.svg" },
    { alt: "quora", url: "/assets/icons/quora.svg" },
    { alt: "qq", url: "/assets/icons/qq.svg" },
    { alt: "slack", url: "/assets/icons/slack.svg" },
    { alt: "kwai", url: "/assets/icons/kwai.svg" },
    { alt: "teams", url: "/assets/icons/teams.svg" },
    { alt: "googlepodcast", url: "/assets/icons/googlepodcast.svg" },
    { alt: "clubhouse", url: "/assets/icons/clubhouse.svg" },
    { alt: "soundcloud", url: "/assets/icons/soundcloud.svg" },
  ];

  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      name: "Njoku",
      title: "Project Manager",
      company: "Varscon",
      logoUrl: "/assets/company-logo/basecamp.svg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      name: "Kosi",
      title: "CEO",
      company: "Varscon",
      logoUrl: "/assets/company-logo/basecamp.svg",
    },

    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      name: "Njoku",
      title: "Project Manager",
      company: "Varscon",
      logoUrl: "/assets/company-logo/basecamp.svg",
    },
  ];

  const testimonialsNode = testimonials.map((data, index) => (
    <SlideCard key={index} data={data} />
  ));

  return (
    <section className="w-full flex flex-col items-center justify-center bg-white rounded-b-[40px] md:rounded-b-[80px] border-b-[1px] border-b-[#94A3B8]">
      <Container className="flex flex-col items-center gap-[50px] py-[70px] md:py-[100px]">
        <div className="w-full max-w-[1100px] flex flex-col gap-[44px]">
          <h3 className="font-publicSans font-medium text-black text-center text-[40px]">
            Tools and technology
          </h3>

          <div className="flex gap-[58px] flex-wrap items-center justify-center">
            {toolsLogos.map((logo, index) => (
              <div
                key={index}
                className="tools-box-shadow p-[15px] flex justify-center items-center rounded-[10.659px] border-[0.609px] border-[#D9D9D9] bg-white"
              >
                <Image src={logo.url} alt={logo.alt} width={36} height={36} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1260px] md:pt-[100px] pb-[30px] md:pb-[56px]">
          <Slider slides={testimonialsNode} />
        </div>

        <div className="w-full flex flex-col gap-[25px]">
          <div className="w-fit flex gap-3 items-center py-1 px-2.5 rounded-[20px] bg-[#00ca720f]">
            <div className="w-[17.414px] md:w-[24px] text-[#00CA72]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0303 22.85L11.6602 22.67C11.5602 22.62 1.24023 17.32 1.24023 5.00005V4.58005L1.60022 4.36005C1.70022 4.30005 12.1102 -1.79995 22.3702 4.36005L22.7302 4.58005V5.00005C22.7302 5.47005 22.6102 16.5 12.3702 22.64L12.0303 22.85ZM2.75024 5.44005C2.96024 15.28 10.2702 20.13 11.9802 21.13C20.0602 16.05 21.1002 7.42004 21.2302 5.42004C12.9202 0.700044 4.59024 4.49005 2.75024 5.44005Z"
                  fill="currentColor"
                  fill-opacity="0.9"
                />
                <path
                  d="M7.10033 13.21C6.76033 13.21 6.42036 13.17 6.07036 13.09C3.99036 12.6 2.42036 10.65 1.38036 7.28998C1.26036 6.88998 1.48036 6.46998 1.88036 6.34998C2.28036 6.22998 2.70036 6.44998 2.82036 6.84998C3.69036 9.65998 4.90034 11.27 6.42034 11.63C8.23034 12.05 10.2904 10.58 11.2004 9.72998C10.3804 3.43998 15.8603 2.20998 15.9203 2.19997L16.5204 2.07998C16.9204 1.99998 17.3204 2.26998 17.4004 2.66998C17.4804 3.06998 17.2104 3.46998 16.8104 3.54998L16.2203 3.65998C16.0603 3.69998 11.8803 4.66998 12.7403 9.85998C12.7803 10.09 12.7103 10.33 12.5403 10.5C12.4303 10.64 9.95033 13.21 7.10033 13.21Z"
                  fill="currentColor"
                  fill-opacity="0.9"
                />
                <path
                  d="M16.3501 19.2601C16.2401 19.2601 16.1301 19.2401 16.0301 19.1901C15.6601 19.0101 15.5001 18.5701 15.6801 18.1901C15.6901 18.1701 16.5401 16.3301 15.7901 14.3601C15.2101 12.8401 13.8401 11.6101 11.7101 10.6901C11.3301 10.5301 11.1501 10.0901 11.3201 9.71012C11.4901 9.33012 11.9201 9.15012 12.3101 9.32012C14.8401 10.4001 16.4801 11.9301 17.2101 13.8601C18.1801 16.4401 17.0901 18.7501 17.0401 18.8501C16.9001 19.1001 16.6301 19.2601 16.3501 19.2601Z"
                  fill="currentColor"
                  fill-opacity="0.9"
                />
              </svg>
            </div>

            <p className="font-inter text-[17.41px] md:text-[24px] text-[#00CA72]/90 leading-[23.388px] md:leading-[32.234px]">
              Work with varscon
            </p>
          </div>

          <h2 className="w-full max-w-[850px] font-publicSans font-semibold text-[24px] md:text-[48px] text-[#1E1E1E]">
            Innovate with Confidence
          </h2>

          <p className="w-full max-w-[622px] font-publicSans text-[16px] md:text-[24px] text-black/70 mb-[11px]">
            Level up your business processes with expert opinions from vetted
            professionals.
          </p>

          <NavigateButton url="#" text="Book a session" />
        </div>
      </Container>
    </section>
  );
};

export default VarsconServicesTools;

function SlideCard({
  data,
}: {
  data: {
    testimonial: string;
    name: string;
    title: string;
    company: string;
    logoUrl: string;
  };
}) {
  const { testimonial, name, title, company, logoUrl } = data;
  return (
    <div className="w-full flex flex-col gap-[81px] rounded-[21px] bg-[#CDF1FB] p-[50px]">
      <p className="font-inter text-[40px] text-[#1E1E1E] leading-[53.724px]">
        {testimonial}
      </p>

      <div className="w-full flex flex-col gap-1 border-t-[1px] border-black">
        <p className="font-inter text-[17.867px] text-[#1E1E1E] leading-[21.475px]">
          {name} <br />
          <span className="text-[#1E1E1E]/80">
            {title}, {company}
          </span>
        </p>

        <Image src={logoUrl} alt="basecamp_logo" width={116} height={30} />
      </div>
    </div>
  );
}
