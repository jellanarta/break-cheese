import Image from "next/image";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto p-5 mt-8">
      <div>
        <h2 className="text-xl text-center font-medium uppercase">
          Layanan Kami
        </h2>
        <div className="text-sm text-center">
          Kami berkomitmen untuk memberikan kenyamanan dan pengalaman terbaik
          bagi pelanggan kami dengan layanan berikut
        </div>
      </div>

      <div className="flex gap-5 mt-7 justify-center flex-wrap">
        <ChildLayanan icon="/icons/chat.svg" title="Respon Cepat" description="Hubungi kami kapan saja, dan kami akan memberikan jawaban secepat mungkin." />
        <ChildLayanan icon="/icons/delivery.svg" title="Pengiriman Cepat" description="Kami menyediakan layanan pengiriman cepat untuk memastikan Anda dapat menikmati makanan kami kapan saja dan di mana saja." />
        <ChildLayanan icon="/icons/cod.svg" title="Bayar di Tempat" description="Lakukan pembayaran langsung kepada kurir saat pesanan tiba." />
      </div>
    </div>
  );
}

function ChildLayanan({icon,title,description}:{icon:string,title:string,description:string}) {
  return (
    <div className="flex flex-col items-center bg-white ring-1 ring-gray-100 p-6 rounded-sm w-[300px] shadow-sm">
      <div className="w-10 h-10">
        <Image src={icon} width={100} height={100} alt="ikon" />
      </div>
      <h3 className="text-base mt-2 uppercase font-semibold text-gray-900 mb-">
        {title}
      </h3>
      <p className="text-gray-600 text-sm text-center">
        {description}
      </p>
    </div>
  );
}
