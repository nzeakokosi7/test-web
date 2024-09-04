import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import GlobalSearch from "@/icons/global-search";
import Image from "next/image";


const MotherbotServices = () => {
  const productsData = [
    {
      color: "#FFD231",
      bg_color: "#ffd2311f",
      title: "AI",
      description:
        "We push the boundaries of machine learning, natural language processing, and computer vision to create intelligent systems that solve complex problems and enhance human capabilities.",
      coming_soon: false,
      link: "/products/motherbot/ai",
    },

    {
      color: "#77AAA0",
      bg_color: "#77aaa033",
      title: "SaaS",
      description:
        "We craft intuitive, scalable, and secure software platforms that adapt to the evolving needs of modern enterprises, ensuring our clients stay ahead in the digital landscape.",
      coming_soon: true,
      link: "/products/motherbot/saas",
    },

    {
      color: "#FF7705",
      bg_color: "#ff770530",
      title: "R&D",
      description:
        "Our R&D efforts fuel innovation across all departments. Here, we explore uncharted technological territories, experiment with emerging technologies, and incubate ideas that may seem far-fetched today but will be indispensable tomorrow.",
      coming_soon: true,
      link: "/products/motherbot/randd",
    },

    {
      color: "#5749F7",
      bg_color: "#5749f733",
      title: "Hardware",
      description:
        "Bringing digital innovations into the physical world. From IoT devices to advanced robotics, we will design and develop hardware solutions that integrate with software to create holistic, user-centric products, creating new possibilities for human-machine interaction.",
      coming_soon: true,
      link: "/products/motherbot/hardware",
    },
  ];
  return (
    <section className="w-full bg-white pb-[10px]">
      <section className="w-full flex flex-col items-center justify-center bg-[#F5F5F5] py-[45px] rounded-b-[80px] border-b-[1px] border-b-[#94A3B8]">
        <Container className="flex flex-col gap-[27px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[31px] gap-y-[27px]">
            {productsData.map((product, index) => (
              <div
                key={index}
                className="flex flex-col gap-[23px] pt-[52px] pb-[34px] px-[25px] bg-white rounded-[24px]"
              >
                <div
                  className="w-[56px] h-[56px] md:w-[94px] md:h-[94px] rounded-full flex justify-center items-center mb-[100px] md:mb-[200px]"
                  style={{ backgroundColor: product.bg_color }}
                >
                  <div
                    className="w-[24px] md:w-[40px] flex justify-center items-center"
                    style={{ color: product.color }}
                  >
                    <GlobalSearch />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="relative font-publicSans font-semibold text-[38.028px] md:text-[64px] text-[#1E1E1E]">
                    {product.title}
                    {product.coming_soon && (
                      <span className="absolute left-20 -top-2 rotate-6 font-laBelleAurore text-[#1E1E1E]/50 text-[20px] md:text-[32px] leading-[25.537px] md:leading-[42.979px]">
                        Coming soon...
                      </span>
                    )}
                  </h1>
                  <p className="font-inter text-[12px] md:text-[20px] text-[#1E1E1E]/55 leading-[15.961px] md:leading-[26.862px]">
                    {product.description}
                  </p>
                </div>

                <NavigateButton url={product.link} text="Explore Products" />
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col md:flex-row gap-[52px] justify-between items-end rounded-[24px] pt-[60px] pl-[24px] md:pl-[50px] md:pr-[50px] bg-[url(/assets/products/partnership-mobile-bg.png)] md:bg-[url(/assets/products/partnership-bg.png)] bg-cover bg-no-repeat">
            <div className="w-full flex flex-col gap-3 md:mb-[50px]">
              <Image
                src={"/assets/products/say-it-your-way.svg"}
                alt="say_it_your_way"
                width={128}
                height={128}
              />
              <h4 className="font-publicSans font-medium text-[32px] md:text-[36px] text-[#1E1E1E]">
                Partnership
              </h4>
              <p className="w-full max-w-[360px] pr-[24px] font-inter text-[#1E1E1E]/55 text-[16px] md:text-[20px] leading-[21.49px] md:leading-[26.862px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            <div className="w-[300px] md:w-[650px] h-[153px] md:h-[180px] rounded-tl-[17px] md:rounded-tr-[17px] bg-[#F2F2F2]"></div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default MotherbotServices;
