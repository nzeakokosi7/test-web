import Container from "@/components/layout/container";
import NavigateButton from "@/components/ui/navigate-button";

const ContactUs = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white rounded-b-[40px] md:rounded-b-[80px] border-b-[1px] border-b-[#94A3B8]">
      <Container className="flex flex-col items-center gap-[68px] md:gap-[76px] pt-[100px] pb-[34px] md:pb-[52px] md:pt-[200px]">
        <div className="w-full max-w-[835px] flex flex-col gap-3">
          <h1 className="font-publicSans font-semibold text-[#1E1E1E] text-center text-[36px] md:text-[64px]">
            Contact Us
          </h1>

          <p className="font-inter text-center text-[#1E1E1E]/55 text-[16px] md:text-[24px] leading-[21.49px] md:leading-[32.234px]">
            It’s time to transform your ideas into reality. Whether you’re
            looking to revolutionize your industry or simply curious about our
            services, we’re here to listen, guide, and collaborate.
          </p>
        </div>

        <div className="contact-us-box-shadow flex flex-col md:flex-row gap-[31px] md:gap-[93px] rounded-[18px] border-b-[5px] border-b-[#94A3B8] py-[42px] px-[15px] md:px-[50px]">
          <div className="w-full max-w-[488px] flex flex-col gap-3">
            <h2 className="font-publicSans font-medium text-[#1E1E1E]/95 text-[32px] md:text-[40px]">
              Book Consultations
            </h2>

            <p className="font-inter text-[#1E1E1E]/55 text-[16px] md:text-[20px] leading-[21.49px] md:leading-[26.862px] mb-[10px]">
              Unlock your business’s full potential with our expert guidance.
              Our consultation sessions are tailored to dive deep into your
              unique challenges and aspirations, providing you with actionable
              insights and innovative solutions.
            </p>

            <NavigateButton url="#" text="Book consultation" />
          </div>

          <div className="w-full h-[1px] md:w-[1px] md:h-[154px] bg-[#94A3B8A3]/65"></div>

          <div className="w-full max-w-[488px] flex flex-col gap-3">
            <h2 className="font-publicSans font-medium text-[#1E1E1E]/95 text-[32px] md:text-[40px]">
              Ask Us Anything
            </h2>

            <p className="font-inter text-[#1E1E1E]/55 text-[16px] md:text-[20px] leading-[21.49px] md:leading-[26.862px] mb-[10px]">
              Got a burning question? Looking to explore partnership
              opportunities? Or perhaps you’re just curious about how we can
              elevate your business? We’re all ears!
            </p>

            <NavigateButton
              url="/contact-us/ask-us-anything"
              text="Schedule a call"
            />
          </div>
        </div>

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

export default ContactUs;
