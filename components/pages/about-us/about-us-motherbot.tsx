import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import Slider from "@/components/ui/slider";
import Image from "next/image";

const AboutUsMotherbot = () => {
  const testimonials = [
    {
      imageUrl: "/assets/products/motherbot-hero.png",
      caption:
        "The 24/7 business assistant for your social commerce to drive sales and meet customer demands 10x faster.",
      linkText: "Visit Nwahia",
      linkUrl: "",
    },

    {
      imageUrl: "/assets/products/motherbot-hero.png",
      caption:
        "The 24/7 business assistant for your social commerce to drive sales and meet customer demands 10x faster.",
      linkText: "Visit Nwahia",
      linkUrl: "",
    },

    {
      imageUrl: "/assets/products/motherbot-hero.png",
      caption:
        "The 24/7 business assistant for your social commerce to drive sales and meet customer demands 10x faster.",
      linkText: "Visit Nwahia",
      linkUrl: "",
    },

    {
      imageUrl: "/assets/products/motherbot-hero.png",
      caption:
        "The 24/7 business assistant for your social commerce to drive sales and meet customer demands 10x faster.",
      linkText: "Visit Nwahia",
      linkUrl: "",
    },

    {
      imageUrl: "/assets/products/motherbot-hero.png",
      caption:
        "The 24/7 business assistant for your social commerce to drive sales and meet customer demands 10x faster.",
      linkText: "Visit Nwahia",
      linkUrl: "",
    },

    {
      imageUrl: "/assets/products/motherbot-hero.png",
      caption:
        "The 24/7 business assistant for your social commerce to drive sales and meet customer demands 10x faster.",
      linkText: "Visit Nwahia",
      linkUrl: "",
    },

    {
      imageUrl: "/assets/products/motherbot-hero.png",
      caption:
        "The 24/7 business assistant for your social commerce to drive sales and meet customer demands 10x faster.",
      linkText: "Visit Nwahia",
      linkUrl: "",
    },

    {
      imageUrl: "/assets/products/motherbot-hero.png",
      caption:
        "The 24/7 business assistant for your social commerce to drive sales and meet customer demands 10x faster.",
      linkText: "Visit Nwahia",
      linkUrl: "",
    },
  ];

  const testimonialsNode = testimonials.map((data, index) => (
    <SlideCard key={index} data={data} />
  ));

  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#00CA7224]">
      <Container className="flex flex-col items-center gap-6 md:gap-[66px] py-[70px] md:py-[100px]">
        <div className="w-full flex flex-col gap-3 md:gap-4">
          <h3 className="font-publicSans font-semibold text-[#1E1E1E] text-[32px] md:text-[48px]">
            Motherbot
          </h3>

          <p className="font-inter text-[#1E1E1E]/55 text-[16px] md:text-[24px] leading-[23.2px] md:leading-[34.8px] ">
            At Motherbot, there’s always a bun in the oven.
          </p>
        </div>

        <div className="w-full py-3 md:py-[50px] px-[10px] md:px-10 bg-[#F5F5F4] rounded-[12px] md:rounded-[28px]">
          <Slider slides={testimonialsNode} hideNavBtn={true} />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsMotherbot;

function SlideCard({
  data,
}: {
  data: {
    imageUrl: string;
    caption: string;
    linkText: string;
    linkUrl: string;
  };
}) {
  const { imageUrl, caption, linkText, linkUrl } = data;
  return (
    <figure className="w-full flex flex-col gap-[21.03px] md:gap-[30px] rounded-[12.233px] md:rounded-[28px] bg-white py-[10.15px] px-[10.15px] md:py-10 md:px-[50px]">
      <div className="rounded-[10.154px] md:rounded-[14px] pt-[30px] md:pt-[51px] px-[14px] md:px-[37px] bg-[#FFD231]">
        <Image
          src={imageUrl}
          alt={linkText}
          width={800}
          height={237}
          className="w-full"
        />
      </div>

      <figcaption className="w-full flex flex-col gap-[18.86px] md:gap-[26px]">
        <p className="w-full max-w-[997px] font-inter font-medium text-[#1E1E1E]/55 text-[16px] md:text-[24px] leading-[23.2px] md:leading-[34.8px] ">
          {caption}
        </p>

        <NavigateButton url={linkUrl} text={linkText} />
      </figcaption>
    </figure>
  );
}
