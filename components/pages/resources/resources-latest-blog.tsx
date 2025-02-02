import Container from "@/components/layout/container";
import ArrowForwardIcon from "@/icons/arrow-forward";
import Image from "next/image";
import Link from "next/link";

const ResourcesLatestBlog = () => {
  const blogs: BlogProps[] = [
    {
      imgUrl: "/assets/resources/resources-2.png",
      alt: "resources-2",
      type: "Product update",
      title: "Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      authorImg: "/assets/resources/resources-p.png",
      authorImgAlt: "resources-p",
      author: "Varscon",
      date_created: "July 8, 2024",
      minute_read: "12 min read",
      linkUrl: "#",
    },

    {
      imgUrl: "/assets/resources/resources-3.png",
      alt: "resources-3",
      type: "Product update",
      title: "Text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      authorImg: "/assets/resources/resources-p.png",
      authorImgAlt: "resources-p",
      author: "Varscon",
      date_created: "July 8, 2024",
      minute_read: "12 min read",
      linkUrl: "#",
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center py-5 md:py-[50px]">
      <Container className="flex flex-col gap-5 md:gap-10">
        <div className="flex gap-[9px] items-center">
          <div className="w-[4px] h-[20px] rounded-[8px] bg-[#2749A1]"></div>

          <h3 className="font-publicSans font-medium text-[24px] md:text-[36px] text-[#1E1E1E]">
            Latest blog
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-10">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResourcesLatestBlog;

function BlogCard({ blog }: { blog: BlogProps }) {
  const {
    imgUrl,
    alt,
    type,
    title,
    description,
    authorImg,
    authorImgAlt,
    author,
    date_created,
    minute_read,
    linkUrl,
  } = blog;
  return (
    <div className="w-full flex flex-col gap-5">
      <Image
        src={imgUrl}
        alt={alt}
        width={653}
        height={388}
        className="rounded-[24px]"
      />

      <div className="w-full flex flex-col gap-[22.05px] md:gap-8">
        <div className="flex flex-col gap-2 md:gap-3">
          <p className="w-fit mb-[4px] px-[6.89px] md:px-2.5 py-[2.76px] md:py-1 rounded-[13.783px] md:rounded-[20px] bg-[#2749a10f] font-inter text-[16.54px] md:text-[24px] text-[#2749A1] leading[22.215px] md:leading-[32.234px]">
            {type}
          </p>

          <p className="font-publicSans font-medium text-[24px] md:text-[36px] text-[#1E1E1E]">
            {title}
          </p>

          <p className="w-full max-w[] font-inter text-[16.54px] md:text-[24px] text-[#1E1E1E]/55 leading-[22.215px] md:leading-[32.234px]">
            {description}
          </p>
        </div>

        <div className="flex gap-[13.78px] md:gap-5 items-center">
          <div className="flex gap-2 md:gap-3 items-center">
            <Image src={authorImg} alt={authorImgAlt} width={42} height={42} />
            <p className="font-inter text-[16.543px] md:text-[24px] text-[#1E1E1E]/55 leading-[22.215px] md:leading-[32.234px]">
              {author}
            </p>
          </div>

          <div className="flex gap-[12.4px] md:gap-[18px] items-center">
            <div className="w-[8px] md:w-[11px] h-[8px] md:h-[11px] rounded-full bg-[#D9D9D9]"></div>

            <p className="font-inter text-[13.783px] md:text-[20px] text-[#1E1E1E]/55 leading-[18.512px] md:leading-[26.862px]">
              {date_created}
            </p>
          </div>

          <div className="flex gap-[12.4px] md:gap-[18px] items-center">
            <div className="w-[8px] md:w-[11px] h-[8px] md:h-[11px] rounded-full bg-[#D9D9D9]"></div>

            <p className="font-inter text-[13.783px] md:text-[20px] text-[#1E1E1E]/55 leading-[18.512px] md:leading-[26.862px]">
              {minute_read}
            </p>
          </div>
        </div>

        <Link
          href={linkUrl}
          className="group w-fit green-button-box-shadow bg-[#0ABD3C] rounded-[5.513px] md:rounded-[8px] p-[6.89px] md:p-[10px] flex gap-[5px] items-center"
        >
          <p className="font-inter text-white text-[16.54px] md:text-[24px] leading-[22.215px] md:leading-[32.234px]">
            Read more
          </p>
          <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] text-white group-hover:translate-x-2 transition-all">
            <ArrowForwardIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
