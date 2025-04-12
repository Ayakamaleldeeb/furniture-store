"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [formStatus, setFormStatus] = useState(""); // For displaying success or error messages
  // const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // try {
    //   setFormStatus("Submitting...");
    //   setTimeout(() => {
    //     setFormStatus("Thank you! Your message has been sent.");
    //     setFormData({ name: "", email: "", message: "" });
    //   }, 2000);
    // } catch (error) {
    //   setFormStatus("Something went wrong. Please try again later.");
    // }
  };

  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact with Us</h2>
          <p className="text-gray-600 mb-8">
            Have any questions or concerns? Feel free to reach out to us using the form below.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md shadow hover:bg-gray-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
          {/* {formStatus && (
            <div className="mt-4 text-center text-sm text-green-600">
              {formStatus}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}