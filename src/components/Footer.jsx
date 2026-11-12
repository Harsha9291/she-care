import { Mail, Phone, Heart } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from "../assets/PadKINGO Herbal Care Logo.png";

const footerLinks = {
  "Quick Links": [
    { name: "Home", link: "#home" },
    { name: "Our Products", link: "#products" },
    { name: "Our Flavours", link: "#flavours" },
    { name: "Why PadKINGO", link: "#benefits" },
    { name: "Customer Survey", link: "#survey" },
  ],
  "Our Products": [
    { name: "Neem Care", link: "#flavours" },
    { name: "Lavender Fresh", link: "#flavours" },
    { name: "Rose Soft", link: "#flavours" },
    { name: "Turmeric Shield", link: "#flavours" },
    { name: "Aloe Vera & Mint", link: "#flavours" },
  ],
  "Customer Support": [
    { name: "Contact Us", link: "#contact" },
    { name: "FAQs", link: "#faq" },
    { name: "Privacy Policy", link: "#privacy" },
    { name: "Terms & Conditions", link: "#terms" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/" },
  { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/" },
  { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#103B23] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-9 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block">
              <img
                src={logo}
                alt="PadKINGO Herbal Care"
                className="h-12 w-auto max-w-[170px] object-contain rounded-md bg-white p-1"
              />
            </a>

            <p className="mt-3 max-w-[280px] text-sm leading-6 text-green-100/70">
              Nature-inspired care and comfort for every period. Discover
              everyday period care with PadKINGO.
            </p>

            <div className="mt-4 flex gap-2.5">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#B8E98A] hover:bg-[#B8E98A] hover:text-[#103B23]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-3 text-sm font-bold text-white">{heading}</h3>

              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-sm text-green-100/65 transition hover:text-[#C4F18E]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="mailto:hello@padkingo.com"
              className="flex items-center gap-2 text-xs text-green-100/70 hover:text-white"
            >
              <Mail size={14} />
              hello@padkingo.com
            </a>

            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 text-xs text-green-100/70 hover:text-white"
            >
              <Phone size={14} />
              Contact Support
            </a>
          </div>

          <p className="flex items-center gap-1 text-xs text-green-100/70">
            Made with
            <Heart size={12} className="fill-red-400 text-red-400" />
            for Her
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4 border-t border-white/10 pt-4 text-center">
          <p className="text-xs text-green-100/50">
            © {new Date().getFullYear()} PadKINGO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
