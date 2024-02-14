import Link from "next/link";
import Image from "next/image";
export default () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={128} height={38} />
        </Link>
        <p>2024 Blockbadge Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};
