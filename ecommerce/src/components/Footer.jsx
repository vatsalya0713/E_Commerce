function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1 */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">ONLINE STORE</h5>
            <ul className="space-y-2 text-sm">
              <li>Men Clothing</li>
              <li>Women Clothing</li>
              <li>Men Accessories</li>
              <li>Women Accessories</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">HELPFUL LINKS</h5>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">BRAND PARTNERS</h5>
            <ul className="space-y-2 text-sm">
              <li>Zara</li>
              <li>Pantaloons</li>
              <li>Levi's</li>
              <li>UCB</li>
              <li>+ Many More</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">ADDRESS</h5>
            <ul className="space-y-2 text-sm">
              <li>Building 101</li>
              <li>Central Avenue</li>
              <li>LA - 902722</li>
              <li>United States</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm">
            © 2024 <span className="font-bold text-blue-400">ShopLane</span> | Designed by <strong>vatsalya bhardwaj</strong>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-xl transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
