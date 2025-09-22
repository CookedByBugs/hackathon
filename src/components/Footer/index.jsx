import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bar text-white mt-auto">
      <div className="w-[90%] mx-auto py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Donors Hub</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Empowering communities through compassion, transparency, and action.
            Together, we make every donation count.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-gray-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/campaigns" className="hover:text-gray-300 transition">
                Campaigns
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:text-gray-300 transition">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact</h3>
          <p className="text-sm">📍 Faisalabad, Pakistan</p>
          <p className="text-sm">📧 support@donorshub.org</p>
          <p className="text-sm">📞 +92 300 1234567</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-bar-dark text-center py-4 border-t border-white/20 text-sm">
        &copy; {new Date().getFullYear()} Donors Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
