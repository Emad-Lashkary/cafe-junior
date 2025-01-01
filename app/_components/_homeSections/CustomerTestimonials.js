"use client";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function CustomerTestimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      feedback:
        "Cafe Junior has the best coffee I've ever tasted! The online ordering system is so convenient.",
      image: `https://robohash.org/sarah.png?set=set4`,
    },
    {
      name: "Mark R.",
      feedback:
        "I love the variety of options available. The cappuccino is my favorite!",
      image: `https://robohash.org/mark.png?set=set4`,
    },
    {
      name: "Emily K.",
      feedback: "Great service and amazing coffee. Highly recommend!",
      image: `https://robohash.org/emily.png?set=set4`,
    },
    {
      name: "John D.",
      feedback:
        "The friendly staff and cozy atmosphere make it my go-to coffee spot!",
      image: `https://robohash.org/john.png?set=set4`,
    },
    {
      name: "Lisa T.",
      feedback:
        "Their seasonal specials are a treat! I can't wait for the pumpkin spice latte every fall.",
      image: `https://robohash.org/lisa.png?set=set4`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="mt-16 z-10 p-6 bg-primary-50 rounded-lg shadow-md md:max-w-2xl max-w-80 mx-auto">
      <h2 className="text-3xl font-bold text-primary-800 text-center">
        Customer Testimonials
      </h2>
      <p className="mt-4 text-primary-700 text-center">
        Here&apos;s what our customers are saying:
      </p>
      <div className="relative mt-6 w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center text-center px-4"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s Avatar`}
                className="w-28 h-28 rounded-full bg-primary-100 p-1"
              />
              <p className="mt-4 text-primary-800 italic">
                &quot;{testimonial.feedback}&quot;
              </p>
              <p className="mt-2 font-bold text-primary-800">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-primary-800 bg-primary-200 p-2 rounded-full shadow hover:bg-primary-300"
          onClick={prevTestimonial}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-primary-800 bg-primary-200 p-2 rounded-full shadow hover:bg-primary-300"
          onClick={nextTestimonial}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`h-2 w-2 rounded-full focus:outline-none ${
              currentIndex === index
                ? "bg-primary-800"
                : "bg-primary-300 hover:bg-primary-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CustomerTestimonials;
