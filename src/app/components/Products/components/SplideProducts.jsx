"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardProduct from "./CardProduct.tsx";
export default function SplideProducts() {
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
        gap: 10,
        autoWidth: true,
      }}
    >
      {["1111111111"][0].split("").map((data, index) => (
        <SplideSlide key={index}>
          <CardProduct />
        </SplideSlide>
      ))}
    </Splide>
  );
}
