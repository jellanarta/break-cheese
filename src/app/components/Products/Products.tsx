import CardProduct from "./components/CardProduct";

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto mt-5 px-5">
        <div className="text-center mb-6">
            <div className="text-base uppercase font-semibold">
                daftar produk
            </div>
            <div className="text-sm text-gray-600">
                Daftar produk yang kami tawarkan untuk anda nikmati
            </div>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-center">
        {["111111"][0].split("").map((data: string, index: number) => (
          <CardProduct key={index} />
        ))}
      </div>
    </div>
  );
}
