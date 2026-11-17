import { Mail, Phone, Heart, Download } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import QRCode from "qrcode";
import { useState } from "react";
import logo from "../assets/PadKINGO Herbal Care Packagdding.png";

const footerLinks = {
  "Quick Links": [
    { name: "Home", link: "#home" },
    { name: "Our Products", link: "#products" },
    { name: "Our Flavours", link: "#flavours" },
    { name: "Why PadKINGOO", link: "#benefits" },
    { name: "Customer Survey", link: "#survey" },
  ],
  "Our Products": [
    { name: "Neem Care", link: "#flavours" },
    { name: "Lavender Fresh", link: "#flavours" },
    { name: "Rose Soft", link: "#flavours" },
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
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadQR = async () => {
    try {
      setIsDownloading(true);

      // Production URL - direct survey page
      const productionUrl = "https://she-care-frontend-url.onrender.com/#survey";
      const surveyUrl = productionUrl;

      console.log("QR Survey URL:", surveyUrl);

      // Create canvas for QR with text
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // QR size
      const qrSize = 500;
      const padding = 40;
      const textHeight = 80;
      const canvasSize = qrSize + padding * 2 + textHeight;

      canvas.width = canvasSize;
      canvas.height = canvasSize;

      // White background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvasSize, canvasSize);

      // Generate QR code
      const qrCanvas = await QRCode.toCanvas(surveyUrl, {
        errorCorrectionLevel: "H",
        type: "image/png",
        quality: 0.95,
        margin: 1,
        width: qrSize,
        color: {
          dark: "#103B23",
          light: "#FFFFFF",
        },
      });

      // Draw QR code on canvas
      ctx.drawImage(qrCanvas, padding, padding);

      // Add PadKINGOO text below QR
      ctx.fillStyle = "#103B23";
      ctx.font = "bold 48px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("PadKINGOO", canvasSize / 2, padding + qrSize + 50);

      // Add subtitle
      ctx.font = "16px Arial, sans-serif";
      ctx.fillStyle = "#666666";
      ctx.fillText("Scan to Share Your Feedback", canvasSize / 2, padding + qrSize + 75);

      // Download QR with text
      canvas.toBlob((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "PadKINGOO-Survey-QR.png";
        link.click();
        URL.revokeObjectURL(link.href);
      });

    } catch (error) {
      console.error("QR Code generation error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <footer className="bg-[#103B23] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-9 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block">
              <img
                src={logo}
                alt="PadKINGOO  Herbal Care"
                className="h-12 w-auto max-w-[170px] object-contain rounded-md bg-white p-1"
              />
            </a>

            <p className="mt-3 max-w-[280px] text-sm leading-6 text-green-100/70">
              Nature-inspired care and comfort for every period. Discover
              everyday period care with PadKINGOO .
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
              href="mailto:hello@PadKINGOO.com"
              className="flex items-center gap-2 text-xs text-green-100/70 hover:text-white"
            >
              <Mail size={14} />
              hello@PadKINGOO .com
            </a>

            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 text-xs text-green-100/70 hover:text-white"
            >
              <Phone size={14} />
              Contact Support
            </a>

            <button
              onClick={handleDownloadQR}
              disabled={isDownloading}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B8E98A] to-[#A8D87A] px-5 py-2 text-xs font-bold text-[#103B23] shadow-lg transition hover:shadow-xl hover:scale-105 disabled:opacity-70"
              title="Download QR code with PadKINGOO Survey"
            >
              <Download size={16} />
              {isDownloading ? "Generating..." : "Download QR"}
            </button>
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
            © {new Date().getFullYear()} PadKINGOO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
