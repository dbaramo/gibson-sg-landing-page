import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Nav({ navRef }) {
  const [showMobileMenu, setMobileMenu] = useState(false);
  return (
    <nav ref={navRef} className="translate-y-[60%] opacity-0">
      <div className="flex justify-between items-center">
        <a href="https://www.gibson.com/" className="text-white pointer">
          <img src="gibson-logo.svg" />
        </a>
        <div className="hidden md:flex flex-row gap-4 text-white">
          <a
            href="https://www.gibson.com/"
            className="cursor-pointer hover:underline underline-offset-4"
          >
            Home
          </a>
          <a
            href="https://www.gibson.com/en-US/Collection/sg"
            className="cursor-pointer hover:underline underline-offset-4"
          >
            Features
          </a>
          <a
            href="https://www.gibson.com/en-US/Collection/sg"
            className="cursor-pointer hover:underline underline-offset-4"
          >
            Gallery
          </a>
          <a
            href="https://www.gibson.com/en-US/Collection/sg"
            className="cursor-pointer hover:underline underline-offset-4"
          >
            Specs
          </a>
        </div>
        <a
          href="https://www.gibson.com/en-US/Collection/sg"
          className="hidden md:block"
        >
          <button className="border px-5 py-2 rounded-md text-white hover:text-black hover:bg-white hover:border-black">
            Buy it now
          </button>
        </a>
        <div className="md:hidden">
          <Hamburger
            color="#fff"
            size={25}
            distance="sm"
            onToggle={(toggled) => {
              if (toggled) {
                setMobileMenu(true);
              } else {
                setMobileMenu(false);
              }
            }}
          />
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          showMobileMenu ? "" : "hidden"
        } absolute md:hidden flex items-center justify-evenly w-full h-14 text-white border bg-black rounded-md`}
      >
        <a
          href="https://www.gibson.com/en-US/Collection/sg"
          className="cursor-pointer hover:underline underline-offset-4"
        >
          Features
        </a>
        <a
          href="https://www.gibson.com/en-US/Collection/sg"
          className="cursor-pointer hover:underline underline-offset-4"
        >
          Gallery
        </a>
        <a
          href="https://www.gibson.com/en-US/Collection/sg"
          className="cursor-pointer hover:underline underline-offset-4"
        >
          Specs
        </a>
        <a href="https://www.gibson.com/en-US/Collection/sg">
          <button className="px-4 py-1 rounded-md bg-white text-black hover:bg-black hover:text-white hover:border">
            Buy it now
          </button>
        </a>
      </div>
    </nav>
  );
}
