import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image"; // Importing Image component from next/image
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-20" id="contact">
      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw] text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400">
          Feel free to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-400">
            contact
          </span>{" "}
          me at your convenience.
        </h1>
        <a href="mailto:lokajayandala1@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
