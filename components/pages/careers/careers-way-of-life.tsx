import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import Image from "next/image";

const CareersWayOfLife = () => {
  const wayOfLifeData = [
    {
      image: "/assets/careers/remote-first.svg",
      title: "Remote First",
      description:
        "We believe great ideas can come from anywhere. Our remote-first approach means you have the flexibility to work where you're most productive, whether that's from your home office, a cozy café, or anywhere really.",
    },

    {
      image: "/assets/careers/innovation.svg",
      title: "Innovation",
      description:
        "At Varscon, innovation isn’t just a buzzword—it's our lifeblood. We foster an environment where curiosity is celebrated, and out-of-the-box thinking is encouraged.",
    },

    {
      image: "/assets/careers/own-your-work.svg",
      title: "Own Your Work",
      description:
        "Here, you're not just another cog in the machine—you're a driving force behind our success. We believe in empowering our team members to take ownership of their projects and ideas.",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-[50px] items-center justify-center bg-[#A7CD95]/50 pt-[46px] pb-[47.79px] md:pb-[68.15px]">
      <Container className="flex flex-col justify-center gap-[60px] md:gap-[110px]">
        <article className="w-full max-w-[767px] flex flex-col gap-3">
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

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[62px] md:gap-[151px]">
          {wayOfLifeData.map((data, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Image
                src={data.image}
                alt={data.title}
                width={55}
                height={60}
                className="w-[55px] h-[60px]"
              />

              <h4 className="font-publicSans font-medium text-[#1E1E1E] text-[24px] md:text-[40px]">
                {data.title}
              </h4>

              <p className="font-inter text-[#1E1E1E]/55 text-[16px] md:text-[20px] leading-[21.49px] md:leading-[24px]">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CareersWayOfLife;
