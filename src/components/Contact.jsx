import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const recaptchaRef = useRef(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = (e) => {
    if (!captchaVerified) {
      e.preventDefault();
      toast.error('Please verify reCAPTCHA!');
    } else {
      toast.success('Message sent successfully!');
    }
  };

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-4">
      <Toaster position="top-right" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/anasfurqan643@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://portfolio-anasfurqan.vercel.app/thank-you" />
            <input type="hidden" name="_subject" value="New Portfolio Contact!" />

            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lc2mn0rAAAAABFIidMg-6krEIyJjWHaAQCsjL3O" 
              onChange={() => setCaptchaVerified(true)}
              theme="dark"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition mt-4"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Social Links */}
          <div className="space-y-6 text-gray-300">
            <p>
              You can reach out to me anytime via email or on my social profiles.
              I'm open to freelance projects, collaborations, or just a friendly hello!
            </p>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500" />
              <span>anasfurqan643@gmail.com</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
              <a
                href="https://github.com/Anas-Furqan"
                target="_blank"
                className="hover:text-white text-gray-400 flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anas-furqan/"
                target="_blank"
                className="hover:text-white text-gray-400 flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://wa.me/+923174724801"
                target="_blank"
                className="hover:text-white text-gray-400 flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
