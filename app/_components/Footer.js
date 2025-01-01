import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100 py-12 mt-32 relative">
      {/* Highlighted Logo Section */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <img
          src="logo.png"
          alt="Logo"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-4 shadow-xl transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-6 uppercase tracking-wider border-b-2 border-primary-500 w-fit pb-1">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-3 text-primary-500" />
              +98 (234) 567-8900
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-primary-500" />
              support@gmail.com
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-primary-500" />
              Mashhad, Vakil Abad 1/1
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-6 uppercase tracking-wider border-b-2 border-primary-500 w-fit pb-1">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="/menu"
                className="hover:text-primary-500 transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="/cart"
                className="hover:text-primary-500 transition-colors"
              >
                Cart
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="hover:text-primary-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-primary-500 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-6 uppercase tracking-wider border-b-2 border-primary-500 w-fit pb-1">
            Follow Us
          </h4>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-primary-500 transition-colors"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-primary-500 transition-colors"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-primary-500 transition-colors"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-primary-500 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-primary-700 pt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cafe Junior. All rights reserved. |
          Designed with ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
