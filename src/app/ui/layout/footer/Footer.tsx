import { siteConfig } from "@/config/site"

import { mainLinks } from "./components/links"

import { Copyright } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <div className="border-t flex flex-col gap-4 p-4">
      <div className="relative w-24 aspect-[3/1]">
        <Image
          src={siteConfig.logo}
          fill
          className="object-contain"
          alt={`${siteConfig.name} logo`}
        />
      </div>

      <ul className="flex flex-col gap-3 text-neutral-500 text-lg">
        {mainLinks.map((link) => {
          return (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col items-center border-t p-4 pb-0 md:flex-row md:justify-between">
        <p className="flex flex-row gap-2 items-center text-neutral-500">
          <span className="text-sm">
            <Copyright size={15} />
          </span>{" "}
          <span>2025. All rights reserved.</span>
        </p>
        <a href={siteConfig.social.github} target="_blank" className="text-neutral-500">View the source</a>
        <a>Created by <span className="font-bold">Alireza Moradi</span></a>
      </div>
    </div>
  );
}

export default Footer