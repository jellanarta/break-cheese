import Image from "next/image";
import CardProduct from "./components/CardProduct";
import SplideProducts from "./components/SplideProducts";
export default function Products() {
  return (
    <div className="max-w-6xl mx-auto mt-5 grid grid-cols-1 gap-6 px-5">
      {/* <div className="text-center mb-6">
        <div className="text-base uppercase font-semibold">daftar produk</div>
        <div className="text-sm text-gray-600">
          Daftar produk yang kami tawarkan untuk anda nikmati
        </div>
      </div> */}
      {/* <DetailProducts /> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 justify-center">
        {["1111"][0].split("").map((data: string, index: number) => (
          <CardProduct key={index} />
        ))}
      </div> */}

      <div>
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full mb-6">
          <div className="">
            <div className="text-base uppercase font-semibold">Donat</div>
            <div className="text-sm text-gray-600">
              Makanan berbentuk lingkaran terbuat dari adonan tepung yang
              digoreng renyah di luar dan lembut di dalam.
            </div>
          </div>
          <div className="flex justify-start md:justify-end h-full items-center gap-4">
            <div className="flex">
              <div className="p-3 text-xs uppercase ring-1 ring-gray-200 bg-gray-50 rounded-sm px-4 cursor-pointer hover:ring-blue-300">
                Lihat semua
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-10 h-10 flex justify-center items-center bg-gray-50 rounded-full shadow-sm cursor-pointer hover:ring-1 hover:ring-gray-200">
                <div className="w-5 h-5">
                  <Image
                    src={"/icons/arrow-prev.svg"}
                    width={100}
                    height={100}
                    alt="prev"
                  />
                </div>
              </div>
              <div className="w-10 h-10 flex justify-center items-center bg-gray-50 rounded-full shadow-sm cursor-pointer hover:ring-1 hover:ring-gray-200">
                <div className="w-5 h-5">
                  <Image
                    src={"/icons/arrow-next.svg"}
                    width={100}
                    height={100}
                    alt="prev"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SplideProducts />
        </div>
      </div>
      <div>
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full mb-6">
          <div className="">
            <div className="text-base uppercase font-semibold">Donat</div>
            <div className="text-sm text-gray-600">
              Makanan berbentuk lingkaran terbuat dari adonan tepung yang
              digoreng renyah di luar dan lembut di dalam.
            </div>
          </div>
          <div className="flex justify-start md:justify-end h-full items-center gap-4">
            <div className="flex">
              <div className="p-3 text-xs uppercase ring-1 ring-gray-200 bg-gray-50 rounded-sm px-4 cursor-pointer hover:ring-blue-300">
                Lihat semua
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-10 h-10 flex justify-center items-center bg-gray-50 rounded-full shadow-sm cursor-pointer hover:ring-1 hover:ring-gray-200">
                <div className="w-5 h-5">
                  <Image
                    src={"/icons/arrow-prev.svg"}
                    width={100}
                    height={100}
                    alt="prev"
                  />
                </div>
              </div>
              <div className="w-10 h-10 flex justify-center items-center bg-gray-50 rounded-full shadow-sm cursor-pointer hover:ring-1 hover:ring-gray-200">
                <div className="w-5 h-5">
                  <Image
                    src={"/icons/arrow-next.svg"}
                    width={100}
                    height={100}
                    alt="prev"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SplideProducts />
        </div>
      </div>
    </div>
  );
}

function DetailProducts() {
  return (
    <div>
      <div>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-scale-animation-modal"
          data-hs-overlay="#hs-scale-animation-modal"
        >
          Open modal
        </button>
        <div
          id="hs-scale-animation-modal"
          className="hs-overlay hidden size-full fixed top-0 start-0 z-[8000] overflow-x-hidden overflow-y-auto pointer-events-none"
          role="dialog"
          tabIndex={-1}
          aria-labelledby="hs-scale-animation-modal-label"
        >
          <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
              <div className="flex justify-between items-center py-3 px-4 border-b">
                <h3
                  id="hs-scale-animation-modal-label"
                  className="font-medium text-gray-800 text-sm uppercase"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis, debitis.
                </h3>
                <button
                  type="button"
                  className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Close"
                  data-hs-overlay="#hs-scale-animation-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <p className="mt-1 text-gray-800">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-overlay="#hs-scale-animation-modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
