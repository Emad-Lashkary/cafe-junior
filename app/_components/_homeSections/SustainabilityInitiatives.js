"use client";
import useSlidingAnimation from "@/app/_hook/useSlidingAnimation";
import clsx from "clsx";

function SustainabilityInitiatives() {
  const { elementsRef, visibleElements } = useSlidingAnimation();

  const initiatives = [
    {
      title: "Eco-Friendly Packaging",
      description:
        "We use biodegradable and recyclable packaging materials to reduce our environmental footprint.",
    },
    {
      title: "Fair Trade Practices",
      description:
        "We work directly with farmers to ensure fair wages and sustainable farming practices.",
    },
    {
      title: "Energy Efficient Operations",
      description:
        "Our cafes and roasting facilities use energy-efficient equipment and renewable energy sources.",
    },
  ];

  return (
    <div className="mt-16 z-10 p-6 bg-primary-50/70 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-primary-800">
        Sustainability Initiatives
      </h2>
      <p className="mt-4 text-primary-700">
        At Cafe Junior, we&apos;re committed to sustainability. Here are some of
        our initiatives:
      </p>
      <div className="mt-6 space-y-4">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className={clsx(
              "p-4 bg-primary-200 rounded-lg shadow transition-all duration-500",
              {
                "animate-slideInLeft opacity-100":
                  visibleElements.includes(index) && index % 2 === 0,
                "animate-slideInRight opacity-100":
                  visibleElements.includes(index) && index % 2 !== 0,
                "animate-slideOutLeft opacity-0":
                  !visibleElements.includes(index) && index % 2 === 0,
                "animate-slideOutRight opacity-0":
                  !visibleElements.includes(index) && index % 2 !== 0,
              }
            )}
          >
            <h3 className="text-2xl font-bold text-primary-800">
              {initiative.title}
            </h3>
            <p className="mt-2 text-primary-700">{initiative.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SustainabilityInitiatives;
