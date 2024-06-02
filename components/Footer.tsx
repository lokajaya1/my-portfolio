import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image"; // Importing Image component from next/image
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 bg-black" id="contact">
      {/* background grid */}
      <div className="absolute left-0 bottom-0 w-full min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Feel free to <span className="text-purple">contact</span> me at
          your convenience.
        </h1>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16 space-y-4 md:space-y-0">
        <p className="text-white-200 md:text-base text-sm font-light">
          Copyright © 2024 Lokajaya Andala
        </p>
        <div className="flex items-center space-x-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple transition"
            >
              <Image
                src={info.img}
                alt={info.alt || "icon"}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
