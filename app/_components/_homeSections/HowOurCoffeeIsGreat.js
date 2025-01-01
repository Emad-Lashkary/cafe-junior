"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import cafe1 from "@/public/cafe-1.webp";
import cafe2 from "@/public/cafe-2.webp";
import cafe3 from "@/public/cafe-3.webp";

function HowOurCoffeeIsGreat() {
  const [visibleImages, setVisibleImages] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  const items = [
    {
      image: cafe1,
      text: "Our coffee is sourced from the finest plantations, ensuring rich flavors and a delightful aroma in every cup. Each bean is carefully selected and roasted to perfection, providing an exceptional coffee experience.",
    },
    {
      image: cafe2,
      text: "We believe in sustainable farming practices and work directly with farmers to ensure fair trade. Our commitment to quality and ethical sourcing means you can enjoy your coffee with peace of mind.",
    },
    {
      image: cafe3,
      text: "Our expert baristas use state-of-the-art equipment to brew each cup to perfection. Whether you prefer a classic espresso or a unique seasonal blend, you'll find a coffee to love at Cafe Junior.",
    },
  ];

  return (
    <div className="mt-16 z-10 p-6 bg-primary-50/70 rounded-lg shadow-md max-w-3xl mx-auto animate-fadeIn">
      <h2 className="text-3xl font-bold text-primary-800">
        How Our Coffee is Great
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div
              className="relative w-full md:w-1/2 h-48 bg-primary-200 rounded-lg shadow overflow-hidden"
              ref={(el) => (imageRefs.current[index] = el)}
              data-index={index}
            >
              <Image
                src={item.image}
                alt={`Coffee Image ${index + 1}`}
                layout="fill"
                className={`object-cover w-full h-full rounded-lg hover:scale-110 transition-all duration-500 ${
                  visibleImages.includes(index) ? "animate-zoomIn" : "opacity-0"
                }`}
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 text-primary-700">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowOurCoffeeIsGreat;
