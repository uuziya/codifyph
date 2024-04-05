import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";

function page() {
  return (
    <div className=" glassy-overlay ">
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto   w-full ">
        <div className="bg-neutral-600 rounded-full ">
        </div>
        <h1 className="font-RubikExtraBold text-9xl text-center   my-9 btn-shine">
          Codifyph
        </h1>

        <p className="text-neutral-400 lg:max-w-lg text-center font-RubikRegular ">
        Your ultimate web development partner
        </p>
      </div>
      <div className=" flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
          <Link href={"/dashboard"}>
            <span>
              <PiHouseLight className="text-3xl" />
            </span>
          </Link>
          <Link href={"https://github.com"}>
          <span>
            <PiGithubLogoLight className="text-3xl" />
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
