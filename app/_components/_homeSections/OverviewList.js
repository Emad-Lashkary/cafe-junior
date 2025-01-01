import Link from "next/link";

function OverviewList() {
  return (
    <div className="mt-10 z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="p-4 bg-primary-50/90 rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-primary-800">Our Coffees</h2>
        <p className="mt-2 text-primary-700">
          Explore our wide range of coffee options, from classic espresso to
          unique seasonal flavors.
        </p>
        <Link href="/coffees">
          <button className="block mt-4 text-primary-600 hover:text-primary-800 transition-colors duration-300">
            Learn More
          </button>
        </Link>
      </div>
      <div className="p-4 bg-primary-50 rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-primary-800">Special Offers</h2>
        <p className="mt-2 text-primary-700">
          Check out our special offers and discounts for regular customers.
        </p>
        <Link href="/offers">
          <button className="block mt-4 text-primary-600 hover:text-primary-800 transition-colors duration-300">
            Learn More
          </button>
        </Link>
      </div>
      <div className="p-4 bg-primary-50 rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-primary-800">Contact Us</h2>
        <p className="mt-2 text-primary-700">
          Have any questions or feedback? Get in touch with us!
        </p>
        <Link href="/contact">
          <button className="block mt-4 text-primary-600 hover:text-primary-800 transition-colors duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OverviewList;
