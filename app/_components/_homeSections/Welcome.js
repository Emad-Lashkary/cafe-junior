import Link from "next/link";

function Welcome() {
  return (
    <div className="z-10 flex flex-col items-center p-6 bg-primary-800/80 rounded-lg shadow-md animate-zoomIn">
      <h1 className="text-4xl font-bold text-white animate-pulseFast">
        Welcome to Cafe Junior
      </h1>
      <p className="mt-4 text-lg text-primary-50">
        Order your favorite coffee online and enjoy a great cup anytime,
        anywhere.
      </p>
      <Link href="/menu">
        <button className="mt-6 inline-block px-6 py-2 text-lg font-bold text-primary-800 bg-primary-50 rounded-lg shadow-md hover:bg-primary-100 transition-colors duration-300 animate-bounceMini">
          View Menu
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
