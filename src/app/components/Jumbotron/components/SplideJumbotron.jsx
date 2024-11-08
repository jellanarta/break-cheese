"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
export default function SplideJumbotron() {
  return (
    <Splide
      aria-label="Products"
      options={{
        pagination: false,
        // arrows: false,
        type: "loop",
        autoplay: true,
        speed: 500,
        interval: 3000,
        gap:5,
        mediaQuery: 'min',
        breakpoints:{
          640:{
        autoWidth: true,
          }
        }
      }}
    >
      {["123"][0].split("").map((data, index) => (
        <SplideSlide key={index}>
          <div className="p-0 sm:p-5">
            <div className="w-full sm:max-w-[500px] h-full relative rounded-none sm:rounded-md overflow-hidden">
              <Image
                src={`/images/jumbotron/banner-${data}.png`}
                width={5000}
                height={300}
                alt="data"
              />
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
