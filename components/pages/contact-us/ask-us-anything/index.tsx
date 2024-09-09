"use client";

import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";
import ReasonForContactingUs from "@/components/ui/reason-for-contacting-us";
import { useState } from "react";

const AskUsAnything = () => {
  const [reason, setReason] = useState("");
  const reasons = ["To make enquiry", "To hire a service"];

  function submitFn(e: React.FormEvent) {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white rounded-b-[40px] md:rounded-b-[80px] border-b-[1px] border-b-[#94A3B8]">
      <Container className="flex flex-col items-center gap-[68px] md:gap-[76px] pt-[100px] pb-[34px] md:pb-[52px] md:pt-[200px]">
        <div className="w-full max-w-[835px] flex flex-col gap-3">
          <h1 className="font-publicSans font-semibold text-[#1E1E1E] text-center text-[36px] md:text-[64px]">
            Ask us anything
          </h1>

          <p className="font-inter text-center text-[#1E1E1E]/55 text-[16px] md:text-[24px] leading-[21.49px] md:leading-[32.234px]">
            Ready to join us on our journey to revolutionize technology? Or got
            a burning question for us? Send us a message with the appropriate
            tag and we will get back to you.
          </p>
        </div>

        <form
          onSubmit={submitFn}
          className="w-full max-w-[631px] flex flex-col gap-[14.67px] md:gap-6 p-[14.67px] md:p-6"
        >
          <div className="w-full flex flex-col gap-[14.67px] md:gap-6 p-[14.67px] md:p-6 bg-[#F5F5F5] rounded-[14.667px] md:rounded-[24.038px]">
            <label
              htmlFor="name"
              className="font-publicSans font-bold text-[12.833px] md:text-[21.033px] text-[#18181B]"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Please input your name"
              className="font-publicSans font-semibold text-[14.667px] md:text-[24.038px] text-[#18181B] placeholder:text-[#E3E3E3] bg-transparent focus:outline-none"
            />
          </div>

          <div className="w-full flex flex-col gap-[14.67px] md:gap-6 p-[14.67px] md:p-6 bg-[#F5F5F5] rounded-[14.667px] md:rounded-[24.038px]">
            <label
              htmlFor="email"
              className="font-publicSans font-bold text-[12.833px] md:text-[21.033px] text-[#18181B]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Please input your email"
              className="font-publicSans font-semibold text-[14.667px] md:text-[24.038px] text-[#18181B] placeholder:text-[#E3E3E3] bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full flex flex-col gap-[14.67px] md:gap-6 bg-[#F5F5F5] rounded-[14.667px] md:rounded-[24.038px]">
              <ReasonForContactingUs
                setDropValue={setReason}
                dropData={reasons}
                initialState={reason}
              />
            </div>

            <small className="font-publicSans text-[#1E1E1E]/70 text-[12px] md:text-[16px] px-5">
              Please add a short tag for your reason*
            </small>
          </div>

          <div className="w-full flex flex-col gap-[14.67px] md:gap-6 p-[14.67px] md:p-6 bg-[#F5F5F5] rounded-[14.667px] md:rounded-[24.038px]">
            <label
              htmlFor="how-can-we-help"
              className="font-publicSans font-bold text-[12.833px] md:text-[21.033px] text-[#18181B]"
            >
              How can we help?
            </label>
            <textarea
              //   type="textarea"
              rows={5}
              name="how-can-we-help"
              id="how-can-we-help"
              required
              placeholder="Please tell us how we can help you"
              className="font-publicSans font-semibold text-[14.667px] md:text-[24.038px] text-[#18181B] placeholder:text-[#E3E3E3] bg-transparent focus:outline-none"
            />
          </div>

          <button
            // disabled={true}
            className="disabled:opacity-30 bg-[#00CA72] rounded-[12px] p-[13px] md:p-[22px] font-inter font-semibold text-[#1E1E1E]/90 text-[14.667px] md:text-[24.038px]"
          >
            Send
          </button>
        </form>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[13px] md:gap-[22px]">
          <p className="font-publicSans text-[16px] md:text-[32px] text-[#1E1E1E]/80">
            To connect with our team, please email us at:
          </p>

          <p className="font-publicSans font-medium text-[#1E1E1E] text-[20px] md:text-[32px] underline decoration-[2px] decoration-[#1E1E1E]">
            Varscon@gmail.com
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AskUsAnything;
