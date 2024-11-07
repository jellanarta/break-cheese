import Image from "next/image";

export default function TopMenu() {
  return (
    <div className="ring-1 ring-gray-200  bg-white w-full sticky top-0 z-[1000]">
      <div className="max-w-6xl mx-auto h-[60px] md:h-[70px] flex justify-between items-center px-5">
        <div>
          <div className="w-[80px]">
            <Image
              src={"/images/logo.jpg"}
              width={200}
              height={100}
              alt="logo website"
              priority
            />
          </div>
        </div>
        <div
          className="bg-white hover:bg-gray-100 transition-colors rounded-full w-10 h-10 flex md:hidden justify-center items-center cursor-pointer"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-offcanvas-example"
          aria-label="Toggle navigation"
          data-hs-overlay="#hs-offcanvas-example"
        >
          <div className="w-5 h-5">
            <Image
              src={"/icons/menu.svg"}
              width={100}
              height={100}
              alt="ikon menu"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
