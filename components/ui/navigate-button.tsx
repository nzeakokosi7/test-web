import ArrowForwardIcon from "@/icons/arrow-forward";
import Link from "next/link";

export default function NavigateButton({
  url,
  text,
}: {
  url: string;
  text: string;
}) {
  return (
    <Link
      href={url}
      className="group product-button-box-shadow w-fit bg-white rounded-[6.327px] md:rounded-[12.412px] p-[6px] md:p-3 flex gap-[2.55px] md:gap-[5px] items-center"
    >
      <p className="font-inter font-medium text-[#272727] text-[13px] md:text-[21.721px] leading-[18.437px] md:leading-[31.029px]">
        {text}
      </p>
      <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] text-[#8F8F8F] group-hover:translate-x-2 transition-all">
        <ArrowForwardIcon />
      </div>
    </Link>
  );
}
