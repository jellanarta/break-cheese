import Image from "next/image";

export default function CardProduct() {
  return (
    <div className="ring-1 ring-gray-100  w-[250px]   bg-white rounded-sm overflow-hidden shadow-sm">
      <div className="relative h-[150px] w-full">
        <Image
          src={`/products/1.jpeg`}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
          alt="products 1"
        />
      </div>
      <div className="p-4">
        {/* nama products */}
        <div className="text-sm uppercase font-medium line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, amet.
        </div>
        {/* nama products */}
        {/* harga products */}
        <div className="text-red-700 text-xl font-semibold">Rp. 25.000</div>
        {/* harga products */}
        {/* star products */}
        <div className="flex hidden mt-1">
          {["11111"][0].split("").map((data: string, index: number) => (
            <div className="w-4 h-4" key={index}>
              <Image
                src={`/icons/star-yellow.svg`}
                width={100}
                height={100}
                alt="star"
              />
            </div>
          ))}
        </div>
        {/* star products */}
        {/* add to cart and detail products */}
        <div className="grid grid-cols-2 items-center mt-5 gap-2">
          <div className="py-3 rounded-sm bg-gray-200-600 flex justify-center items-center cursor-pointer ring-1 ring-gray-100 hover:bg-gray-200 hover:ring-blue-300">
            <div className="w-4 h-4">
              <Image
                src={"/icons/add-cart.svg"}
                width={100}
                height={100}
                alt="add to cart"
              />
            </div>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 rounded-sm flex justify-center items-center text-center cursor-pointer  text-xs text-gray-50 uppercase  py-3">
            Detail
          </div>
        </div>
        {/* add to cart and detail products */}
      </div>
    </div>
  );
}
