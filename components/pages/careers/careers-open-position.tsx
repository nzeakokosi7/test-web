import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import ArrowForwardIcon from "@/icons/arrow-forward";
import BackArrow from "@/icons/back-arrow";
import Image from "next/image";
import Link from "next/link";

const CareersOpenPosition = () => {
  const openPositionData = [
    {
      field: "Engineering",
      positions: [
        {
          url: "#",
          position: "Backend Engineer",
          location: "Lagos, NG",
          type: "Remote",
        },
        {
          url: "#",
          position: "Frontend Engineer",
          location: "Lagos, NG",
          type: "Remote",
        },
      ],
    },

    {
      field: "Spontaneous Application",
      positions: [
        {
          url: "#",
          position: "Product Manager",
          location: "Lagos, NG",
          type: "Remote",
        },
      ],
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white rounded-b-[40px] md:rounded-b-[80px] border-b-[1px] border-b-[#94A3B8]">
      <Container className="flex flex-col gap-[20px] md:gap-[34px] py-[70px] md:py-[90px]">
        <div className="w-full max-w-[780px] pb-[20px] border-b-[1px] border-b-[#D9D9D9E0]">
          <h2 className="font-publicSans font-medium text-[#1E1E1E] text-[36px] md:text-[40px]">
            Open Position
          </h2>
        </div>

        <div className="w-full max-w-[1214px] flex flex-col gap-[17.37px] md:gap-[30px]">
          {openPositionData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col gap-[8.11px] md:gap-[14px]"
            >
              <p className="font-inter text-[#00CA72]/90 text-[11.582px] md:text-[20px] leading-[15.555px] md:leading-[26.862px]">
                {data.field}
              </p>

              <div className="flex flex-col gap-[11.58px] md:gap-[20px]">
                {data.positions.map((position, index) => (
                  <PositionCard
                    key={index}
                    url={position.url}
                    position={position.position}
                    location={position.location}
                    type={position.type}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex gap-[20.85px] md:gap-[36px] items-center justify-center mt-[20px] md:mt-[30px]">
          <button className="group flex gap-[5px] items-center py-[6.95px] md:py-3 px-[9.27px] md:px-4 rounded-[17.372px] md:rounded-[30px] border-[1px] border-[#DAE0E6]/0 hover:border-[#DAE0E6] transition-all">
            <div className="text-[#5F6D7E] rotate-180 group-hover:-translate-x-1 transition-all">
              <ArrowForwardIcon />
            </div>

            <p className="font-inter font-medium text-[#5F6D7E] text-[8.107p] md:text-[14px] leading-[11.582px] md:leading-[20px]">
              Prev
            </p>
          </button>

          <button className="group flex gap-[5px] items-center py-[6.95px] md:py-3 px-[9.27px] md:px-4 rounded-[17.372px] md:rounded-[30px] border-[1px] border-[#DAE0E6]/0 hover:border-[#DAE0E6] transition-all">
            <p className="font-inter font-medium text-[#5F6D7E] text-[8.107p] md:text-[14px] leading-[11.582px] md:leading-[20px]">
              Next
            </p>
            <div className="text-[#5F6D7E] group-hover:translate-x-1 transition-all">
              <ArrowForwardIcon />
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CareersOpenPosition;

function PositionCard({
  url,
  position,
  location,
  type,
}: {
  url: string;
  position: string;
  location: string;
  type: string;
}) {
  return (
    <div className="w-full max-w-[1214px] flex justify-between items-center px-[18px] py-[14px] bg-[#e6eaee4a] rounded-[11px]">
      <div className="flex flex-col gap-[6.95px] md:gap-[]">
        <h3 className="font-publicSans font-medium text-[#1E1E1E] text-[23.163px] md:text-[40px]">
          {position}
        </h3>

        <div className="flex gap-[6.95px] md:gap-3 items-center">
          <p className="font-inter text-[#1E1E1E]/55 text-[13.898px] md:text-[24px] leading-[18.666px] md:leading-[32.234px]">
            {location}
          </p>

          <div className="w-[5.791px] h-[5.791px] md:w-[10px] md:h-[10px] rounded-full bg-[#5C5C5C]"></div>

          <p className="font-inter text-[#1E1E1E]/55 text-[13.898px] md:text-[24px] leading-[18.666px] md:leading-[32.234px]">
            {type}
          </p>
        </div>
      </div>

      <Link href={url} className="group flex gap-[5px] items-center">
        <p className="font-inter font-medium text-[#00CA72]/90 text-[13.898px] md:text-[24px] leading-[18.666px] md:leading-[32.234px]">
          open
        </p>
        <div className="text-[#00CA72]/90 group-hover:translate-x-2 transition-all">
          <ArrowForwardIcon />
        </div>
      </Link>
    </div>
  );
}
