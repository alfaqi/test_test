"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default () => {
  const pathname = usePathname();
  const { address } = useAccount();
  const [headerLinks, setHeaderLinks] = useState([]);

  useEffect(() => {
    const showMentorTabFunc = async () => {
      const headerLinks = [
        {
          label: "Certificate",
          route: "/Home/AttestCertification",
        },
        {
          label: "Reputation",
          route: "/Home/AttestMessage",
        },
        {
          label: "My Profile",
          route: "/Profile",
          extraClass: "mr-4",
        },
      ];

      if (!address) {
        setHeaderLinks(headerLinks);
        return;
      }
    };
    showMentorTabFunc();
  }, [address]);

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`flex-center p-medium-16 whitespace-nowrap ${
              isActive ? "active-link" : ""
            } ${link.extraClass || ""}`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
