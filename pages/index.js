import { TypeWriterOnce } from "/components/Commons";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
export default () => {
  const features = [
    "Credential Verification",
    "Background Checks",
    "Developer Reputation",
  ];

  return (
    <main className="h-full flex flex-col justify-start items-center text-white pt-10 pb-10">
      <div>
        <Image src="/logo2.png" width={128} height={38} alt="Blockbadge logo" />
        <h1 className="text-3xl font-bold md:text-5xl">
          <TypeWriterOnce text=" BlockBadge Platform" />
        </h1>
        <h3 className="text-sm md:text-xl">
          Proof of Excellence, Verified Securely
        </h3>
      </div>
      <div className="text-sm md:text-xl text-center mt-4 mx-auto">
        <h3 className="font-bold mb-2">
          BlockBadge is an all-in-one recruiting solution for candidates that
          includes:
        </h3>
        <ul className="text-center">
          {features.map((feature, index) => (
            <li key={index} className="flex justify-center items-center gap-2">
              <span role="img" aria-label="Check">
                ✅
              </span>
              <TypeWriterOnce text={feature} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button
          asChild
          className="md:w-58 w-full py-6 my-2 text-xl text-center button"
        >
          <Link href="/Home/AttestCertification">So Let's Get Started</Link>
        </Button>
      </div>
      <div>
        <Button
          asChild
          className="md:w-98 w-full py-6 my-2 text-xl text-center button"
          variant="secondary"
        >
          <a href="mailto:support@blockbadge.net?subject=Certificate Attestation Inquiry">
            Need Certificate Attestation? Contact Us
          </a>
        </Button>
      </div>
      <div className="">
        <Label className="px-2">
          * By using our site you are agree to our{" "}
          <Link
            href={"https://bcamp.dev/privacy-notice"}
            target="_blank"
            className="hover:text-blue-500 underline"
          >
            terms and conditions
          </Link>
        </Label>
      </div>
    </main>
  );
};
