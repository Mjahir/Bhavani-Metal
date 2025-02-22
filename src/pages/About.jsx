import { motion } from "framer-motion";
import { ShieldCheck, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading Section with Animation */}
      <motion.h1 
        className="text-5xl font-extrabold text-blue-900 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-blue-600">Jay Bhavani Metal Corporation</span>
      </motion.h1>

      {/* Description Section with Fading Effect */}
      <motion.p 
        className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Jay Bhavani Metal Corporation is a trusted leader in brass scrap trading, offering high-quality materials for various industries worldwide.
      </motion.p>

      {/* Feature Cards Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Quality Assurance */}
        <motion.div 
          className="p-6 bg-white rounded-lg shadow-lg text-center border border-blue-300"
          whileHover={{ scale: 1.05 }}
        >
          <ShieldCheck className="text-blue-500 mx-auto h-12 w-12 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Quality Assurance</h3>
          <p className="text-gray-600">
            We provide premium-grade brass scrap, ensuring top-notch quality for industrial use.
          </p>
        </motion.div>

        {/* Experience & Trust */}
        <motion.div 
          className="p-6 bg-white rounded-lg shadow-lg text-center border border-blue-300"
          whileHover={{ scale: 1.05 }}
        >
          <Award className="text-yellow-500 mx-auto h-12 w-12 mb-4" />
          <h3 className="text-2xl font-semibold text-yellow-600 mb-2">Years of Experience</h3>
          <p className="text-gray-600">
            With decades of expertise, we have built a reputation for trust and reliability in metal trading.
          </p>
        </motion.div>

        {/* Growth & Expansion */}
        <motion.div 
          className="p-6 bg-white rounded-lg shadow-lg text-center border border-blue-300"
          whileHover={{ scale: 1.05 }}
        >
          <TrendingUp className="text-green-500 mx-auto h-12 w-12 mb-4" />
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Global Expansion</h3>
          <p className="text-gray-600">
            We aim for continuous growth, expanding into new markets across the globe.
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-12 p-8 bg-blue-900 text-white rounded-lg shadow-lg">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Our Mission & Vision
        </motion.h2>
        <motion.p 
          className="text-lg text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Our mission is to deliver high-quality brass scrap, build long-term relationships, and expand our reach while maintaining sustainability in the industry.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
