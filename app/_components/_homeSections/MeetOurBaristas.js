"use client";
import useSlidingAnimation from "@/app/_hook/useSlidingAnimation";
import clsx from "clsx";
import Image from "next/image";

function MeetOurBaristas() {
  const { elementsRef, visibleElements } = useSlidingAnimation();

  const getAvatarURL = (seed) => `https://robohash.org/${seed}.png?set=set1`;

  const baristas = [
    {
      name: "Alex",
      description:
        "Alex has been crafting coffee for over 10 years and loves experimenting with new brewing techniques.",
    },
    {
      name: "Jamie",
      description:
        "Jamie is passionate about latte art and has won several local competitions for their designs.",
    },
    {
      name: "Sam",
      description:
        "Sam enjoys sharing coffee knowledge with customers and recommending new blends to try.",
    },
  ];

  return (
    <div className="mt-16 z-10 p-6 bg-primary-50/70 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-primary-800">Meet Our Baristas</h2>
      <p className="mt-4 text-primary-700">
        Get to know the talented baristas behind your favorite coffee:
      </p>
      <div className="mt-6 space-y-4">
        {baristas.map((barista, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className={clsx(
              "p-4 bg-primary-200 rounded-lg shadow flex md:flex-row text-center md:text-start gap-3 md:gap-1 flex-col items-center transition-all duration-500",
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
            <div className="w-24 h-24 bg-primary-300 rounded-full flex-shrink-0">
              <Image
                src={getAvatarURL(barista.name)}
                alt={`${barista.name}'s Avatar`}
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-primary-800">
                {barista.name}
              </h3>
              <p className="mt-2 text-primary-700">{barista.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetOurBaristas;
