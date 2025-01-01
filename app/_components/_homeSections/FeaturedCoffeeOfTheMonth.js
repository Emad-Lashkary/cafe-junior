import Link from "next/link";

function FeaturedCoffeeOfTheMonth() {
  return (
    <div className="mt-16 z-10 p-6 bg-primary-50/70 rounded-lg shadow-md max-w-3xl mx-auto animate-fadeIn">
      <h2 className="text-3xl font-bold text-primary-800">
        Featured Coffee of the Month
      </h2>
      <p className="mt-4 text-primary-700">
        Try our featured coffee of the month:
      </p>
      <div className="mt-6 p-4 bg-primary-200/90 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-primary-800">
          Pumpkin Spice Latte
        </h3>
        <p className="mt-2 text-primary-700">
          A delightful blend of pumpkin, cinnamon, nutmeg, and clove, topped
          with whipped cream and a sprinkle of pumpkin pie spice.
        </p>
        <Link href="/menu">
          <button className="mt-4 px-4 py-2 bg-primary-800 text-primary-50 rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-300 animate-bounceMini">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCoffeeOfTheMonth;
