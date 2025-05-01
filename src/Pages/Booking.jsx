// import React from "react";
// import { useForm } from "react-hook-form";
// // import emailjs from "emailjs-com";
// import { motion } from "framer-motion";

// const BookingForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitSuccessful },
//   } = useForm();

//   const onSubmit = (data) => {
//     emailjs
//       .send(
//         "service_8wx6qy7", // Replace with EmailJS ID
//         "template_134838u", // Replace with Template ID
//         data,
//         "o51dHNuIWoCqdooiR" // Replace with User ID
//       )
//       .then(() => {
//         reset();
//       });
//   };

//   return (
//     <section className="relative bg-white min-h-screen py-20 px-4">
//       <div className="max-w-3xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-heading text-amber-600 mb-6"
//         >
//           Book Your Cut
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="text-secondary text-lg mb-10 font-body"
//         >
//           We got the vibes, the clippers, and the tunes. Let’s get you fresh.
//         </motion.p>
//       </div>

//       <motion.form
//         onSubmit={handleSubmit(onSubmit)}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.7 }}
//         className="bg-white border border-amber-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl grid gap-6"
//       >
//         <div>
//           <label className="block font-body text-amber-800 mb-1">
//             Full Name
//           </label>
//           <input
//             {...register("name", { required: true })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-amber-500"
//             placeholder="Enter your name"
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm">Name is required</span>
//           )}
//         </div>

//         <div>
//           <label className="block font-body text-amber-800 mb-1">
//             Phone Number
//           </label>
//           <input
//             {...register("phone", { required: true })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-amber-500"
//             placeholder="e.g. 0241234567"
//           />
//           {errors.phone && (
//             <span className="text-red-500 text-sm">Phone is required</span>
//           )}
//         </div>

//         <div>
//           <label className="block font-body text-amber-800 mb-1">Service</label>
//           <select
//             {...register("service", { required: true })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-amber-500"
//           >
//             <option value="">Choose a service</option>
//             <option value="Haircut">Haircut</option>
//             <option value="Beard Trim">Beard Trim</option>
//             <option value="Full Groom">Full Groom</option>
//           </select>
//           {errors.service && (
//             <span className="text-red-500 text-sm">Select a service</span>
//           )}
//         </div>

//         <div>
//           <label className="block font-body text-amber-800 mb-1">
//             Preferred Date & Time
//           </label>
//           <input
//             type="datetime-local"
//             {...register("datetime", { required: true })}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-amber-500"
//           />
//           {errors.datetime && (
//             <span className="text-red-500 text-sm">Pick a date/time</span>
//           )}
//         </div>

//         <div>
//           <label className="block font-body text-amber-800 mb-1">
//             Additional Message
//           </label>
//           <textarea
//             {...register("message")}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-amber-500"
//             rows="4"
//             placeholder="Tell us anything we need to know"
//           ></textarea>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
//         >
//           Confirm Booking
//         </motion.button>

//         {isSubmitSuccessful && (
//           <p className="text-green-600 text-center font-body mt-4">
//             Booking sent! We’ll get back to you.
//           </p>
//         )}
//       </motion.form>

//       {/* SVG Stickers */}
//       {/* <div className="absolute top-6 left-8 w-12 opacity-30 rotate-12">✂️</div>
//       <div className="absolute bottom-10 right-6 w-12 opacity-30 -rotate-6">
//         💈
//       </div> */}
//     </section>
//   );
// };

