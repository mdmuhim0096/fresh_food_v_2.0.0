import React from "react";
import TextReder from "./Textrender";
const Contact = () => {
  return (
    <section id="contact" className="mt-24">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
          {/* Info Box */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">Address</h3>
              <p className="text-black dark:text-slate-400">
                123 Food Street, Gulshan, Dhaka 1212, Bangladesh
              </p>
              <a
                href="https://maps.google.com?q=Gulshan+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 text-sm underline"
              >
                View on Google Maps
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">Phone</h3>
              <a href="tel:+8801234567890" className="text-black dark:text-slate-400 hover:text-red-500">
                +880 123-456-7890
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">Email</h3>
              <a href="mailto:info@restaurant.com" className="text-black dark:text-slate-400 hover:text-red-500">
                info@restaurant.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">Opening Hours</h3>
              <p className="text-black dark:text-slate-400">
                Mon–Fri: 12:00 PM – 10:00 PM  
                <br />
                Sat–Sun: 11:00 AM – 11:00 PM
              </p>
            </div>
          </div>

          {/* Simple Contact Form (Optional) */}
          <div className=" p-6 rounded-2xl shadow space-y-4 dark:bg-slate-800">
            <h3 className="text-2xl font-semibold text-black dark:text-slate-400 mb-4">
              Send us a message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-black dark:text-slate-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-black dark:text-slate-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-black dark:text-slate-400"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
