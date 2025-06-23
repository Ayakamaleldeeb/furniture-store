"use client";

import { motion } from "framer-motion";

const Ourservices = () => {
  const services = [
    {
      title: "Finest Furniture",
      description:
        "Explore the finest types of furniture with premium quality and modern designs, crafted to perfection.",
      icon: "🛋️",
    },
    {
      title: "Interior Design",
      description:
        "Collaborate with our skilled interior designers to create the home of your dreams.",
      icon: "🎨",
    },
    {
      title: "Custom Furniture",
      description:
        "Get furniture tailored to your specific needs and preferences, designed just for you.",
      icon: "📐",
    },
    {
      title: "Fast Delivery",
      description:
        "Enjoy fast and reliable delivery to bring your furniture and designs directly to your doorstep.",
      icon: "🚚",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col  items-center bg-gray-50">
        {/* Header */}
        <div className="p-8 max-w-2xl w-full  text-center flex flex-col">
          <motion.h1
            className="text-4xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-black opacity-95 mb-4 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how we make your home design journey seamless and
            delightful.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 max-w-7xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.button
          className="bg-black text-white px-6 py-2 rounded-lg mt-8 hover:bg-zinc-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/categories")}
        >
          Shop Now
        </motion.button> */}
      </div>
    </>
  );
};

export default Ourservices;
