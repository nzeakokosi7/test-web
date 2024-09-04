"use client";

import Container from "@/components/layout/container";
import ArrowForwardIcon from "@/icons/arrow-forward";
import Image from "next/image";
import Link from "next/link";

const ConnectWithUs = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#F5F5F5] py-[100px] rounded-b-[40px] md:rounded-b-[80px] border-b-[1px] border-b-[#94A3B8]">
      <Container className="connect-with-us-box-shadow flex flex-col md:flex-row gap-[135px] md:justify-between md:items-center px-[60px] py-[80px] rounded-[37px] border-[1px] border-[#d9d9d9] bg-[url(/assets/connect-with-us-bg.png)] bg-cover bg-no-repeat">
        <div className="md:w-[55%] flex flex-col gap-[34px]">
          <div className="let-connect-box-shadow w-fit flex gap-3 items-center py-1 px-2.5 rounded-[20px] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0303 22.8496L11.6602 22.6696C11.5602 22.6196 1.24023 17.3196 1.24023 4.99956V4.57956L1.60022 4.35956C1.70022 4.29956 12.1102 -1.80044 22.3702 4.35956L22.7302 4.57956V4.99956C22.7302 5.46956 22.6102 16.4996 12.3702 22.6396L12.0303 22.8496ZM2.75024 5.43956C2.96024 15.2796 10.2702 20.1296 11.9802 21.1296C20.0602 16.0496 21.1002 7.41956 21.2302 5.41956C12.9202 0.699556 4.59024 4.48956 2.75024 5.43956Z"
                fill="#1E1E1E"
              />
              <path
                d="M7.09984 13.2105C6.75984 13.2105 6.41987 13.1705 6.06987 13.0905C3.98987 12.6005 2.41987 10.6505 1.37987 7.29047C1.25987 6.89047 1.47987 6.47046 1.87987 6.35046C2.27987 6.23046 2.69987 6.45046 2.81987 6.85046C3.68987 9.66046 4.89985 11.2705 6.41985 11.6305C8.22985 12.0505 10.2899 10.5805 11.1999 9.73047C10.3799 3.44047 15.8598 2.21046 15.9198 2.20046L16.5199 2.08047C16.9199 2.00047 17.3199 2.27046 17.3999 2.67046C17.4799 3.07046 17.2099 3.47047 16.8099 3.55047L16.2198 3.66047C16.0598 3.70047 11.8799 4.67047 12.7399 9.86047C12.7799 10.0905 12.7098 10.3305 12.5398 10.5005C12.4298 10.6405 9.94984 13.2105 7.09984 13.2105Z"
                fill="#1E1E1E"
              />
              <path
                d="M16.3501 19.2601C16.2401 19.2601 16.1301 19.2401 16.0301 19.1901C15.6601 19.0101 15.5001 18.5701 15.6801 18.1901C15.6901 18.1701 16.5401 16.3301 15.7901 14.3601C15.2101 12.8401 13.8401 11.6101 11.7101 10.6901C11.3301 10.5301 11.1501 10.0901 11.3201 9.71012C11.4901 9.33012 11.9201 9.15012 12.3101 9.32012C14.8401 10.4001 16.4801 11.9301 17.2101 13.8601C18.1801 16.4401 17.0901 18.7501 17.0401 18.8501C16.9001 19.1001 16.6301 19.2601 16.3501 19.2601Z"
                fill="#1E1E1E"
              />
            </svg>

            <p className="font-inter text-[24px] text-[#1E1E1E]/55 leading-[32.234px]">
              Let’s connect
            </p>
          </div>

          <div className="flex flex-col gap-[14px]">
            <h3 className="font-publicSans font-medium text-[36px] text-[#1E1E1E]">
              Partner With Us—Elevate Your Business with Strategic Partnerships
            </h3>

            <p className="font-inter text-[#1E1E1E]/55 text-[24px] leading-[32.234px]">
              Got an idea for the next big thing with Varscon? We’re open to
              partnerships with individuals and businesses of all sizes. Let us
              know and we will be in touch!
            </p>
          </div>

          <Link
            href={"#"}
            className="group product-button-box-shadow w-fit bg-white rounded-[12.412px] p-3 flex gap-[5px] items-center mt-[18px]"
          >
            <p className="font-inter font-medium text-[#272727] text-[21.721px] leading-[31.029px]">
              Contact Us
            </p>
            <div className="text-[#8F8F8F] group-hover:translate-x-2 transition-all">
              <ArrowForwardIcon />
            </div>
          </Link>
        </div>

        <div className="md:w-[40%]">
          <Image
            src={"/assets/home/globes.png"}
            alt="globes_img"
            width={500}
            height={408}
          />
        </div>
      </Container>
    </section>
  );
};

export default ConnectWithUs;
