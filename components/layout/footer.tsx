import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Products",
    links: [
      { linkText: "Motherbot", linkUrl: "/products/motherbot" },
      { linkText: "Varscon", linkUrl: "/products/varscon" },
    ],
  },

  {
    title: "Resources",
    links: [
      { linkText: "Guides", linkUrl: "/guides" },
      { linkText: "Blogs", linkUrl: "/blogs" },
    ],
  },

  {
    title: "Careers",
    links: [
      { linkText: "Life at varscon", linkUrl: "/" },
      { linkText: "Open positions", linkUrl: "/" },
    ],
  },

  {
    title: "About us",
    links: [
      { linkText: "Our story", linkUrl: "/" },
      { linkText: "Motherbot", linkUrl: "/" },
      { linkText: "Varscon services", linkUrl: "/" },
    ],
  },
];

const footerSocials = [
  { logoUrl: "/assets/icons/twitter.svg", alt: "twitter_logo", href: "/" },
  { logoUrl: "/assets/icons/linkedin.svg", alt: "linkedin_logo", href: "/" },
  { logoUrl: "/assets/icons/instagram.svg", alt: "instagram_logo", href: "/" },
  { logoUrl: "/assets/icons/facebook.svg", alt: "facebook_logo", href: "/" },
];

const Footer = () => {
  return (
    <section className="w-full flex items-center justify-center pt-[50px] relative ">
      <div className="absolute w-full bottom-0 md:top-0 left-0 z-0">
        <Image
          src={"/assets/footer-bg.png"}
          alt="varscon_footer"
          width={1800}
          height={70}
          className="w-full"
        />
      </div>

      <Container className="z-10 flex flex-col items-center gap-[20px] md:gap-[120px]">
        <section className="w-full flex flex-col md:flex-row justify-between items-start gap-[52px] lg:gap-[98px]">
          <div className="flex flex-col gap-[38.64px]">
            <Link href={"/"}>
              <Image
                src={"/assets/varscon-logo.svg"}
                alt="varscon_logo"
                width={135}
                height={70}
              />
            </Link>

            <div className="flex gap-[7px] justify-start">
              {footerSocials.map((social, index) => (
                <Link key={index} href={social.href}>
                  <Image
                    src={social.logoUrl}
                    alt={social.alt}
                    width={40}
                    height={40}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-10 md:gap-[90px]">
            {footerLinks.map((footer, index) => (
              <div key={index} className="flex flex-col gap-3 items-start">
                <p className="font-publicSans text-[24px] text-[#1E1E1E]">
                  {footer.title}
                </p>

                <div className="flex flex-col gap-3 items-start">
                  {footer.links.map((linkData, index) => (
                    <Link key={index} href={linkData.linkUrl}>
                      <p className="font-inter text-[20px] leading-[26.862px] text-[#1E1E1E]/55">
                        {linkData.linkText}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <small className="font-inter text-sm text-[#5C5C5C]">
          © 2024 Varscon. All rights reserved. © 2024 Varscon. All rights
          reserved.
        </small>
      </Container>
    </section>
  );
};

export default Footer;
