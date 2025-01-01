function NewsletterSubscription() {
  return (
    <div className="mt-16 z-10 p-6 bg-primary-50/95 rounded-lg shadow-md max-w-3xl mx-auto animate-fadeIn">
      <h2 className="text-3xl font-bold text-primary-800">
        Join Our Newsletter
      </h2>
      <p className="mt-4 text-primary-700">
        Stay updated with our latest offers and new coffee arrivals:
      </p>
      <form className="mt-6 flex flex-col sm:flex-row">
        <input
          type="email"
          className="flex-1 p-2 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
          placeholder="Enter your email"
        />
        <button className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-primary-800 text-primary-50 rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-300">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterSubscription;
