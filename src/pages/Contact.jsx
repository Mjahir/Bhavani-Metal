import emailjs from "@emailjs/browser"; 
import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const formRef = useRef();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.sendForm(
      "service_wvkx7od",   // Replace with your EmailJS Service ID
      "template_vq8n9we",  // Replace with your EmailJS Template ID
      formRef.current,
      "jm7lmAXAWNd-i9XNp"    // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Your inquiry has been submitted!");
        reset(); // Reset form fields after submission
      },
      (error) => {
        console.error("Error sending email:", error.text);
        alert("Failed to send the message. Try again later.");
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 className="text-5xl font-extrabold text-blue-900 text-center mb-6"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        Contact <span className="text-blue-600">Us</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <motion.div className="bg-blue-50 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Bhavani Metal Corporation</h2>
          <div className="flex items-center mb-4"><MapPin className="text-blue-600 h-6 w-6 mr-3" /><p>Phase-2, Dared, G.I.D.C., Jamnagar.</p></div>
          <div className="flex items-center mb-4"><Phone className="text-green-600 h-6 w-6 mr-3" /><p>+91 9427573824</p></div>
          <div className="flex items-center"><Mail className="text-red-600 h-6 w-6 mr-3" /><p>jaybhavanimetal555@gmail.com</p></div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Send Us a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input {...register("name", { required: "Name is required" })} type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Enter a valid email" } })} type="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea {...register("message", { required: "Message is required" })} rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
