import React from "react";
import { footerData } from "@/data";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 mt-12 p-8 lg:p-16 text-footer text-sm lg:text-base">
      {/* Informations */}
      <div className="flex flex-col lg:flex-row items-start justify-around gap-6">
        <div className="flex-2 flex flex-col gap-4">
          <Image src={footerData.logo} alt="logo" className="w-[140px]" />

          <p className="max-w-sm">{footerData.description}</p>

          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>

        {footerData.sections.map((section, index) => (
          <div className="flex-1 flex flex-col gap-4" key={index}>
            <h3 className="text-xl text-grey font-semibold">
              {section.header}
            </h3>
            <div className="flex flex-col gap-2">
              {section.items.map((item, index) => (
                <Link href={item.link} key={index}>
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl text-grey font-semibold">
            {footerData.contact.header}
          </h3>
          <p>{footerData.contact.address}</p>
          <p>Phone: {footerData.contact.phone}</p>
          <p>{footerData.contact.email}</p>

          <div className="flex gap-2">
            {footerData.contact.socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="w-[30px] h-[30px] rounded-full bg-secondary flex items-center justify-center"
              >
                <Image src={social.icon} alt="social link" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Separator />
      {/* Policies */}

      <div className="flex flex-col lg:justify-between lg:flex-row gap-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {footerData.policies.map((policy, index) => (
            <Link href={policy.link} key={index}>
              {policy.name}
            </Link>
          ))}
        </div>

        <p>{footerData.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
