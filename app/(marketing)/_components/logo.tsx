import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        className="dark:hidden"
        height={40}
        width={40}
        src={"/logo.svg"}
        alt="Logo"
      />
      <Image
        className="hidden dark:block"
        height={40}
        width={40}
        src={"/logo-dark.svg"}
        alt="Logo"
      />
      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
};
