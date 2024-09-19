import Container from "@/components/layout/container";
import Image from "next/image";

const VarsconServicesMain = () => {
  const cardData = [
    {
      imageUrl: "/assets/products/product-ideation.svg",
      title: "Product Ideation & Architecture",
      description:
        "Our experts collaborate with you to conceptualize new products and ensure your technical foundations are rock-solid.",
    },

    {
      imageUrl: "/assets/products/cross-team.svg",
      title: "Cross-Team Collaboration & Documentation",
      description:
        "We facilitate effective teamwork across your organization and create detailed documentation to align stakeholders.",
    },

    {
      imageUrl: "/assets/products/incident-management.svg",
      title: "Incident Management & User Support",
      description:
        "Robust incident response processes and dedicated user support to keep your customers satisfied and protected.",
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#F5F5F5] py-[50px]">
      <Container className="flex flex-col gap-[50px] md:gap-[38px]">
        <div className="w-full flex flex-col gap-3">
          <h3 className="font-publicSans font-semibold text-[36px] md:text-[48px] text-[#1E1E1E]">
            <span className="text-[#00CA72]">Varscon</span> Services
          </h3>
          <p className="w-full max-w-[914px] font-inter text-[16px] md:text-[24px] leading-[21.49px] md:leading-[32.234px] text-[#1E1E1E]/55">
            From architecture evaluation to cloud security, our experts at
            Varscon Services empower businesses to optimize their product
            development lifecycle and stay ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
          {cardData.map((data, index) => (
            <ServicesCard key={index} data={data} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VarsconServicesMain;

function ServicesCard({
  data,
}: {
  data: {
    imageUrl: string;
    title: string;
    description: string;
  };
}) {
  const { imageUrl, title, description } = data;
  return (
    <div className="bg-white flex flex-col gap-[40.52px] md:gap-[47px] px-[21.56px] md:px-[25px] pt-[29.32px] md:pt-[33px] pb-[55px] rounded-[18.107px] md:rounded-[21px]">
      <Image src={imageUrl} alt={title} width={172} height={180} />

      <div className="flex flex-col gap-3">
        <h2 className="font-publicSans font-medium text-[24px] md:text-[32px] text-[#1E1E1E]">
          {title}
        </h2>

        <p className="font-inter text-[13.796px] md:text-[16px] leading-[18.529px] md:leading-[21.49px] text-[#1E1E1E]/55">
          {description}
        </p>
      </div>
    </div>
  );
}