// export default BookingForm;

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCut, FaClock } from "react-icons/fa";
import { Scissors, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    barber: "",
    date: "",
    time: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: "haircut", name: "Haircut", price: "₦2,500" },
    { id: "fade", name: "Fade", price: "₦3,000" },
    { id: "beard", name: "Beard Trim", price: "₦1,500" },
    { id: "fullgroom", name: "Full Groom", price: "₦5,000" },
    { id: "design", name: "Hair Design", price: "₦3,500" },
    { id: "kids", name: "Kids Cut", price: "₦2,000" },
  ];

  const barbers = [
    { id: "john", name: "John" },
    { id: "mike", name: "Mike" },
    { id: "dave", name: "Dave" },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is being edited
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.barber) errors.barber = "Please select a barber";
    if (!formData.date) errors.date = "Please select a date";
    if (!formData.time) errors.time = "Please select a time";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Prepare data for email
      const emailData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service:
          services.find((s) => s.id === formData.service)?.name ||
          formData.service,
        barber:
          barbers.find((b) => b.id === formData.barber)?.name ||
          formData.barber,
        date: formData.date,
        time: formData.time,
        message: formData.message || "No additional message",
      };

      // Send email using EmailJS
      emailjs
        .send(
          "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
          "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
          emailData,
          "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
        )
        .then(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);

          // Reset form after submission
          setFormData({
            name: "",
            phone: "",
            email: "",
            service: "",
            barber: "",
            date: "",
            time: "",
            message: "",
          });

          // Reset success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
          setIsSubmitting(false);
          alert(
            "There was an error sending your booking. Please try again or contact us directly."
          );
        });
    }
  };

  // Get tomorrow's date in YYYY-MM-DD format for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Get date 30 days from now for max date attribute
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Book Your <span className="text-black">Appointment</span>
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your next haircut with our professional barbers. Choose
            your preferred service, barber, and time slot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-black text-white p-6 flex items-center">
                <FaCalendarAlt className="text-2xl mr-4" />
                <h3 className="text-xl font-bold">Schedule Your Visit</h3>
              </div>

              {isSubmitted ? (
                <div className="p-8 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Check className="text-green-600 w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Booking Confirmed!
                  </h4>
                  <p className="text-gray-600 text-center mb-4">
                    We've received your appointment request and will send you a
                    confirmation shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-black underline hover:text-gray-600 transition-colors"
                  >
                    Make another booking
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Personal Details */}
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Personal Details
                    </h4>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all`}
                      placeholder="Your phone number"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all`}
                      placeholder="Your email address"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div className="md:col-span-2 pt-4 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Service Details
                    </h4>
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="service"
                    >
                      Select Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.service
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all`}
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.price}
                        </option>
                      ))}
                    </select>
                    {formErrors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="barber"
                    >
                      Select Barber
                    </label>
                    <select
                      id="barber"
                      name="barber"
                      value={formData.barber}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.barber ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all`}
                    >
                      <option value="">Choose a barber</option>
                      {barbers.map((barber) => (
                        <option key={barber.id} value={barber.id}>
                          {barber.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.barber && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.barber}
                      </p>
                    )}
                  </div>

                  {/* Date and Time */}
                  <div className="md:col-span-2 pt-4 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Date & Time
                    </h4>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="date">
                      Select Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={minDate}
                      max={maxDateStr}
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.date ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all`}
                    />
                    {formErrors.date && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="time">
                      Select Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.time ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all`}
                    >
                      <option value="">Choose a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {formErrors.time && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.time}
                      </p>
                    )}
                  </div>

                  {/* Additional Comments */}
                  <div className="md:col-span-2 pt-4 border-t border-gray-100">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="message"
                    >
                      Additional Comments (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all"
                      placeholder="Any special requests or additional information we should know..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2 mt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-black text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:bg-gray-800 ${
                        isSubmitting ? "opacity-75" : ""
                      }`}
                    >
                      {isSubmitting ? "Processing..." : "Book Appointment"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="bg-black text-white p-6 flex items-center">
                <FaCalendarAlt className="text-2xl mr-4" />
                <h3 className="text-xl font-bold">Booking Info</h3>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <FaClock className="text-black mr-3" />
                    <h4 className="font-semibold text-lg">Business Hours</h4>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <FaCut className="text-black mr-3" />
                    <h4 className="font-semibold text-lg">Our Services</h4>
                  </div>
                  <div className="ml-8 space-y-2">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">{service.name}</span>
                        <span className="font-medium">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Scissors className="w-4 h-4 mr-2" />
                    Booking Policy
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>
                      • Please arrive 5-10 minutes before your appointment
                    </li>
                    <li>
                      • Cancellations should be made at least 4 hours in advance
                    </li>
                    <li>• Late arrivals may result in reduced service time</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
