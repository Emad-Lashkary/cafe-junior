"use client";
import useSlidingAnimation from "@/app/_hook/useSlidingAnimation";
import clsx from "clsx";

function CoffeeBrewingTips() {
  const { elementsRef, visibleElements } = useSlidingAnimation();

  const tips = [
    {
      title: "Tip 1: Use Fresh Beans",
      description:
        "Always use freshly roasted coffee beans to ensure maximum flavor. Store your beans in an airtight container away from light, heat, and moisture.",
    },
    {
      title: "Tip 2: Grind Just Before Brewing",
      description:
        "Grind your coffee just before brewing to preserve the aroma and flavor. Use a burr grinder for a consistent grind size.",
    },
    {
      title: "Tip 3: Measure Your Coffee and Water",
      description:
        "Use the right coffee-to-water ratio for the best taste. A general guideline is 1 to 2 tablespoons of coffee for every 6 ounces of water.",
    },
  ];

  return (
    <div className="mt-16 z-10 p-6 bg-primary-50/70 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-primary-800">
        Coffee Brewing Tips
      </h2>
      <p className="mt-4 text-primary-700">
        Perfect your coffee brewing skills with these expert tips:
      </p>
      <div className="mt-6 space-y-4">
        {tips.map((tip, index) => (
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
            <h3 className="text-2xl font-bold text-primary-800">{tip.title}</h3>
            <p className="mt-2 text-primary-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeeBrewingTips;
