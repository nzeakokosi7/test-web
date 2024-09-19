import Container from "@/components/layout/container";
import ArrowForwardIcon from "@/icons/arrow-forward";
import Link from "next/link";

const HomeProducts = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white pt-[29px] pb-[40px] md:pt-[55px] md:pb-[57px]">
      <Container className="flex flex-col gap-[24.88px] md:gap-[37px] justify-centers">
        <div className="w-full max-w-[790px] flex flex-col gap-[6.12px] md:gap-3">
          <h2 className="font-publicSans font-semibold text-[32.622px] md:text-[64px] text-[#1E1E1E] leading-normal">
            Build with purpose… <br /> with{" "}
            <span className="text-[#00CA72]/90">Varscon</span>
          </h2>
          <p className="font-inter text-[12.233px] md:text-[24px] text-[#1E1E1E]/55 leading-[16.431px] md:leading-[32.234px]">
            Varscon was built and is maintained by seasoned professionals. Our
            veteran engineers and senior managers are the expert opinion you
            need to scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[30px] ">
          <ProductCard
            bgUrl="/assets/home/product-motherbot.png"
            linkUrl="/products/motherbot"
            linkText="Visit our studio"
            title="Motherbot"
            description="Pioneering the future of technology with Motherbot, our full-service product studio, and Varscon Services, our center for external innovation."
          />

          <ProductCard
            bgUrl="/assets/home/product-varscon-services.png"
            linkUrl="/products/varscon-services"
            linkText="Learn more"
            title="Varscon Services"
            description="Varscon was built and is maintained by seasoned professionals. Our veteran engineers and senior managers are the expert opinion you need to scale your business."
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeProducts;

function ProductCard({
  bgUrl,
  linkUrl,
  linkText,
  title,
  description,
}: {
  bgUrl: string;
  linkUrl: string;
  linkText: string;
  title: string;
  description: string;
}) {
  return (
    <section className="group w-full bg-[#CCCCCC36] flex flex-col gap-[11.21px] md:gap-[22px] rounded-[6.117px] md:rounded-[12px] py-[18px] md:py-[33px] px-[15.8px] md:px-[31px] relative">
      <div
        className="absolute top-0 left-0 w-full h-full rounded-[6.117px] md:rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 flex justify-center items-center"
        style={{
          background: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link
          href={linkUrl}
          className="group product-button-box-shadow w-fit bg-white rounded-[6.327px] md:rounded-[12.412px] p-[6px] md:p-3 flex gap-[2.55px] md:gap-[5px] items-center"
        >
          <p className="font-inter font-medium text-[#272727] text-[13px] md:text-[21.721px] leading-[18.437px] md:leading-[31.029px]">
            {linkText}
          </p>
          <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] text-[#8F8F8F] md:group-hover:translate-x-2 transition-all">
            <ArrowForwardIcon />
          </div>
        </Link>
      </div>
      <h3 className="font-publicSans font-medium text-[20.389px] md:text-[40px] text-[#1E1E1E]/95">
        {title}
      </h3>

      <p className="w-full max-w-[291.561px] md:max-w-[572px] font-inter text-[12.233px] md:text-[24px] text-[#1E1E1E]/55 leading-[16.431px] md:leading-[32.234px]">
        {description}
      </p>

      <Link
        href={linkUrl}
        className="group product-button-box-shadow w-fit bg-white rounded-[6.327px] md:rounded-[12.412px] p-[6px] md:p-3 flex gap-[2.55px] md:gap-[5px] items-center mt-[9px] md:mt-[18px]"
      >
        <p className="font-inter font-medium text-[#272727] text-[13px] md:text-[21.721px] leading-[18.437px] md:leading-[31.029px]">
          {linkText}
        </p>
        <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] text-[#8F8F8F]">
          <ArrowForwardIcon />
        </div>
      </Link>
    </section>
  );
}
