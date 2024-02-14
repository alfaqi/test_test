import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { useEffect } from "react";
import { ethers } from "ethers";

export default () => {
  useEffect(() => {
    const checkChainID = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const chainID = (await provider.getNetwork()).chainId;
      console.log(chainID);
      if (chainID.toString() != "10") {
        alert("Please switch to OP Mainnet.");
        return;
      }
    };
    checkChainID();
  }, []);
  return (
    <header className="w-full border-b mb-4">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/logo.png"
            width={128}
            height={38}
            alt="Blockbadge logo"
          />
        </Link>

        {/* <nav className="flex-between gap-4 w-full max-w-xl">
          <NavItems />
        </nav> */}
        <div>
          <w3m-button />
        </div>
      </div>
    </header>
  );
};
