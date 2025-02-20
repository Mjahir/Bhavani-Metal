import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import images from assets
import honeyBrass from "../assets/honey-scrap.jpg";
import vilayatiBrass from "../assets/vilayati-scrap.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${honeyBrass})` }}>
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1 
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Jay Bhavani Metal Corporation
          </motion.h1>

          <motion.p 
            className="text-lg max-w-2xl mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your trusted partner for high-quality brass scrap trading. We provide the best materials to meet your industrial needs.
          </motion.p>

          <motion.a 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </section>

      {/* Our Brass Scrap Types Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Brass Scrap Types</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Honey Brass Scrap */}
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img src={honeyBrass} alt="Honey Brass Scrap" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Honey Brass Scrap</h3>
            <p>High-quality brass scrap with a golden hue, perfect for various industrial applications.</p>
          </motion.div>

          {/* Vilayati Brass Scrap */}
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img src={vilayatiBrass} alt="Vilayati Brass Scrap" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vilayati Brass Scrap</h3>
            <p>Premium imported brass scrap, known for its superior quality and versatility in manufacturing.</p>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/contact"
            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
